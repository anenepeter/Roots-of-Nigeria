import React, { useState, useEffect } from 'react';
import { generateContent, generateIllustration } from '../services/geminiService';
import { ViewState, ContentType, UserProfile } from '../types';
import { FUN_FACTS_AND_JOKES } from '../constants';

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

const OfflineMessage: React.FC = () => (
    <div className="text-center p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        <h3 className="font-bold">You are offline!</h3>
        <p>This content hasn't been saved for offline use yet. Please connect to the internet to view it for the first time.</p>
    </div>
);

interface ContentDetailProps {
  type: ContentType;
  topic: string;
  userProfile: UserProfile;
  onNavigate: (viewState: ViewState) => void;
  onContentRead: (points: number, topic: string) => void;
}

const ContentDetail: React.FC<ContentDetailProps> = ({ type, topic, onNavigate, onContentRead, userProfile }) => {
  const [content, setContent] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [isOfflineAndNotCached, setIsOfflineAndNotCached] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllContent = async () => {
        setLoading(true);
        setIsOfflineAndNotCached(false);

        const contentCacheKey = `content_${topic}`;
        const cachedContent = localStorage.getItem(contentCacheKey);
        let contentIsAvailable = false;

        if (cachedContent) {
            setContent(cachedContent);
            contentIsAvailable = true;
        }

        if (!navigator.onLine) {
            if (!cachedContent) {
                setIsOfflineAndNotCached(true);
            }
        } else {
            // We are online.
            const promises: Promise<any>[] = [];

            if (!cachedContent) {
                promises.push(
                    generateContent(topic, type).then(generatedContent => {
                        if (generatedContent) {
                            try {
                                localStorage.setItem(contentCacheKey, generatedContent);
                            } catch (error) {
                                console.warn(`Failed to cache content for "${topic}". Storage may be full.`, error);
                            }
                            setContent(generatedContent);
                            contentIsAvailable = true;
                        }
                    })
                );
            }

            promises.push(
                generateIllustration(topic).then(base64Image => {
                    if (base64Image) {
                        const fullImageUrl = `data:image/png;base64,${base64Image}`;
                        setImageUrl(fullImageUrl);
                    }
                })
            );
            
            await Promise.all(promises);
        }
        
        if (contentIsAvailable && !userProfile.completedTopics.includes(topic)) {
            onContentRead(10, topic);
        }
        
        setLoading(false);
    };
    fetchAllContent();
  }, [topic, type, onContentRead, userProfile.completedTopics]);


  const formatContent = (text: string) => {
    return text
      .split('\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.substring(4)}</h3>;
        }
        if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>;
        }
        if (paragraph.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.substring(2)}</h1>;
        }
        if (paragraph.startsWith('* ')) {
          return <li key={index} className="ml-6 list-disc">{paragraph.substring(2)}</li>;
        }
        return paragraph.trim() ? <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p> : <br key={index} />;
      });
  };

  if (loading) {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <EnhancedLoader loadingText={`Fetching fascinating facts about ${topic}...`} />
        </div>
    );
  }

  if (isOfflineAndNotCached) {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
             <button onClick={() => onNavigate({ screen: 'LIST', type })} className="mb-6 text-green-700 hover:text-green-900 font-semibold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Back to Topics
              </button>
            <OfflineMessage />
        </div>
    );
}

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
      <button onClick={() => onNavigate({ screen: 'LIST', type })} className="mb-6 text-green-700 hover:text-green-900 font-semibold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Topics
      </button>
      
      <h2 className="text-3xl font-bold text-green-800 mb-4">{topic}</h2>

      <div className="mb-6">
        {imageUrl ? (
            <img src={imageUrl} alt={topic} className="w-full h-64 object-cover rounded-lg shadow-md" />
        ) : null}
      </div>
      
      <div className="prose max-w-none">
          {formatContent(content)}
      </div>
    </div>
  );
};

export default ContentDetail;