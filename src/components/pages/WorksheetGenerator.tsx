import React, { useState } from 'react';
import { FileText, Sparkles, Download, Settings } from 'lucide-react';

const WorksheetGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: '',
    grade: '',
    topic: '',
    worksheetType: '',
    difficulty: '',
    questionCount: '',
    instructions: '',
  });
  const [generatedWorksheet, setGeneratedWorksheet] = useState('');
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
      setGeneratedWorksheet(`${formData.subject} Worksheet - Grade ${formData.grade}
Topic: ${formData.topic}

Instructions: ${formData.instructions}

Questions:

1. Multiple Choice Question: What is the main concept of ${formData.topic}?
   a) Option A
   b) Option B
   c) Option C
   d) Option D

2. Fill in the blank: The process of ${formData.topic} involves _______.

3. Short Answer: Explain how ${formData.topic} affects our daily lives.

4. Problem Solving: Calculate the following problem related to ${formData.topic}...

5. Critical Thinking: Analyze the importance of ${formData.topic} in modern society.

[Additional ${formData.questionCount} questions would be generated based on the ${formData.difficulty} difficulty level and ${formData.worksheetType} format]

Answer Key:
1. c) Option C
2. [Answer explanation]
3. [Model answer]
4. [Step-by-step solution]
5. [Detailed response guide]`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 mb-8 border border-white/30 shadow-xl">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-900">Worksheet Generator</h2>
            <p className="text-amber-700/80 text-lg">Create customized worksheets for any subject and grade level</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/30 shadow-xl">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="w-5 h-5 text-orange-700" />
            <h3 className="text-xl font-bold text-amber-900">Worksheet Configuration</h3>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="Social Studies">Social Studies</option>
                  <option value="History">History</option>
                  <option value="Geography">Geography</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Grade Level</label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select grade</option>
                  <option value="K">Kindergarten</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Topic</label>
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                placeholder="e.g., Fractions, Photosynthesis, Grammar"
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-amber-900 placeholder-amber-700/50 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Worksheet Type</label>
                <select
                  name="worksheetType"
                  value={formData.worksheetType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select type</option>
                  <option value="Multiple Choice">Multiple Choice</option>
                  <option value="Fill in the Blank">Fill in the Blank</option>
                  <option value="Short Answer">Short Answer</option>
                  <option value="Problem Solving">Problem Solving</option>
                  <option value="Mixed">Mixed Questions</option>
                </select>
              </div>

              <div>
                <label className="block text-amber-900 font-medium mb-2">Difficulty Level</label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-amber-900 transition-all"
                >
                  <option value="">Select difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Number of Questions</label>
              <select
                name="questionCount"
                value={formData.questionCount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-amber-900 transition-all"
              >
                <option value="">Select count</option>
                <option value="5">5 Questions</option>
                <option value="10">10 Questions</option>
                <option value="15">15 Questions</option>
                <option value="20">20 Questions</option>
              </select>
            </div>

            <div>
              <label className="block text-amber-900 font-medium mb-2">Special Instructions</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                placeholder="Any specific instructions for the worksheet..."
                rows={3}
                className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 text-amber-900 placeholder-amber-700/50 transition-all resize-none"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold px-6 py-4 rounded-xl hover:from-orange-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Worksheet...</span>
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
            <h3 className="text-xl font-bold text-amber-900">Generated Worksheet</h3>
            {generatedWorksheet && (
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-amber-900 font-medium transition-all">
                <Download className="w-4 h-4 inline mr-2" />
                Download PDF
              </button>
            )}
          </div>

          {generatedWorksheet ? (
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <div className="prose prose-amber max-w-none">
                <pre className="text-amber-900 leading-relaxed whitespace-pre-wrap font-sans">{generatedWorksheet}</pre>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-white/10 rounded-xl border border-dashed border-orange-400/30">
              <div className="text-center">
                <FileText className="w-12 h-12 text-orange-600/50 mx-auto mb-4" />
                <p className="text-amber-700/70 font-medium">Your generated worksheet will appear here</p>
                <p className="text-amber-600/60 text-sm mt-2">Configure the settings and click generate to create your worksheet</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorksheetGenerator;