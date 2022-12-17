import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heartButton = props.liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local" id={props.id}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        {/* need to import toggleheart function */}
        <button
          className="button"
          onClick={() => {
            props.toggleHeart(props.id);
          }}
        >
          {heartButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleHeart: PropTypes.func.isRequired,
};

export default ChatEntry;
