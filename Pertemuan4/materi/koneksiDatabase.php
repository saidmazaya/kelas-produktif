<?php

$host = "localhost"; 
$user = "root"; 
$password = "";
$database = "kelas_produktif_test";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
} else {
    echo "Koneksi berhasil!";
}

$conn->close();
?>
