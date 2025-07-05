import React from 'react';
import { 
  Home, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Palette, 
  Mic,
  X,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activePage, 
  setActivePage, 
  sidebarOpen, 
  setSidebarOpen 
}) => {
  const { logout, userProfile } = useAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'story-generator', label: 'Story Generator', icon: BookOpen },
    { id: 'worksheet-generator', label: 'Worksheet Generator', icon: FileText },
    { id: 'concept-explainer', label: 'Concept Explainer', icon: HelpCircle },
    { id: 'visual-aid-maker', label: 'Visual Aid Maker', icon: Palette },
    { id: 'voice-assistant', label: 'Voice Assistant', icon: Mic },
  ];

  const handleItemClick = (itemId: string) => {
    setActivePage(itemId);
    setSidebarOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 lg:static lg:inset-0 lg:w-64 lg:flex-shrink-0
    `}>
      <div className="flex flex-col h-full bg-white/20 backdrop-blur-xl border-r border-white/30 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-900">Sahayak</h1>
              <p className="text-sm text-amber-700/80">AI Teaching Assistant</p>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-amber-800" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-amber-400/20 to-orange-400/20 text-amber-900 shadow-lg border border-amber-300/30' 
                    : 'text-amber-800/80 hover:bg-white/20 hover:text-amber-900'
                  }
                  group
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-amber-700' : 'text-amber-600/70 group-hover:text-amber-700'}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-white/20">
          <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {userProfile?.displayName?.charAt(0).toUpperCase() || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-amber-900 truncate">
                {userProfile?.displayName || 'User'}
              </p>
              <p className="text-xs text-amber-700/70 capitalize">
                {userProfile?.role || 'Teacher'}
              </p>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-amber-800/80 hover:bg-white/20 hover:text-amber-900 rounded-xl transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;