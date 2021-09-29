import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [userReaction, setUserReaction] = useState('');
  const [response, setResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResponse('⏳ brb...');

    try {
      const response = await axios.post('/api/post-to-fauna', {
        userReaction: userReaction
      });

      setResponse(response.data.message);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setResponse(error.response.data.message);
    }
  };

  const handleChange = (event) => {
    setResponse('');
    setUserReaction(event.target.value);
  };

  return (
    <main>
      <h1>Collect user reactions in Fauna</h1>
      <h2>Q: What are disco balls made of?</h2>
      <h3>
        A: Getdowntonite{' '}
        <span role="img" aria-label="Gem Stone Emoji">
          💎
        </span>
      </h3>
      <form onSubmit={handleSubmit}>
        <fieldset id="reaction" className="reaction">
          <label htmlFor="confused" className="reaction">
            <span role="img" aria-label="Confused Face Emoji">
              😕
            </span>
            <input
              id="confused"
              type="radio"
              value="confused"
              name="reaction"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="thumbs-up" className="reaction">
            <span role="img" aria-label="Thumbs Up Emoji">
              👍
            </span>
            <input
              id="thumbs-up"
              type="radio"
              value="thumbs-up"
              name="reaction"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="laughing" className="reaction">
            <span role="img" aria-label="Rolling on the Floor Laughing Emoji">
              🤣
            </span>
            <input
              id="laughing"
              type="radio"
              value="laughing"
              name="reaction"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="clapping-hands" className="reaction">
            <span role="img" aria-label="Clapping Hands Emoji">
              👏
            </span>
            <input
              id="clapping-hands"
              type="radio"
              value="clapping-hands"
              name="reaction"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
      <small>{response}</small>
    </main>
  );
};

export default Page;
