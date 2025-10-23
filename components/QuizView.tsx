import React, { useState, useEffect, useCallback } from 'react';
import { generateQuiz } from '../services/geminiService';
import { QuizQuestion, ViewState } from '../types';
import { FUN_FACTS_AND_JOKES, STATIC_QUIZ_QUESTIONS } from '../constants';

interface EnhancedLoaderProps {
  loadingText: string;
}

const EnhancedLoader: React.FC<EnhancedLoaderProps> = ({ loadingText }) => {
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prevIndex) => (prevIndex + 1) % FUN_FACTS_AND_JOKES.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center py-10 animate-fade-in">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mb-4"></div>
      <p className="text-lg font-semibold text-green-700">{loadingText}</p>
      <div className="mt-6 w-full max-w-md p-4 bg-yellow-100/50 rounded-lg">
        <p className="text-sm font-semibold text-yellow-800 mb-1">Fun Fact / Joke Time!</p>
        <p className="text-gray-600 italic">"{FUN_FACTS_AND_JOKES[factIndex]}"</p>
      </div>
    </div>
  );
};

interface QuizViewProps {
  onNavigate: (viewState: ViewState) => void;
  onQuizComplete: (points: number, topic: string, payload?: any) => void;
}

const QuizView: React.FC<QuizViewProps> = ({ onNavigate, onQuizComplete }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  const fetchQuiz = useCallback(async () => {
    setLoading(true);
    setIsFinished(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);

    let quizQuestions;
    if (!navigator.onLine) {
        console.log("Offline mode: Using static quiz questions.");
        quizQuestions = [...STATIC_QUIZ_QUESTIONS]; // Create a copy to shuffle
    } else {
        quizQuestions = await generateQuiz();
    }
    
    // Shuffle questions for variety in both online and offline modes
    quizQuestions.sort(() => Math.random() - 0.5);

    setQuestions(quizQuestions);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswerSelect = (answer: string) => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
    setShowFeedback(true);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const pointsEarned = score * 5;
      const isPerfectScore = score === questions.length;
      onQuizComplete(pointsEarned, 'quiz-complete', { isPerfectScore });
      setIsFinished(true);
    }
  };

  const getButtonClass = (option: string) => {
    if (!showFeedback) {
      return 'bg-white hover:bg-green-100';
    }
    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isCorrect) return 'bg-green-500 text-white';
    if (isSelected && !isCorrect) return 'bg-red-500 text-white';
    return 'bg-gray-200 text-gray-500 cursor-not-allowed';
  };
  
  if (loading) {
      return (
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <EnhancedLoader loadingText="Crafting your challenge..." />
          </div>
      );
  }
  
  if (isFinished) {
    const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Quiz Complete!</h2>
        <p className="text-xl mb-2">Your Score:</p>
        <p className="text-5xl font-bold text-yellow-500 mb-2">{score} / {questions.length}</p>
        <p className="text-lg font-semibold text-green-600 mb-6">You earned {score * 5} points!</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div className="bg-green-600 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
        <button
          onClick={fetchQuiz}
          className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Play Again
        </button>
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) return (
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <EnhancedLoader loadingText="Getting ready..." />
      </div>
  );


  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p className="text-lg font-bold text-green-700">Score: {score}</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">{currentQuestion.question}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            disabled={showFeedback}
            className={`p-4 rounded-lg text-left font-semibold border-2 border-gray-200 transition-all duration-300 ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className="mt-6 text-right animate-fade-in">
          <button
            onClick={handleNextQuestion}
            className="bg-green-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizView;
