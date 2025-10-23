import React, { useState, useEffect, useCallback } from 'react';
import { ViewState } from '../types';

interface SettingsProps {
    onNavigate: (viewState: ViewState) => void;
}

// Helper to format bytes into a readable string (KB, MB)
const formatBytes = (bytes: number, decimals = 2): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const Settings: React.FC<SettingsProps> = ({ onNavigate }) => {
    const [storageSize, setStorageSize] = useState<number>(0);
    const [message, setMessage] = useState<string>('');

    const calculateStorage = useCallback(() => {
        let total = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('content_')) {
                const value = localStorage.getItem(key);
                if (value) {
                    // Simple calculation based on string length (UTF-16 characters are 2 bytes)
                    total += (key.length + value.length) * 2;
                }
            }
        }
        setStorageSize(total);
    }, []);

    useEffect(() => {
        calculateStorage();
    }, [calculateStorage]);

    const handleClearCache = () => {
        const isConfirmed = window.confirm(
            'Are you sure you want to clear all offline content? Your profile and points will not be affected.'
        );

        if (isConfirmed) {
            const keysToRemove: string[] = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('content_')) {
                    keysToRemove.push(key);
                }
            }
            
            keysToRemove.forEach(key => localStorage.removeItem(key));
            
            calculateStorage();
            setMessage('Offline content has been cleared successfully!');
            setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
        }
    };

    return (
        <div className="animate-fade-in bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <button onClick={() => onNavigate({ screen: 'DASHBOARD' })} className="mb-6 text-green-700 hover:text-green-900 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Dashboard
            </button>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Settings</h2>

            <div className="space-y-6">
                <div className="p-4 border rounded-lg bg-gray-50">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Offline Storage</h3>
                    <p className="text-gray-600 mb-4">
                        This is the amount of space the app is using to store articles and illustrations for offline reading.
                    </p>
                    <div className="flex items-center justify-between bg-white p-3 rounded-md">
                        <span className="font-medium text-gray-700">Currently Using:</span>
                        <span className="font-bold text-green-700 text-lg">{formatBytes(storageSize)}</span>
                    </div>
                </div>

                <div>
                    <button
                        onClick={handleClearCache}
                        className="w-full sm:w-auto bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 disabled:bg-gray-400"
                        disabled={storageSize === 0}
                    >
                        Clear Cached Data
                    </button>
                    {message && <p className="text-green-600 mt-3 text-sm">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Settings;