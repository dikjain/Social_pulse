import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ChatHeader } from './components/ChatHeader';
import { useChat } from './hooks/useChat';
import { Sparkles, ArrowLeft } from 'lucide-react';
import './styles/glassmorphism.css';
import LandingPage from './components/LandingPage.jsx';

function App() {
  const {
    sessions,
    currentSessionId,
    currentSession,
    isLoading,
    error,
    sendMessage,
    setCurrentSessionId,
    createNewSession,
    deleteSession,
    messageEndRef,
  } = useChat();

  const [showSidebar, setShowSidebar] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSession?.messages]);

  // Hide sidebar when session is selected on mobile
  useEffect(() => {
    if (window.innerWidth < 768 && currentSessionId) {
      setShowSidebar(false);
    }
  }, [currentSessionId]);

  if (showLanding) {
    return <LandingPage onGetStarted={() => {
      setShowLanding(false);
    }} />;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      {showSidebar && (
        <div className="md:hidden">
          <Sidebar
            sessions={sessions}
            currentSessionId={currentSessionId}
            onNewChat={() => {
              createNewSession();
              setShowSidebar(false);
            }}
            onSelectSession={(id) => {
              setCurrentSessionId(id);
              setShowSidebar(false);
            }}
            onDeleteSession={deleteSession}
          />
        </div>
      )}
      <div className="hidden md:block">
        <Sidebar
          sessions={sessions}
          currentSessionId={currentSessionId}
          onNewChat={createNewSession}
          onSelectSession={setCurrentSessionId}
          onDeleteSession={deleteSession}
        />
      </div>
      
      <div className="flex-1 flex flex-col p-2 sm:p-3 md:p-4 overflow-hidden">
        <ChatHeader />
        
        <div className="flex-1 glass rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 mt-2 sm:mt-3 md:mt-4 overflow-hidden mb-2 sm:mb-3 md:mb-4">
          <div className="h-full overflow-y-auto space-y-2 sm:space-y-3 md:space-y-4 scrollbar-thin">
            {!currentSession?.messages.length ? (
              <div className="flex flex-col items-center justify-center h-full text-blue-300/60">
                {currentSessionId && (
                  <button
                    onClick={() => {
                      setCurrentSessionId('');
                      setShowSidebar(true);
                    }}
                    className="absolute top-4 left-4 p-2 rounded-xl glass-card hover:bg-blue-400/20 transition-all duration-200 text-blue-400 md:hidden"
                  >
                    <ArrowLeft size={24} />
                  </button>
                )}
                <Sparkles size={32} className="mb-2 sm:mb-3 md:mb-4 text-blue-400" />
                <p className="text-sm sm:text-base md:text-lg">Start a conversation with the AI</p>
              </div>
            ) : (
              currentSession.messages.map((message, index) => (
                <ChatMessage key={message.id} message={message} />
              ))
            )}
            {error && (
              <div className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-red-500/20 text-red-200 text-center text-sm sm:text-base">
                {error}
              </div>
            )}
            <div ref={messageEndRef} />
          </div>
        </div>
        
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}

export default App;