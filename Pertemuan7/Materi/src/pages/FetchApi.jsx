import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);

  // Fungsi untuk mengukur waktu pengambilan data
  const measureTime = (startTime) => {
    const endTime = performance.now();
    return (endTime - startTime).toFixed(2); // Menghitung durasi dalam milidetik
  };

  // 1. Menggunakan fetch dalam useEffect
  // useEffect(() => {
  //   const startTime = performance.now(); // Menyimpan waktu mulai
  //   setLoading(true);  // Mengaktifkan status loading

  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())           // Mengonversi respons menjadi JSON
  //     .then((data) => {
  //       setData(data);                    // Menyimpan data dalam state
  //       setTimeTaken(measureTime(startTime)); // Mengukur waktu pengambilan data
  //       setLoading(false);                 // Menonaktifkan status loading
  //     })
  //     .catch((err) => {
  //       setError("Error fetching data");   // Menangani error
  //       setLoading(false);                 // Menonaktifkan loading saat terjadi error
  //     });
  // }, []);  // Hanya dipanggil saat komponen pertama kali dimuat

  // 2. Menggunakan axios dalam useEffect
  useEffect(() => {
    const startTime = performance.now(); // Menyimpan waktu mulai
    setLoading(true);  // Mengaktifkan status loading

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);  // Menyimpan data langsung dari respons
        setTimeTaken(measureTime(startTime)); // Mengukur waktu pengambilan data
        setLoading(false);                 // Menonaktifkan status loading
      })
      .catch((err) => {
        setError("Error fetching data");   // Menangani error
        setLoading(false);                 // Menonaktifkan loading saat terjadi error
      });
  }, []);  // Hanya dipanggil saat komponen pertama kali dimuat

  // 3. Mengambil data tanpa `useEffect` (bisa menyebabkan infinite loop jika digunakan)
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => setData(data))
  //   .catch((err) => console.log(err));

  return (
    <div>
      <h1>Perbandingan Fetch API dan Axios</h1>

      {/* Status Loading */}
      {loading && <p>Loading...</p>}
      
      {/* Menampilkan error jika ada */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Menampilkan data jika tersedia */}
      {!loading && !error && data.length > 0 && (
        <div>
          <h2>Data berhasil diambil!</h2>
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Waktu yang diperlukan untuk pengambilan data */}
      {!loading && !error && timeTaken > 0 && (
        <p>Waktu Pengambilan Data: {timeTaken} ms</p>
      )}
    </div>
  );
}

export default FetchApi;
