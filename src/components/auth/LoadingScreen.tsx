import React from 'react';
import { BookOpen } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-nunito flex items-center justify-center">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f59e0b%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 pointer-events-none"></div>
      
      <div className="text-center relative z-10">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto mb-6 animate-pulse">
          <BookOpen className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Sahayak</h1>
        <p className="text-amber-700/80 text-lg mb-6">AI Teaching Assistant</p>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-amber-600/70 text-sm mt-4">Loading your workspace...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;