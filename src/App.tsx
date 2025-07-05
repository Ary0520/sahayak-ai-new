import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoadingScreen from './components/auth/LoadingScreen';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/pages/Dashboard';
import StoryGenerator from './components/pages/StoryGenerator';
import WorksheetGenerator from './components/pages/WorksheetGenerator';
import ConceptExplainer from './components/pages/ConceptExplainer';
import VisualAidMaker from './components/pages/VisualAidMaker';
import VoiceAssistant from './components/pages/VoiceAssistant';

function AppContent() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderActivePage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'story-generator':
        return <StoryGenerator />;
      case 'worksheet-generator':
        return <WorksheetGenerator />;
      case 'concept-explainer':
        return <ConceptExplainer />;
      case 'visual-aid-maker':
        return <VisualAidMaker />;
      case 'voice-assistant':
        return <VoiceAssistant />;
      default:
        return <Dashboard />;
    }
  };

  const getPageTitle = () => {
    switch (activePage) {
      case 'dashboard':
        return 'Dashboard';
      case 'story-generator':
        return 'Localized Story Generator';
      case 'worksheet-generator':
        return 'Worksheet Generator';
      case 'concept-explainer':
        return 'Concept Explainer';
      case 'visual-aid-maker':
        return 'Visual Aid Maker';
      case 'voice-assistant':
        return 'Voice Assistant';
      default:
        return 'Dashboard';
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-nunito flex">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f59e0b%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 pointer-events-none"></div>
        
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <Sidebar 
          activePage={activePage} 
          setActivePage={setActivePage}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
          {/* Top Bar */}
          <TopBar 
            pageTitle={getPageTitle()}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main Content Area */}
          <main className="flex-1 p-4 lg:p-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {renderActivePage()}
            </div>
          </main>

          {/* Footer */}
          <footer className="p-4 lg:p-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <p className="text-sm text-amber-600/70 font-medium">
                Powered by Gemini & Firebase
              </p>
            </div>
          </footer>
        </div>
      </div>
    </ProtectedRoute>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;