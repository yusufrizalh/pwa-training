/*
    # Function di JavaScript
      > callback    : procedure & function
      > promises    : menjanjikan proses
      > async await : kemampuan untuk menunggu proses sebelumnya
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
// console.log("Hasil Penjumlahan: " + tampilPenjumlahan);

// ------------------------------------------------------------

let promise = new Promise(function (resolve, reject) {
  let flag = true;
  setTimeout(() => {
    if (flag) {
      resolve("Berhasil");
    } else {
      reject("Gagal");
    }
  }, 2000);
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (value) {
    console.log(value);
  });

// ------------------------------------------------------------

async function ambilGambar() {
  let response = await fetch("../images/pexels-image-1.jpg");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let myImage = await response.blob();

  let imageUrl = URL.createObjectURL(myImage);
  let image = document.createElement("img");
  image.src = imageUrl;
  document.body.appendChild(image);
}

ambilGambar().catch((error) => {
  console.log("There is a problem with your fetch! " + error.message);
  console.log("test");
});
