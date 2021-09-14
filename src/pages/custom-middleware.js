import React, { useState } from 'react';

const Page = () => {
  const [userMessage] = useState("What's Popin?");
  const [response, setResponse] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const handleClick = async () => {
    setIsPosting(true);
    try {
      const response = await fetch('/api/custom-middleware', {
        method: 'POST',
        body: JSON.stringify({ message: userMessage })
      });
      const data = await response.json();
      setTimeout(() => {
        setResponse(data);
        setIsPosting(false);
      }, 1000);
    } catch (error) {
      setIsPosting(false);
      setResponse(error);
    }
  };

  return (
    <main>
      <h1>Restrict access using CORS middleware</h1>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <pre>{JSON.stringify({ message: userMessage }, null, 2)}</pre>
      )}
      <button onClick={handleClick} disabled={isPosting}>
        {isPosting ? 'Sending...' : 'Send message'}
      </button>
    </main>
  );
};

export default Page;
