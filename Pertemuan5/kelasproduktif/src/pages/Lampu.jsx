import React, { useState } from 'react';
import '../styles/lampu.css';

function Lampu() {
  const [statusLampu, setStatusLampu] = useState("mati");

  const toggleLampu = () => {
    setStatusLampu(statusLampu === "mati" ? "menyala" : "mati");
  };

  return (
    <div className="lampu-container">
      <div className={`lampu ${statusLampu}`}></div>
      <p>Lampu sedang {statusLampu}</p>
      <button onClick={toggleLampu}>
        {statusLampu === "mati" ? "Nyalakan Lampu" : "Matikan Lampu"}
      </button>
    </div>
  );
}

export default Lampu;

// return React.createElement(
//   'div', 
//   { className: 'lampu-container' },
//   React.createElement(
//     'div',
//     { className: `lampu ${statusLampu}` }
//   ),
//   React.createElement(
//     'p', 
//     null, 
//     `Lampu sedang ${statusLampu}`
//   ),
//   React.createElement(
//     'button', 
//     { onClick: toggleLampu }, 
//     statusLampu === "mati" ? "Nyalakan Lampu" : "Matikan Lampu"
//   )
// );

// Menentukan status awal lampu
// let statusLampu = "mati";

// // Mendapatkan elemen-elemen DOM
// const lampu = document.getElementById("lampu");
// const statusLampuText = document.getElementById("statusLampu");
// const toggleButton = document.getElementById("toggleButton");

// // Fungsi untuk mengubah status lampu
// function toggleLampu() {
//   // Mengubah status lampu
//   statusLampu = statusLampu === "mati" ? "menyala" : "mati";

//   // Mengubah tampilan lampu berdasarkan status
//   lampu.className = "lampu " + statusLampu;

//   // Mengubah teks status lampu
//   statusLampuText.textContent = "Lampu sedang " + statusLampu;

//   // Mengubah teks pada tombol
//   toggleButton.textContent = statusLampu === "mati" ? "Nyalakan Lampu" : "Matikan Lampu";
// }

// // Menambahkan event listener pada tombol
// toggleButton.addEventListener("click", toggleLampu);