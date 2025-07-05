import React from 'react';
import { BookOpen, FileText, HelpCircle, Palette, TrendingUp, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: BookOpen, label: 'Stories Generated', value: '24', color: 'from-amber-400 to-orange-500' },
    { icon: FileText, label: 'Worksheets Created', value: '18', color: 'from-orange-400 to-red-500' },
    { icon: HelpCircle, label: 'Concepts Explained', value: '35', color: 'from-red-400 to-pink-500' },
    { icon: Palette, label: 'Visual Aids Made', value: '12', color: 'from-pink-400 to-purple-500' },
  ];

  const recentActivity = [
    { action: 'Generated story', title: 'The Magical Forest Adventure', time: '2 hours ago' },
    { action: 'Created worksheet', title: 'Mathematics Grade 5', time: '4 hours ago' },
    { action: 'Explained concept', title: 'Photosynthesis Process', time: '1 day ago' },
    { action: 'Made visual aid', title: 'Solar System Diagram', time: '2 days ago' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 lg:p-8 mb-8 border border-white/30 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-2">Welcome back, Teacher!</h2>
            <p className="text-amber-700/80 text-lg">Ready to create engaging content for your students?</p>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index}
              className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">+12%</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-1">{stat.value}</h3>
              <p className="text-amber-700/80 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl">
          <h3 className="text-xl font-bold text-amber-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-3"></div>
                <div className="flex-1">
                  <p className="font-medium text-amber-900">{item.action}</p>
                  <p className="text-amber-700/80 text-sm">{item.title}</p>
                  <p className="text-amber-600/60 text-xs mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl">
          <h3 className="text-xl font-bold text-amber-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="p-4 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-xl border border-amber-300/30 hover:from-amber-400/30 hover:to-orange-400/30 transition-all duration-300 hover:shadow-lg group">
              <BookOpen className="w-8 h-8 text-amber-700 mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-amber-900 text-sm">New Story</p>
            </button>
            <button className="p-4 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-xl border border-orange-300/30 hover:from-orange-400/30 hover:to-red-400/30 transition-all duration-300 hover:shadow-lg group">
              <FileText className="w-8 h-8 text-orange-700 mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-orange-900 text-sm">Create Worksheet</p>
            </button>
            <button className="p-4 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-xl border border-red-300/30 hover:from-red-400/30 hover:to-pink-400/30 transition-all duration-300 hover:shadow-lg group">
              <HelpCircle className="w-8 h-8 text-red-700 mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-red-900 text-sm">Explain Concept</p>
            </button>
            <button className="p-4 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-xl border border-pink-300/30 hover:from-pink-400/30 hover:to-purple-400/30 transition-all duration-300 hover:shadow-lg group">
              <Palette className="w-8 h-8 text-pink-700 mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-pink-900 text-sm">Visual Aid</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;