<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php
  if (isset($_POST['submit'])) {
    $nama = $_POST['nama'];
    $umur = $_POST['umur'];
    $tinggi = $_POST['tinggi'];

    echo "<h2>Data yang diterima:</h2>";
    echo "Halo " . $nama . " dengan umur: " . $umur . " tinggi badan :" . $tinggi . "<br>";
  }
  ?>
  <h2>Form Input</h2>
  <form action="" method="post">
    Nama: <input type="text" name="nama" id="nama"><br>
    Umur: <input type="number" name="umur" id="umur"><br>
    TB: <input type="number" name="tinggi" id="tinggi"><br>
    Password: <input type="password" name="password" id="password"><br>
    <?php
    if (isset($_POST['submit'])) {
      $password = $_POST['password'];

      if ($password == '') {
        echo 'Password tidak boleh kosong';
      }

      if (strlen($password) < 8) {
        echo 'Password minimal 8 karakter';
      }
    }
    ?>
    <input type="submit" name="submit" value="submit"></input>
  </form>
</body>

</html>