/*
    # Function di JavaScript
      > callback    : procedure & function
      > promises
      > async await
*/

function penjumlahan(nilai1, nilai2) {
  return nilai1 + nilai2;
}

// callback function
function tampilkan(nilai1, nilai2, hitung) {
  // hitung = callback
  return hitung(nilai1, nilai2);
}

var tampilPenjumlahan = tampilkan(10, 25, penjumlahan);
console.log("Hasil Penjumlahan: " + tampilPenjumlahan);
