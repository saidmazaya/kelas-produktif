import React, { useState } from 'react';

// Komponen anak
const ChildComponent = ({ number }) => {
  console.log('ChildComponent re-rendered');
  return <div>Computed Number: {number}</div>;
};

const WithoutMemoization = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => setNumber(number + 1)}>Compute New Number</button>
      <ChildComponent number={number} />
    </div>
  );
};

export default WithoutMemoization;
