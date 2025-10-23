
import React from 'react';
import { ViewState, ContentType, ContentTopic } from '../types';
import { HISTORY_TOPICS, CULTURE_TOPICS, STORY_TOPICS, CONTENT_TYPE_DETAILS } from '../constants';

interface ContentSectionProps {
  type: ContentType;
  onNavigate: (viewState: ViewState) => void;
}

const ContentSection: React.FC<ContentSectionProps> = ({ type, onNavigate }) => {
  const topics: { [key in ContentType]: ContentTopic[] } = {
    history: HISTORY_TOPICS,
    culture: CULTURE_TOPICS,
    stories: STORY_TOPICS,
  };

  const currentTopics = topics[type];
  const details = CONTENT_TYPE_DETAILS[type];

  const colorClasses = {
      blue: 'border-blue-500 hover:bg-blue-50',
      yellow: 'border-yellow-500 hover:bg-yellow-50',
      purple: 'border-purple-500 hover:bg-purple-50',
  };

  return (
    <div className="animate-fade-in">
      <button onClick={() => onNavigate({ screen: 'DASHBOARD' })} className="mb-6 text-green-700 hover:text-green-900 font-semibold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to Dashboard
      </button>
      <h2 className="text-3xl font-bold text-green-800">{details.title}</h2>
      <p className="text-lg text-gray-600 mb-8">{details.subtitle}</p>
      <div className="space-y-4">
        {currentTopics.map((topic) => (
          <div
            key={topic.title}
            onClick={() => onNavigate({ screen: 'DETAIL', type, topic: topic.title })}
            className={`p-4 border-l-4 ${colorClasses[details.color as keyof typeof colorClasses]} rounded-r-lg bg-white shadow-sm cursor-pointer transition-all duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-1`}
          >
            <div className="flex items-center">
                <span className="text-2xl mr-4">{topic.emoji}</span>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
                    <p className="text-gray-500">{topic.description}</p>
                </div>
                <div className="ml-auto text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
