import React from 'react';

const Page = () => {
  const handleClick = async () => {
    const response = await fetch('/api/post-body-params-with-fetch', {
      method: 'POST',
      body: JSON.stringify({ data: { emoji: '💃' } })
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <main>
      <h1>Post Body Parameters using fetch</h1>
      <button onClick={handleClick}>Wanna Dance?</button>
    </main>
  );
};

export default Page;
