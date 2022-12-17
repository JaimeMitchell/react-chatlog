import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, toggleHeart, liked }) => {
  const heartButton = liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local" id={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        {/* need to import toggleheart function */}
        <button
          className="button"
          onClick={() => {
            toggleHeart(id);
          }}
        >
          {heartButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      toggleHeart: PropTypes.func.isRequired,
    })
  )
};
export default ChatEntry;
