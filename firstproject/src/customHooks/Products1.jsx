import React from 'react';
import useApi1 from './useApi1'; // Correct import without curly braces

export const Products1 = () => {
  let data = useApi1("https://api.github.com/users"); // Pass the URL here

  return (
    <div>
      <h1>This is Product</h1>
      {data ? (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
