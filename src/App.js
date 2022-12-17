import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
// const chatMessage1 = chatMessages[0]["body"];
const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const toggleHeart = (id) => {
    setMessages((messages) =>
      messages.map((entry) => {
        if (entry.id === id) {
          return { ...entry, isComplete: !entry.isComplete };
        } else {
          return entry;
        }
      })
    );
  };

  return (
    <div id="App heartWidget">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog
          className="chat-log"
          entries={messages}
          toggleHeart={toggleHeart}
        />
      </main>
    </div>
  );
};

export default App;
/* Wave 01: Render one ChatEntry component
  Wave 02: Render ChatLog component */
