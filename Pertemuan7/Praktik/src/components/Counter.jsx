import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div>
      <p>Tombol telah ditekan sebanyak {count} kali</p>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Counter