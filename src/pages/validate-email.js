import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [userEmail, setUserEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/validate-email', {
        email: userEmail
      });

      setResponse(response.data.message);
    } catch (error) {
      setResponse(error.response.data.message);
    }
  };

  return (
    <main>
      <h1>
        Validate email <br />
        addresses server-side
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your@email.com"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <small>{response}</small>
    </main>
  );
};

export default Page;
