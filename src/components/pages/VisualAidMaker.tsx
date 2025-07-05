import React, { useState } from 'react';
import { Palette, Sparkles, Image, Settings } from 'lucide-react';

const VisualAidMaker: React.FC = () => {
  const [formData, setFormData] = useState({
    topic: '',
    visualType: '',
    style: '',
    colorScheme: '',
    complexity: '',
    dimensions: '',
    includeText: false,
    includeLabels: false,
  });
  const [generatedVisual, setGeneratedVisual] = useState('');
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
      setGeneratedVisual(`Visual Aid: ${formData.topic}

Type: ${formData.visualType}
Style: ${formData.style}
Color Scheme: ${formData.colorScheme}
Complexity: ${formData.complexity}
Dimensions: ${formData.dimensions}

Visual Description:
This ${formData.visualType} would be created to illustrate ${formData.topic} using a ${formData.style} style with ${formData.colorScheme} colors. The visual would be designed at ${formData.complexity} complexity level to ensure it's appropriate for the target audience.

Key Visual Elements:
• Main subject: ${formData.topic}
• Visual hierarchy: Clear focus on the primary concept
• Color usage: ${formData.colorScheme} to enhance understanding
• Layout: Organized in ${formData.dimensions} format

${formData.includeText ? 'Text Elements:\n• Explanatory text blocks\n• Key terminology definitions\n• Step-by-step descriptions\n\n' : ''}${formData.includeLabels ? 'Labels & Annotations:\n• Important parts clearly labeled\n• Arrows and callouts for key features\n• Interactive elements highlighted\n\n' : ''}Design Specifications:
- High-resolution output suitable for both print and digital use
- Accessible color contrast for all text elements
- Scalable vector format for flexibility
- Professional appearance appropriate for educational settings

This visual aid would help students understand ${formData.topic} through visual learning, making complex concepts more accessible and memorable.`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 mb-8 border border-white/30 shadow-xl">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Visual Aid Maker</h2>
            <p className="text-amber-700/80 text-lg">Create engaging visual aids to enhance learning and comprehension</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/30 shadow-xl">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="w-5 h-5 text-pink-700" />
            <h3 className="text-xl font-bold text-amber-900">Visual Aid Configuration</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-amber-900 font-medium mb-2">Topic/Subject</label>
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                placeholder="e.g., Solar System, Water Cycle, Human Body"
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 text-amber-900 placeholder-amber-700/50 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Visual Type</label>
                <select
                  name="visualType"
                  value={formData.visualType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select type</option>
                  <option value="Diagram">Diagram</option>
                  <option value="Infographic">Infographic</option>
                  <option value="Flowchart">Flowchart</option>
                  <option value="Timeline">Timeline</option>
                  <option value="Map">Map</option>
                  <option value="Chart/Graph">Chart/Graph</option>
                  <option value="Poster">Poster</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Art Style</label>
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select style</option>
                  <option value="Modern & Clean">Modern & Clean</option>
                  <option value="Cartoon/Playful">Cartoon/Playful</option>
                  <option value="Realistic">Realistic</option>
                  <option value="Minimalist">Minimalist</option>
                  <option value="Hand-drawn">Hand-drawn</option>
                  <option value="Technical">Technical</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Color Scheme</label>
                <select
                  name="colorScheme"
                  value={formData.colorScheme}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select colors</option>
                  <option value="Bright & Vibrant">Bright & Vibrant</option>
                  <option value="Soft & Pastel">Soft & Pastel</option>
                  <option value="Professional">Professional</option>
                  <option value="Monochrome">Monochrome</option>
                  <option value="Earth Tones">Earth Tones</option>
                  <option value="Cool Blues">Cool Blues</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Complexity Level</label>
                <select
                  name="complexity"
                  value={formData.complexity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select complexity</option>
                  <option value="Simple">Simple</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Detailed">Detailed</option>
                  <option value="Comprehensive">Comprehensive</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Dimensions</label>
              <select
                name="dimensions"
                value={formData.dimensions}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 text-amber-900 transition-all"
              >
                <option value="">Select dimensions</option>
                <option value="Square (1:1)">Square (1:1)</option>
                <option value="Landscape (16:9)">Landscape (16:9)</option>
                <option value="Portrait (9:16)">Portrait (9:16)</option>
                <option value="A4 Document">A4 Document</option>
                <option value="Poster (24x36)">Poster (24x36)</option>
                <option value="Social Media">Social Media</option>
              </select>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-4">Additional Options</label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="includeText"
                    checked={formData.includeText}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-pink-500 bg-white/30 border-white/40 rounded focus:ring-pink-400 focus:ring-2"
                  />
                  <span className="text-amber-900 font-medium">Include explanatory text</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="includeLabels"
                    checked={formData.includeLabels}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-pink-500 bg-white/30 border-white/40 rounded focus:ring-pink-400 focus:ring-2"
                  />
                  <span className="text-amber-900 font-medium">Include labels & annotations</span>
                </label>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold px-6 py-4 rounded-xl hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Visual Aid...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Ask Sahayak to Create</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Area */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/30 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-amber-900">Generated Visual Aid</h3>
            {generatedVisual && (
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-amber-900 font-medium transition-all">
                <Image className="w-4 h-4 inline mr-2" />
                Download
              </button>
            )}
          </div>

          {generatedVisual ? (
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <div className="prose prose-amber max-w-none">
                <div className="text-amber-900 leading-relaxed whitespace-pre-line">{generatedVisual}</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-white/10 rounded-xl border border-dashed border-pink-400/30">
              <div className="text-center">
                <Palette className="w-12 h-12 text-pink-600/50 mx-auto mb-4" />
                <p className="text-amber-700/70 font-medium">Your visual aid design will appear here</p>
                <p className="text-amber-600/60 text-sm mt-2">Configure the settings and click generate to create your visual aid</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualAidMaker;