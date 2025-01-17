import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        placeholder="Type your message..."
        className="flex-grow px-3 py-2 md:px-5 md:py-4 rounded-2xl glass-input text-blue-50 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 pr-10 md:pr-12"
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="ml-2 p-2 md:p-3 rounded-xl glass-card hover:bg-blue-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-blue-400"
      >
        <Send size={20} />
      </button>
    </form>
  );
};