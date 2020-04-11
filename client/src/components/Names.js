import React, { useState, useEffect } from 'react';

const Names = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const fetchedNames = await (await fetch('/api/names')).json();
        setNames(fetchedNames);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNames();
  }, []);

  return (
    <div>
      <h2>Names</h2>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            {name.firstName} {name.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Names;
