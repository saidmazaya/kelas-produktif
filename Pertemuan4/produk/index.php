<?php

include 'koneksi.php';

// Insert (Create)
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['insert'])) {
  $name = $_POST['name'];
  $stock = $_POST['stock'];
  $price = $_POST['price'];

  $sql = "INSERT INTO products (name, stock, price) VALUES ('$name', '$stock', '$price')";
  $conn->query($sql);
}

// Read
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

// Edit
if (isset($_GET['edit'])) {
  $id = $_GET['edit'];
  $sql = "SELECT * FROM products WHERE id=$id";
  $result = $conn->query($sql);
  $edit_product = $result->fetch_assoc();
}

// Update
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['update'])) {
  $id = $_POST['id'];
  $name = $_POST['name'];
  $stock = $_POST['stock'];
  $price = $_POST['price'];

  $sql = "UPDATE products SET name='$name', stock=$stock, price=$price WHERE id=$id";
  $conn->query($sql);

  header("Location: index.php");
}

// Delete
if (isset($_GET['delete'])) {
  $id = $_GET['delete'];
  $sql = "DELETE FROM products WHERE id=$id";
  $conn->query($sql);

  header('Location: index.php');
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Website Produk</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
  <div class="container mt-5">
    <h1>Website Manajemen Produk</h1>

    <!-- Form Tambah Produk -->
    <div class="card mb-4">
      <div class="card-body">
        <h2>Tambah Produk</h2>
        <form method="post">
          <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" class="form-control" name="name" id="name" required>
          </div>
          <div class="form-group">
            <label for="stock">Stok</label>
            <input type="number" class="form-control" name="stock" id="stock" required>
          </div>
          <div class="form-group">
            <label for="price">Harga (Rupiah)</label>
            <input type="number" class="form-control" name="price" id="price" required>
          </div>
          <button type="submit" name="insert" class="btn btn-primary mt-3">Tambah</button>
        </form>
      </div>
    </div>

    <!-- Form Edit -->
    <?php if (isset($edit_product)) : ?>
      <div class="card mb-4">
        <div class="card-body">
          <h2>Edit Produk</h2>
          <form method="post">
            <input type="hidden" name="id" value="<?= $edit_product['id']; ?>">
            <div class="form-group">
              <label for="name">Nama</label>
              <input type="text" class="form-control" value="<?= $edit_product['name']; ?>" name="name" id="name" required>
            </div>
            <div class="form-group">
              <label for="stock">Stok</label>
              <input type="number" class="form-control" value="<?= $edit_product['stock']; ?>" name="stock" id="stock" required>
            </div>
            <div class="form-group">
              <label for="price">Harga (Rupiah)</label>
              <input type="number" class="form-control" value="<?= $edit_product['price']; ?>" name="price" id="price" required>
            </div>
            <button type="submit" name="update" class="btn btn-warning mt-3">Update</button>
            <a href="index.php" class="btn btn-secondary mt-3">Batal</a>
          </form>
        </div>
      </div>
    <?php endif; ?>

    <h2>Daftar Produk</h2>
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Stok</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <?php while ($row = $result->fetch_assoc()) : ?>
          <tr>
            <td><?= $row['id'] ?></td>
            <td><?= $row['name'] ?></td>
            <td><?= $row['stock'] ?></td>
            <td><?= number_format($row['price'], 0, ',', '.') ?></td>
            <td>
              <a href="?edit=<?= $row['id']; ?>" class="btn btn-warning btn-sm">Edit</a>
              <a href="?delete=<?= $row['id']; ?>" onclick="return confirm('Apakah anda yakin ingin menghapusnya');" class="btn btn-danger btn-sm">Hapus</a>
            </td>
          </tr>
        <?php endwhile ?>
      </tbody>
    </table>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>