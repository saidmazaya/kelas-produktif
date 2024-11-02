<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "kelas_produktif_test";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$sql = "SELECT id, username, email, age, created_at FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Username: " . $row["username"] . " - Email: " . $row["email"] . " - Age: " . $row["age"] . " - Created At: " . $row["created_at"] . "<br>";
    }
} else {
    echo "Tidak ada data.";
}

$conn->close();
