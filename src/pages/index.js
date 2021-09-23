import React from 'react';
import { Link } from 'gatsby';

const Page = () => {
  return (
    <main>
      <h1>FuncJam '21 Byte-size</h1>
      <ul>
        <li>
          <Link to="/whats-the-time">What's the time?</Link>
        </li>
        <li>
          <Link to="/typescript-function">TypeScript Function</Link>
        </li>
        <li>
          <Link to="/post-body-params-with-fetch">
            Post Body Params with Fetch
          </Link>
        </li>
        <li>
          <Link to="/validate-email">Validate emails server-side</Link>
        </li>
        <li>
          <Link to="/custom-middleware">
            Restrict access using CORS middleware
          </Link>
        </li>
        <li>
          <Link to="/post-to-google-sheets">Store data in Google Sheets</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
