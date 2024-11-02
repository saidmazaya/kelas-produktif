<?php
// Informasi koneksi database
$servername = "localhost";
$username = "root";
$password = "";
$database = "kelas_produktif_test";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $database);

// Cek koneksi
if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}

// ID yang ingin dihapus
$id_to_delete = 12; // ID pengguna yang ingin dihapus

// Query DELETE
$sql = "DELETE FROM users WHERE id=$id_to_delete";

// Menjalankan query
if ($conn->query($sql) === TRUE) {
  echo "Data dengan ID $id_to_delete berhasil dihapus.";
} else {
  echo "Error: " . $conn->error;
}

// Menutup koneksi
$conn->close();
