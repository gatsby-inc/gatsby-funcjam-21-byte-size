import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResponse('⏳ brb...');

    try {
      const response = await axios.post('/api/post-to-send-grid', {
        email: userEmail,
        message: userMessage
      });

      setResponse(response.data.message);
      setUserEmail('');
      setUserMessage('');
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setResponse(error.response.data.message);
    }
  };

  return (
    <main>
      <h1>Send emails using SendGrid</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="text"
          placeholder="your@email.com"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
        />
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          placeholder="your message"
          value={userMessage}
          onChange={(event) => setUserMessage(event.target.value)}
        />

        <button
          type="submit"
          disabled={!userEmail || !userMessage || isSubmitting}
        >
          Send
        </button>
      </form>
      <small>{response}</small>
    </main>
  );
};

export default Page;
