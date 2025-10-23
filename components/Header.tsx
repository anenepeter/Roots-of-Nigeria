import React from 'react';
import { ViewState, UserProfile } from '../types';
import { AVATARS } from '../constants';

interface HeaderProps {
  userProfile: UserProfile;
  onNavigate: (viewState: ViewState) => void;
}

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const PointsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ userProfile, onNavigate }) => {
  const Avatar = AVATARS[userProfile.avatarId];

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <Avatar className="w-10 h-10 rounded-full border-2 border-yellow-300 bg-white" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight -mb-1">Roots of Nigeria</h1>
              <span className="text-xs text-yellow-200">{userProfile.username}</span>
            </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-green-800 px-3 py-1 rounded-full">
            <PointsIcon />
            <span className="font-bold">{userProfile.points}</span>
          </div>
          <button
            onClick={() => onNavigate({ screen: 'SETTINGS' })}
            className="p-2 rounded-full hover:bg-green-600 transition-colors duration-200"
            aria-label="Go to settings"
          >
            <SettingsIcon />
          </button>
          <button
            onClick={() => onNavigate({ screen: 'DASHBOARD' })}
            className="p-2 rounded-full hover:bg-green-600 transition-colors duration-200"
            aria-label="Go to dashboard"
          >
            <HomeIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;