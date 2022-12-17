import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
// const chatMessage1 = chatMessages[0]["body"];
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog className="chat-log" entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
/* Wave 01: Render one ChatEntry component
  Wave 02: Render ChatLog component */
