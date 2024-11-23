import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/university-search.css";  // Import CSS file

function SearchUniversityList() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");  // State untuk search term
  const [currentPage, setCurrentPage] = useState(1); // State untuk halaman
  const [universitiesPerPage] = useState(10);  // Batasan jumlah universitas per halaman

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=Indonesia")
      .then((response) => {
        setUniversities(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Web Universitas di Indonesia</h1>
      <input
        type="text"
        placeholder="Cari Universitas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Nama Universitas</th>
                <th>Website</th>
                <th>Domain</th>
              </tr>
            </thead>
            <tbody>
              {currentUniversities.map((university) => (
                <tr key={university.name}>
                  <td>{university.name}</td>
                  <td>
                    <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
                      {university.web_pages[0]}
                    </a>
                  </td>
                  <td>{university.domains[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: Math.ceil(filteredUniversities.length / universitiesPerPage) }, (_, index) => (
              <button key={index + 1} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchUniversityList;
