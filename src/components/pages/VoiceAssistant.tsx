import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Settings, Play, Pause } from 'lucide-react';

const VoiceAssistant: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [conversation, setConversation] = useState<Array<{id: number, type: 'user' | 'assistant', message: string, timestamp: Date}>>([]);
  const [settings, setSettings] = useState({
    language: 'en-US',
    voice: 'female',
    speed: 'normal',
    autoPlay: true,
  });

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate recording
    setTimeout(() => {
      setIsRecording(false);
      const newMessage = {
        id: Date.now(),
        type: 'user' as const,
        message: "How does photosynthesis work?",
        timestamp: new Date()
      };
      setConversation(prev => [...prev, newMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          type: 'assistant' as const,
          message: "Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen. Think of it as nature's way of cooking food using sunlight as the energy source. The green chlorophyll in leaves acts like tiny solar panels, capturing light energy and using it to combine water from the roots and carbon dioxide from the air to create sugar, which feeds the plant.",
          timestamp: new Date()
        };
        setConversation(prev => [...prev, aiResponse]);
      }, 1000);
    }, 3000);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSettingChange = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 mb-8 border border-white/30 shadow-xl">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Voice Assistant</h2>
            <p className="text-amber-700/80 text-lg">Interactive voice-powered AI assistant for teaching and learning</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Voice Controls */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="w-5 h-5 text-purple-700" />
            <h3 className="text-xl font-bold text-amber-900">Voice Controls</h3>
          </div>

          <div className="space-y-6">
            {/* Recording Button */}
            <div className="text-center">
              <button
                onClick={isRecording ? handleStopRecording : handleStartRecording}
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                  isRecording 
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                    : 'bg-gradient-to-br from-purple-400 to-indigo-500 hover:from-purple-500 hover:to-indigo-600'
                }`}
              >
                {isRecording ? (
                  <MicOff className="w-10 h-10 text-white" />
                ) : (
                  <Mic className="w-10 h-10 text-white" />
                )}
              </button>
              <p className="text-amber-900 font-medium mt-4">
                {isRecording ? 'Recording... Tap to stop' : 'Tap to start recording'}
              </p>
            </div>

            {/* Voice Settings */}
            <div className="space-y-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-amber-900 transition-all"
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="es-ES">Spanish</option>
                  <option value="fr-FR">French</option>
                  <option value="hi-IN">Hindi</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Voice</label>
                <select
                  value={settings.voice}
                  onChange={(e) => handleSettingChange('voice', e.target.value)}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-amber-900 transition-all"
                >
                  <option value="female">Female Voice</option>
                  <option value="male">Male Voice</option>
                  <option value="child">Child Voice</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Speed</label>
                <select
                  value={settings.speed}
                  onChange={(e) => handleSettingChange('speed', e.target.value)}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 text-amber-900 transition-all"
                >
                  <option value="slow">Slow</option>
                  <option value="normal">Normal</option>
                  <option value="fast">Fast</option>
                </select>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="autoPlay"
                  checked={settings.autoPlay}
                  onChange={(e) => handleSettingChange('autoPlay', e.target.checked.toString())}
                  className="w-5 h-5 text-purple-500 bg-white/30 border-white/40 rounded focus:ring-purple-400 focus:ring-2"
                />
                <label htmlFor="autoPlay" className="text-amber-900 font-medium">Auto-play responses</label>
              </div>
            </div>
          </div>
        </div>

        {/* Conversation History */}
        <div className="lg:col-span-2 bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-amber-900">Conversation</h3>
            <button
              onClick={handlePlayPause}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-amber-900 font-medium transition-all flex items-center space-x-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {conversation.length === 0 ? (
              <div className="flex items-center justify-center h-32 bg-white/10 rounded-xl border border-dashed border-purple-400/30">
                <div className="text-center">
                  <Mic className="w-8 h-8 text-purple-600/50 mx-auto mb-2" />
                  <p className="text-amber-700/70 font-medium">Start a conversation</p>
                  <p className="text-amber-600/60 text-sm mt-1">Press the microphone to begin</p>
                </div>
              </div>
            ) : (
              conversation.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-400/20 to-indigo-400/20 border border-purple-300/30 ml-8'
                      : 'bg-gradient-to-r from-amber-400/20 to-orange-400/20 border border-amber-300/30 mr-8'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-purple-500' 
                        : 'bg-amber-500'
                    }`}>
                      {message.type === 'user' ? (
                        <span className="text-white text-sm font-semibold">U</span>
                      ) : (
                        <span className="text-white text-sm font-semibold">S</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-amber-900 font-medium mb-1">
                        {message.type === 'user' ? 'You' : 'Sahayak'}
                      </p>
                      <p className="text-amber-800 leading-relaxed">{message.message}</p>
                      <p className="text-amber-600/60 text-xs mt-2">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    {message.type === 'assistant' && (
                      <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                        <Volume2 className="w-4 h-4 text-amber-700" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-amber-900 font-medium mb-3">Quick Questions:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Explain photosynthesis",
                "What is gravity?",
                "How does the heart work?",
                "Tell me about the solar system"
              ].map((question, index) => (
                <button
                  key={index}
                  className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-amber-900 text-sm transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;