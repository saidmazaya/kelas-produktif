// import React, { useState, memo } from 'react';

// // Komponen anak menggunakan React.memo
// const ChildComponent = memo(({ number }) => {
//   console.log('ChildComponent rendered');
//   return <div>Computed Number: {number}</div>;
// });

// const WithMemoization = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Counter</button>
//       <button onClick={() => setNumber(number + 1)}>Compute New Number</button>
//       <ChildComponent number={number} />
//     </div>
//   );
// };

// export default WithMemoization;

import React, { useState, useMemo, memo } from 'react';

// Komponen anak dengan React.memo
const ChildComponent = memo(({ number }) => {
  console.log('ChildComponent rendered');
  return <div>Computed Number: {number}</div>;
});

// Fungsi perhitungan berat
const expensiveCalculation = (number) => {
  console.log('Expensive calculation executed');
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }
  return total + number;
};

const WithMemoization = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // Menggunakan useMemo untuk menghitung nilai berat
  const computedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <h2>Computed Value: {computedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => setNumber(number + 1)}>Compute New Number</button>
      <ChildComponent number={computedValue} />
    </div>
  );
};

export default WithMemoization;
