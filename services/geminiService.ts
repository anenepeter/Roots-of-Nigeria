import { GoogleGenAI, Type, Modality } from "@google/genai";
import { QuizQuestion, ContentType } from "../types";
import { STATIC_QUIZ_QUESTIONS } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateContent = async (topic: string, contentType: ContentType): Promise<string> => {
  let prompt = '';
  switch (contentType) {
    case 'history':
      prompt = `Tell me about "${topic}" in Nigerian history. Write it as an engaging article for a 12-year-old. Use simple language, short paragraphs, and include at least one fun fact. Format the response in Markdown.`;
      break;
    case 'culture':
      prompt = `Describe "${topic}" from Nigerian culture. Explain its significance and how it's practiced. Make it interesting for a 12-year-old. Use simple language and short paragraphs. Format the response in Markdown.`;
      break;
    case 'stories':
      prompt = `Tell me the Nigerian folktale of "${topic}". Write it in a captivating storytelling style for a 12-year-old. Keep the story between 300 and 500 words. Format the response in Markdown.`;
      break;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Sorry, I couldn't fetch the content right now. Please try again later.";
  }
};

export const generateQuiz = async (): Promise<QuizQuestion[]> => {
  const prompt = "Generate 10 multiple-choice quiz questions about Nigerian history and culture suitable for a 12-year-old. Include 4 options for each question.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              description: "A list of quiz questions.",
              items: {
                type: Type.OBJECT,
                properties: {
                  question: {
                    type: Type.STRING,
                    description: "The quiz question."
                  },
                  options: {
                    type: Type.ARRAY,
                    description: "An array of 4 possible answers.",
                    items: { type: Type.STRING }
                  },
                  correctAnswer: {
                    type: Type.STRING,
                    description: "The correct answer from the options array."
                  }
                },
                required: ["question", "options", "correctAnswer"]
              }
            }
          },
          required: ["questions"]
        }
      }
    });

    const jsonText = response.text.trim();
    const parsed = JSON.parse(jsonText) as { questions: QuizQuestion[] };
    // Ensure we don't get more than 10 questions from the API
    return parsed.questions.slice(0, 10);
  } catch (error) {
    console.error("Error generating quiz:", error);
    console.log("API for quiz generation failed. Falling back to a shuffled set of static questions.");
    // Fallback to a shuffled subset of the full static quiz questions list
    const shuffled = [...STATIC_QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }
};

export const generateIllustration = async (topic: string): Promise<string> => {
  const prompt = `A vibrant, colourful, and friendly digital art illustration for a child's storybook about "${topic}". The style should be simple, cheerful, and imaginative. No text, just the image.`;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });
    
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          return part.inlineData.data; // This is the base64 string
        }
      }
    }
    
    console.warn("No illustration content found in response for topic:", topic);
    return '';
  } catch (error) {
    console.error("Error generating illustration:", error);
    return '';
  }
};