import React, { useState } from 'react';
import { HelpCircle, Sparkles, BookOpen, Settings } from 'lucide-react';

const ConceptExplainer: React.FC = () => {
  const [formData, setFormData] = useState({
    concept: '',
    subject: '',
    gradeLevel: '',
    explanationStyle: '',
    includeExamples: false,
    includeAnalogies: false,
    includeVisuals: false,
  });
  const [generatedExplanation, setGeneratedExplanation] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedExplanation(`Understanding ${formData.concept}

What is ${formData.concept}?
${formData.concept} is a fundamental concept in ${formData.subject} that plays a crucial role in understanding how things work in our world.

${formData.includeAnalogies ? `Think of it like this:
Imagine ${formData.concept} as... [analogy would be provided here based on the concept]

` : ''}Key Points:
• Main characteristic 1 of ${formData.concept}
• Main characteristic 2 of ${formData.concept}
• Main characteristic 3 of ${formData.concept}

${formData.includeExamples ? `Real-world Examples:
1. Example 1: How ${formData.concept} appears in daily life
2. Example 2: Another practical application
3. Example 3: A common scenario students can relate to

` : ''}Why is this important?
Understanding ${formData.concept} helps students grasp more complex topics in ${formData.subject} and connects to real-world applications they encounter every day.

${formData.includeVisuals ? `Visual Aids Suggested:
- Diagram showing the process
- Flowchart illustrating the concept
- Interactive model or simulation
- Real-world photographs

` : ''}Common Misconceptions:
• Misconception 1: [What students often think incorrectly]
• Misconception 2: [Another common confusion]
• Misconception 3: [Frequent misunderstanding]

Teaching Tips:
- Start with familiar examples
- Use hands-on activities
- Encourage questions and discussions
- Connect to prior knowledge

This explanation is tailored for ${formData.gradeLevel} students using a ${formData.explanationStyle} approach.`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 mb-8 border border-white/30 shadow-xl">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Concept Explainer</h2>
            <p className="text-amber-700/80 text-lg">Break down complex concepts into simple, understandable explanations</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/30 shadow-xl">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="w-5 h-5 text-red-700" />
            <h3 className="text-xl font-bold text-amber-900">Explanation Configuration</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-amber-900 font-medium mb-2">Concept to Explain</label>
              <input
                type="text"
                name="concept"
                value={formData.concept}
                onChange={handleInputChange}
                placeholder="e.g., Photosynthesis, Gravity, Democracy"
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 text-amber-900 placeholder-amber-700/50 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select subject</option>
                  <option value="Science">Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Social Studies">Social Studies</option>
                  <option value="English">English</option>
                  <option value="History">History</option>
                  <option value="Geography">Geography</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Grade Level</label>
                <select
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select grade</option>
                  <option value="Elementary">Elementary (K-5)</option>
                  <option value="Middle School">Middle School (6-8)</option>
                  <option value="High School">High School (9-12)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Explanation Style</label>
              <select
                name="explanationStyle"
                value={formData.explanationStyle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/20 text-amber-900 transition-all"
              >
                <option value="">Select style</option>
                <option value="Simple & Direct">Simple & Direct</option>
                <option value="Story-based">Story-based</option>
                <option value="Question & Answer">Question & Answer</option>
                <option value="Step-by-step">Step-by-step</option>
                <option value="Interactive">Interactive</option>
              </select>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-4">Include Additional Elements</label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="includeExamples"
                    checked={formData.includeExamples}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-500 bg-white/30 border-white/40 rounded focus:ring-red-400 focus:ring-2"
                  />
                  <span className="text-amber-900 font-medium">Real-world examples</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="includeAnalogies"
                    checked={formData.includeAnalogies}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-500 bg-white/30 border-white/40 rounded focus:ring-red-400 focus:ring-2"
                  />
                  <span className="text-amber-900 font-medium">Analogies & metaphors</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="includeVisuals"
                    checked={formData.includeVisuals}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-500 bg-white/30 border-white/40 rounded focus:ring-red-400 focus:ring-2"
                  />
                  <span className="text-amber-900 font-medium">Visual aid suggestions</span>
                </label>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold px-6 py-4 rounded-xl hover:from-red-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Explanation...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Ask Sahayak to Explain</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Area */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/30 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-amber-900">Generated Explanation</h3>
            {generatedExplanation && (
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-amber-900 font-medium transition-all">
                <BookOpen className="w-4 h-4 inline mr-2" />
                Save
              </button>
            )}
          </div>

          {generatedExplanation ? (
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <div className="prose prose-amber max-w-none">
                <div className="text-amber-900 leading-relaxed whitespace-pre-line">{generatedExplanation}</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-white/10 rounded-xl border border-dashed border-red-400/30">
              <div className="text-center">
                <HelpCircle className="w-12 h-12 text-red-600/50 mx-auto mb-4" />
                <p className="text-amber-700/70 font-medium">Your concept explanation will appear here</p>
                <p className="text-amber-600/60 text-sm mt-2">Enter a concept and click generate to create a detailed explanation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConceptExplainer;