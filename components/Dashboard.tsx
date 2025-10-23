import React from 'react';
import { ViewState, UserProfile } from '../types';
import { BADGES } from '../constants';

interface DashboardProps {
  userProfile: UserProfile;
  onNavigate: (viewState: ViewState) => void;
}

const HistoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CultureIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 15 7.009 15 9c1.97.99 4.343 3.343 2.657 9.657z" /></svg>;
const StoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18M5.47 12a10.45 10.45 0 011.08-4.522A10.45 10.45 0 0112 3.003a10.45 10.45 0 015.45 4.478A10.45 10.45 0 0118.53 12a10.45 10.45 0 01-1.08 4.522A10.45 10.45 0 0112 20.997a10.45 10.45 0 01-5.45-4.478A10.45 10.45 0 015.47 12z" /></svg>;
const QuizIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


const Dashboard: React.FC<DashboardProps> = ({ userProfile, onNavigate }) => {
  const menuItems = [
    { type: 'history', title: 'Explore History', description: "Journey through Nigeria's past.", icon: <HistoryIcon />, color: 'bg-blue-500', hover: 'hover:bg-blue-600' },
    { type: 'culture', title: 'Discover Cultures', description: 'Dive into vibrant traditions.', icon: <CultureIcon />, color: 'bg-yellow-500', hover: 'hover:bg-yellow-600' },
    { type: 'stories', title: 'Story Time', description: 'Listen to timeless folktales.', icon: <StoryIcon />, color: 'bg-purple-500', hover: 'hover:bg-purple-600' },
    { type: 'quiz', title: 'Quiz Challenge', description: 'Test your knowledge!', icon: <QuizIcon />, color: 'bg-red-500', hover: 'hover:bg-red-600' },
  ];
  
  const earnedBadges = BADGES.filter(badge => userProfile.badges.includes(badge.id));

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-2">Welcome, {userProfile.username}!</h2>
      <p className="text-lg text-gray-600 mb-8">What would you like to discover today?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <button
            key={item.type}
            onClick={() => onNavigate({ screen: item.type === 'quiz' ? 'QUIZ' : 'LIST', type: item.type !== 'quiz' ? item.type as any : undefined })}
            className={`p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center ${item.color} ${item.hover}`}
          >
            {item.icon}
            <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
            <p className="mt-1">{item.description}</p>
          </button>
        ))}
      </div>

      {earnedBadges.length > 0 && (
          <div className="mt-12 bg-white/50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-800 mb-4">My Badges</h3>
              <div className="flex flex-wrap justify-center gap-4">
                  {earnedBadges.map((badge) => {
                      const Icon = badge.icon;
                      return (
                          <div key={badge.id} className="text-center" title={badge.description}>
                              <Icon className="h-16 w-16 mx-auto text-yellow-500" />
                              <p className="mt-1 font-semibold text-sm">{badge.name}</p>
                          </div>
                      );
                  })}
              </div>
          </div>
      )}
    </div>
  );
};

export default Dashboard;
