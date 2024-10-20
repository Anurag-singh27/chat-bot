import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { MessageType } from '../types';
import { generateResponse } from '../utils/api';

interface ChatInterfaceProps {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  setVisualizations: React.Dispatch<React.SetStateAction<any>>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, setMessages, setVisualizations }) => {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessage: MessageType = { type: 'user', content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    try {
      const response = await generateResponse(input);
      setMessages((prev) => [...prev, { type: 'bot', content: response.text }]);
      setVisualizations(response.visualizations);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [...prev, { type: 'bot', content: 'Sorry, I encountered an error. Please try again.' }]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.type === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
            } rounded-lg p-3 max-w-3/4`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;