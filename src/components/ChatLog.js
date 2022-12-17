import React from 'react';

const Chatlog = (props) => {
  return (
    <div>
      <ChatEntry
        sender={props.sender}
        body={props.body}
        time={props.timeStamp}
      />
      ;
    </div>
  );
};
export default Chatlog;
