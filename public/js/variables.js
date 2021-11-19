/* # Variabel: wadah utk menyimpan suatu nilai 
    cara mendeklarasikan variabel
     > var      : mutable / bisa diubah isinya saat program dijalankan
     > let      : immutable / tidak bisa diubah isinya saat program dijalankan
                  harus dideklarasikan diawal dg kata kuncinya
     > const    : immutable / tidak bisa diubah isinya saat program dijalankan
*/

var nama = "James"; // deklarasi awal
nama = "James Hamilton"; // ada perubahan
var usia = 30;
var email = "james@email.com";

// --------------------------------------------

let angka1; // integer
// let angka1 = 1; // terjadi perubahan
// let tidak mengijinkan ada nama variabel yg sama
// let tidak harus memiliki nilai ketika dideklarasikan
let angka2 = 100.75; // double

// --------------------------------------------

const bilangan1 = 100;
// const bilangan1 = 1000; // terjadi perubahan
// const tidak mengijinkan ada nama variabel yg sama
// const harus memiliki nilai ketika dideklarasikan
const bilangan2 = 10000;

console.log("Angka 1: " + angka1);
console.log("Bilangan 2: " + bilangan2);
