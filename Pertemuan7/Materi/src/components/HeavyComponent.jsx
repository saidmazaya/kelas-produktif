import React, { useState, useEffect } from "react";

// Simulasi komponen berat
const HeavyComponent = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    console.time("Heavy Process");
    // Simulasi perhitungan berat
    const newData = [];
    for (let i = 0; i < 10000000; i++) {
      newData.push(i * Math.random()); // Simulasi perhitungan berat
    }
    setData(newData);
    console.timeEnd("Heavy Process");
  }, []);
  
  return (
    <div>
      <h2>Heavy Component</h2>
      <p>Processed {data.length} items</p>
    </div>
  );
};



export default HeavyComponent;
