import React, { useEffect, useState } from 'react';

const Page = () => {
  const [response, setResponse] = useState(null);

  const getWhatsTheTime = async () => {
    try {
      const response = await fetch('/api/whats-the-time');
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setResponse({ message: "There's been an error" });
    }
  };

  useEffect(() => {
    getWhatsTheTime();
  }, []);

  return (
    <main>
      <h1>What's the time?</h1>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Page;
