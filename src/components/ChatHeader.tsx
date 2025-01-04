import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="text-center mb-3">
      <div className="inline-flex items-center justify-center p-3 rounded-full glass-card mb-4">
        <Bot size={32} className="text-blue-400" />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 flex items-center justify-center gap-3">
        Social Pulse <Sparkles className="text-blue-400" size={window.screen.width > 768 ? 32 : 20} />
      </h1>
      <p className="text-blue-200/80 text-sm sm:text-base md:text-lg">Experience the future of conversation</p>
    </div>
  );
};