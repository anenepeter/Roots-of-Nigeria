import React from 'react';

export type ContentType = 'history' | 'culture' | 'stories';

export type Screen = 'PROFILE_SETUP' | 'DASHBOARD' | 'LIST' | 'DETAIL' | 'QUIZ' | 'SETTINGS';

export type BadgeId = 'HISTORY_BUFF' | 'CULTURE_VULTURE' | 'STORY_SAGE' | 'QUIZ_MASTER_1' | 'QUIZ_MASTER_2' | 'EXPLORER';

export interface ViewState {
  screen: Screen;
  type?: ContentType;
  topic?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ContentTopic {
  title: string;
  description: string;
  emoji: string;
}

export interface UserProfile {
  username: string;
  avatarId: number;
  points: number;
  completedTopics: string[];
  badges: BadgeId[];
}

export interface Badge {
  id: BadgeId;
  name: string;
  description: string;
  // Fix: Use React.ReactElement instead of JSX.Element to avoid issues with the JSX namespace in .ts files.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  criteria: (profile: UserProfile, payload?: any) => boolean;
}