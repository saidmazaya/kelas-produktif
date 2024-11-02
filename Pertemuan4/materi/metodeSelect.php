<?php
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

// Query SELECT untuk mengambil data
$sql = "SELECT id, username, email, age, created_at FROM users";
$result = $conn->query($sql);

// Memeriksa apakah ada hasil
if ($result->num_rows > 0) {
  // 1. Menggunakan fetch_assoc()
  echo "<h3>Data menggunakan fetch_assoc()</h3>";
  while ($row = $result->fetch_assoc()) {
    echo "ID: " . $row["id"] . " - Username: " . $row["username"] . " - Email: " . $row["email"] . " - Age: " . $row["age"] . " - Created At: " . $row["created_at"] . "<br>";
  }

  $result->data_seek(0);

  echo "<h3>Data menggunakan var_dump() fetch_assoc</h3>";
  while ($row = $result->fetch_assoc()) {
    echo var_dump($row) . "<br>";
  }

  // Reset pointer ke awal
  $result->data_seek(0);

  // 2. Menggunakan fetch_row()
  echo "<h3>Data menggunakan fetch_row()</h3>";
  while ($row = $result->fetch_row()) {
    echo "ID: " . $row[0] . " - Username: " . $row[1] . " - Email: " . $row[2] . " - Age: " . $row[3] . " - Created At: " . $row[4] . "<br>";
  }

  $result->data_seek(0);

  echo "<h3>Data menggunakan var_dump() fetch_row</h3>";
  while ($row = $result->fetch_row()) {
    echo var_dump($row) . "<br>";
  }

  // Reset pointer ke awal
  $result->data_seek(0);

  // 3. Menggunakan fetch_array()
  echo "<h3>Data menggunakan fetch_array()</h3>";
  while ($row = $result->fetch_array(MYSQLI_BOTH)) { // MYSQLI_BOTH untuk mendapatkan array numerik dan asosiatif
    echo "ID: " . $row[0] . " - Username: " . $row["username"] . " - Email: " . $row[2] . " - Age: " . $row[3] . " - Created At: " . $row["created_at"] . "<br>";
  }

  $result->data_seek(0);

  echo "<h3>Data menggunakan var_dump() fetch_array</h3>";
  while ($row = $result->fetch_array(MYSQLI_BOTH)) {
    echo var_dump($row) . "<br>";
  }

  // Reset pointer ke awal
  $result->data_seek(0);

  // 4. Menggunakan fetch_object()
  echo "<h3>Data menggunakan fetch_object()</h3>";
  while ($row = $result->fetch_object()) {
    echo "ID: " . $row->id . " - Username: " . $row->username . " - Email: " . $row->email . " - Age: " . $row->age . " - Created At: " . $row->created_at . "<br>";
  }

  $result->data_seek(0);

  echo "<h3>Data menggunakan var_dump() fetch_object</h3>";
  while ($row = $result->fetch_object()) {
    echo var_dump($row) . "<br>";
  }

  // Reset pointer ke awal
  $result->data_seek(0);

  // 5. Menggunakan fetch_all()
  echo "<h3>Data menggunakan fetch_all()</h3>";
  $allData = $result->fetch_all(MYSQLI_ASSOC); // Mengambil semua data sebagai array asosiatif
  foreach ($allData as $row) {
    echo "ID: " . $row["id"] . " - Username: " . $row["username"] . " - Email: " . $row["email"] . " - Age: " . $row["age"] . " - Created At: " . $row["created_at"] . "<br>";
  }

  echo "<h3>Data menggunakan var_dump() fetch_all</h3>";
  echo var_dump($allData) . "<br>";
} else {
  echo "Tidak ada data.";
}

// Menutup koneksi
$conn->close();
