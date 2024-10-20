import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';

function App() {
  const [messages, setMessages] = useState([]);
  const [visualizations, setVisualizations] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <ChatInterface messages={messages} setMessages={setMessages} setVisualizations={setVisualizations} />
      </div>
      <Sidebar visualizations={visualizations} />
    </div>
  );
}

export default App;