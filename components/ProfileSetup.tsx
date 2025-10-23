import React, { useState } from 'react';
import { UserProfile } from '../types';
import { AVATARS } from '../constants';

interface ProfileSetupProps {
    onProfileSave: (profile: Omit<UserProfile, 'points' | 'completedTopics' | 'badges'>) => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onProfileSave }) => {
    const [username, setUsername] = useState('');
    const [selectedAvatarId, setSelectedAvatarId] = useState<number>(0);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim().length < 3) {
            setError('Please enter a name with at least 3 characters.');
            return;
        }
        setError('');
        onProfileSave({ username: username.trim(), avatarId: selectedAvatarId });
    };

    return (
        <div className="flex flex-col items-center justify-center h-full animate-fade-in">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg text-center">
                <h2 className="text-3xl font-bold text-green-800 mb-2">Welcome to Roots of Nigeria!</h2>
                <p className="text-gray-600 mb-6">Let's create your explorer profile.</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                            aria-label="Enter your name"
                        />
                    </div>

                    <p className="font-semibold text-gray-700 mb-3">Choose your avatar:</p>
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        {AVATARS.map((Avatar, index) => (
                            <button
                                type="button"
                                key={index}
                                onClick={() => setSelectedAvatarId(index)}
                                className={`p-2 rounded-full transition-all duration-200 ${selectedAvatarId === index ? 'ring-4 ring-yellow-400' : 'ring-2 ring-transparent hover:ring-green-300'}`}
                                aria-label={`Select avatar ${index + 1}`}
                            >
                                <Avatar className="w-full h-full bg-gray-100 rounded-full" />
                            </button>
                        ))}
                    </div>
                    
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:bg-gray-400"
                        disabled={username.trim().length < 3}
                    >
                        Start Exploring
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileSetup;