function kalkulator() {
  let angka = document.querySelectorAll("input");
  let input1 = angka[0].value; // angka 1
  let input2 = angka[1].value; // angka 2

  if (input1 != "" && input2 != "") {
    angka[2].value = parseInt(input1) + parseInt(input2);
  } else {
    alert("Input tidak boleh kosong!!!");
  }
}

let tombol = document.querySelector("button");
tombol.addEventListener("click", kalkulator);
