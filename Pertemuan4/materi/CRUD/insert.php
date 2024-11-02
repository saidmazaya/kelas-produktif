<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "kelas_produktif_test";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$new_username = "john_doe";
$new_email = "john@example.com";
$new_age = 25;

$sql = "INSERT INTO users (username, email, age) VALUES ('$new_username', '$new_email', $new_age)";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil ditambahkan!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
