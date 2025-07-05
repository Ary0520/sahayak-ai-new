import React from 'react';
import { Menu, Bell, Settings } from 'lucide-react';

interface TopBarProps {
  pageTitle: string;
  setSidebarOpen: (open: boolean) => void;
}

const TopBar: React.FC<TopBarProps> = ({ pageTitle, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-amber-800" />
          </button>
          <h1 className="text-2xl font-bold text-amber-900">{pageTitle}</h1>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-white/20 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-amber-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-amber-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;