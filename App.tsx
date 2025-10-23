import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ContentSection from './components/ContentSection';
import ContentDetail from './components/ContentDetail';
import QuizView from './components/QuizView';
import ProfileSetup from './components/ProfileSetup';
import Settings from './components/Settings';
import { ViewState, ContentType, UserProfile, BadgeId } from './types';
import { AfricanPattern, BADGES, HISTORY_TOPICS, CULTURE_TOPICS, STORY_TOPICS } from './constants';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>({ screen: 'DASHBOARD' });
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isProfileLoaded, setIsProfileLoaded] = useState<boolean>(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('naijaExplorerProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
    setIsProfileLoaded(true);
  }, []);

  const updateProfile = (updatedProfile: UserProfile) => {
    setUserProfile(updatedProfile);
    try {
      localStorage.setItem('naijaExplorerProfile', JSON.stringify(updatedProfile));
    } catch (error) {
        console.error("Failed to save profile to localStorage. Storage may be full.", error);
    }
  };

  const navigateTo = useCallback((newViewState: ViewState) => {
    setViewState(newViewState);
  }, []);

  const handleProfileSave = (profile: Omit<UserProfile, 'points' | 'completedTopics' | 'badges'>) => {
    const newProfile: UserProfile = {
      ...profile,
      points: 0,
      completedTopics: [],
      badges: [],
    };
    updateProfile(newProfile);
    navigateTo({ screen: 'DASHBOARD' });
  };
  
  const checkForNewBadges = (profile: UserProfile): UserProfile => {
      const newBadges = BADGES.filter(badge => 
          !profile.badges.includes(badge.id) && badge.criteria(profile)
      );

      if (newBadges.length > 0) {
          const awardedBadges = newBadges.map(b => b.id);
          // In a real app, you might show a notification here!
          console.log(`Awarded new badges: ${awardedBadges.join(', ')}`);
          return { ...profile, badges: [...profile.badges, ...awardedBadges] };
      }
      return profile;
  };

  const addPointsAndTopic = (pointsToAdd: number, topicTitle?: string) => {
    if (!userProfile) return;

    let updatedProfile = { ...userProfile };

    // Add points
    updatedProfile.points += pointsToAdd;

    // Add completed topic if it's new
    if (topicTitle && !updatedProfile.completedTopics.includes(topicTitle)) {
      updatedProfile.completedTopics = [...updatedProfile.completedTopics, topicTitle];
    }
    
    // Check for new badges
    updatedProfile = checkForNewBadges(updatedProfile);

    updateProfile(updatedProfile);
  };


  const renderContent = () => {
    if (!isProfileLoaded) {
      return <div className="flex items-center justify-center h-full"><p>Loading Profile...</p></div>;
    }

    if (!userProfile) {
      return <ProfileSetup onProfileSave={handleProfileSave} />;
    }

    switch (viewState.screen) {
      case 'DASHBOARD':
        return <Dashboard userProfile={userProfile} onNavigate={navigateTo} />;
      case 'LIST':
        return <ContentSection type={viewState.type as ContentType} onNavigate={navigateTo} />;
      case 'DETAIL':
        return <ContentDetail type={viewState.type as ContentType} topic={viewState.topic as string} onNavigate={navigateTo} onContentRead={addPointsAndTopic} userProfile={userProfile}/>;
      case 'QUIZ':
        return <QuizView onNavigate={navigateTo} onQuizComplete={addPointsAndTopic} />;
      case 'SETTINGS':
        return <Settings onNavigate={navigateTo} />;
      default:
        return <Dashboard userProfile={userProfile} onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <AfricanPattern />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {userProfile && <Header userProfile={userProfile} onNavigate={navigateTo} />}
        <main className="flex-grow container mx-auto p-4 md:p-8">
          {renderContent()}
        </main>
        <footer className="text-center p-4 text-green-800 text-sm">
          <p>&copy; {new Date().getFullYear()} Roots of Nigeria. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;