import React, { useState, useEffect } from 'react';

const   Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs after the component is first rendered (mounted)
    console.log("Component mounted");

    return () => {
      // Runs just before the component is removed (unmounted)
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    // Runs after every time count is updated
    console.log("Component updated. Count is now:", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Example;
