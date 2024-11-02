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

// Data yang ingin di-update
$id_to_update = 1; // ID pengguna yang ingin di-update
$new_username = "john_updated"; // Nama pengguna baru
$new_email = "john_updated@example.com"; // Email baru
$new_age = 30; // Umur baru

// Query UPDATE
$sql = "UPDATE users SET username='$new_username', email='$new_email', age='$new_age' WHERE id=$id_to_update";

// Menjalankan query
if ($conn->query($sql) === TRUE) {
    echo "Data berhasil diperbarui.";
} else {
    echo "Error: " . $conn->error;
}

// Menutup koneksi
$conn->close();
