import React, { useState } from 'react';
import { BookOpen, Sparkles, Upload, Settings } from 'lucide-react';

const StoryGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    topic: '',
    ageGroup: '',
    language: '',
    storyLength: '',
    moralLesson: '',
    characters: '',
  });
  const [generatedStory, setGeneratedStory] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedStory(`Once upon a time, in a small village nestled between rolling hills, there lived a young girl named Maya who loved to explore. She had always been curious about the world around her, especially when it came to ${formData.topic}...

This story would continue for ${formData.storyLength} paragraphs, teaching children about ${formData.topic} while incorporating the moral lesson of ${formData.moralLesson}. The characters ${formData.characters} would guide the reader through an engaging adventure suitable for ${formData.ageGroup} age group.

The story would be written in ${formData.language} and would use age-appropriate language and concepts to make learning both fun and memorable.`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 mb-8 border border-white/30 shadow-xl">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Localized Story Generator</h2>
            <p className="text-amber-700/80 text-lg">Create engaging stories tailored to your students' culture and language</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/30 shadow-xl">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="w-5 h-5 text-amber-700" />
            <h3 className="text-xl font-bold text-amber-900">Story Configuration</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-amber-900 font-medium mb-2">Story Topic</label>
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                placeholder="e.g., Friendship, Science, History"
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 placeholder-amber-700/50 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Age Group</label>
                <select
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select age group</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9-12">9-12 years</option>
                  <option value="13-15">13-15 years</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Language</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Story Length</label>
              <select
                name="storyLength"
                value={formData.storyLength}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 transition-all"
              >
                <option value="">Select length</option>
                <option value="Short (3-5 paragraphs)">Short (3-5 paragraphs)</option>
                <option value="Medium (6-10 paragraphs)">Medium (6-10 paragraphs)</option>
                <option value="Long (11-15 paragraphs)">Long (11-15 paragraphs)</option>
              </select>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Moral Lesson</label>
              <input
                type="text"
                name="moralLesson"
                value={formData.moralLesson}
                onChange={handleInputChange}
                placeholder="e.g., Kindness, Honesty, Perseverance"
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 placeholder-amber-700/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Main Characters</label>
              <textarea
                name="characters"
                value={formData.characters}
                onChange={handleInputChange}
                placeholder="Describe the main characters..."
                rows={3}
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-amber-900 placeholder-amber-700/50 transition-all resize-none"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold px-6 py-4 rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Story...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Ask Sahayak to Generate</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Area */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/30 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-amber-900">Generated Story</h3>
            {generatedStory && (
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-amber-900 font-medium transition-all">
                <Upload className="w-4 h-4 inline mr-2" />
                Export
              </button>
            )}
          </div>

          {generatedStory ? (
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <div className="prose prose-amber max-w-none">
                <p className="text-amber-900 leading-relaxed whitespace-pre-line">{generatedStory}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-white/10 rounded-xl border border-dashed border-amber-400/30">
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-amber-600/50 mx-auto mb-4" />
                <p className="text-amber-700/70 font-medium">Your generated story will appear here</p>
                <p className="text-amber-600/60 text-sm mt-2">Fill in the form and click generate to create your story</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryGenerator;