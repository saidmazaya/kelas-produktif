<?php
// ================== Aritmatika ==================
$a = 10;
$b = 3;

echo "Aritmatika:\n";
echo "Penjumlahan: " . ($a + $b) . "\n";  // Output: 13
echo "Pengurangan: " . ($a - $b) . "\n";  // Output: 7
echo "Perkalian: " . ($a * $b) . "\n";    // Output: 30
echo "Pembagian: " . ($a / $b) . "\n";    // Output: 3.3333
echo "Modulus: " . ($a % $b) . "\n";      // Output: 1
echo "<br>";

// ================== Assignment ==================
echo "\nAssignment:\n";
$a = 10;       // Assignment biasa
$a += 5;       // Penambahan
echo "a += 5: " . $a . "\n";   // Output: 15
$a -= 3;       // Pengurangan
echo "a -= 3: " . $a . "\n";   // Output: 12
$a *= 2;       // Perkalian
echo "a *= 2: " . $a . "\n";   // Output: 24
$a /= 2;       // Pembagian
echo "a /= 2: " . $a . "\n";   // Output: 12
$a %= 3;       // Modulus
echo "a %= 3: " . $a . "\n";   // Output: 0
echo "<br>";

// ================== Perbandingan ==================
echo "\nPerbandingan:\n";
$c = 10;
$d = "10";
echo "c == d: " . ($c == $d ? "true" : "false") . "\n";   // Output: true
echo "c === d: " . ($c === $d ? "true" : "false") . "\n"; // Output: false
echo "c != d: " . ($c != $d ? "true" : "false") . "\n";   // Output: false
echo "c > d: " . ($c > $d ? "true" : "false") . "\n";     // Output: false
echo "c < d: " . ($c < $d ? "true" : "false") . "\n";     // Output: false
echo "<br>";

// ================== Increment/Decrement ==================
echo "\nIncrement/Decrement:\n";
$e = 5;
echo "e++: " . $e++ . "\n"; // Output: 5 (nilai e adalah 6 setelah baris ini)
echo "++e: " . ++$e . "\n"; // Output: 7
echo "e--: " . $e-- . "\n"; // Output: 7 (nilai e adalah 6 setelah baris ini)
echo "--e: " . --$e . "\n"; // Output: 5
echo "<br>";

// ================== Logika ==================
echo "\nLogika:\n";
$f = true;
$g = false;
echo "f and g: " . ($f and $g ? "true" : "false") . "\n";   // Output: false
echo "f && g: " . ($f && $g ? "true" : "false") . "\n";     // Output: false
echo "f or g: " . ($f or $g ? "true" : "false") . "\n";     // Output: true
echo "f || g: " . ($f || $g ? "true" : "false") . "\n";     // Output: true
echo "!f: " . (!$f ? "true" : "false") . "\n";              // Output: false
echo "<br>";

// ================== String ==================
echo "\nString:\n";
$str1 = "Halo, ";
$str2 = "dunia!";
echo "Penggabungan: " . $str1 . $str2 . "\n";   // Output: Halo, dunia!
$str1 .= "Selamat datang!";
echo "Penambahan string: " . $str1 . "\n";      // Output: Halo, Selamat datang!
?>
