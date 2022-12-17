import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
// const chatMessage1 = chatMessages[0]["body"];
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
  <ChatLog/>
        {/* <ChatEntry
        // id = {chatMessages.id}
        sender = {chatMessages[0].sender}
        body = {chatMessages[0].body}
        time = {chatMessages[0].timeStamp}
        // liked = {chatMessages.liked}
        /> */}
      </main>
    </div>
  );
};

export default App;
/* Wave 01: Render one ChatEntry component
  Wave 02: Render ChatLog component */
