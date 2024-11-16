import React from 'react';

function Biodata( {nama, usia, alamat, email} ) {
  return (
    <div className="biodata-card">
      <h2>Biodata</h2>
      <p><strong>Nama:</strong> {nama}</p>
      <p><strong>Usia:</strong> {usia} tahun</p>
      <p><strong>Alamat:</strong> {alamat}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default Biodata;
