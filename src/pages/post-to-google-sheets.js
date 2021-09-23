import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [userAnswer, setUserAnswer] = useState(null);
  const [response, setResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResponse('⏳ brb...');

    try {
      const response = await axios.post('/api/post-to-google-sheets', {
        userAnswer: userAnswer
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
    setUserAnswer(event.target.value);
  };

  return (
    <main>
      <h1>Store data in Google Sheets</h1>
      <h2>What came first?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="chicken">
          <input
            id="chicken"
            type="radio"
            value="chicken"
            name="answer"
            onChange={handleChange}
          />
          Chicken
        </label>
        <label htmlFor="egg">
          <input
            id="egg"
            type="radio"
            value="egg"
            name="answer"
            onChange={handleChange}
          />
          Egg
        </label>
        <label htmlFor="disco">
          <input
            id="disco"
            type="radio"
            value="disco"
            name="answer"
            onChange={handleChange}
          />
          Disco
        </label>
        <button type="submit" disabled={isSubmitting || !userAnswer}>
          Submit
        </button>
      </form>
      <small>{response}</small>
    </main>
  );
};

export default Page;
