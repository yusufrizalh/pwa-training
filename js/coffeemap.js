let lokasi = [-7.318328800320946, 112.74409541043933];
let markertitle =
  "<p align='center'><b>Kopisae Margorejo</b><br>Lat: -7.318 Lng: 112.744<br><br> Jl. Margorejo Indah No.134, Margorejo, Kec. Wonocolo, Kota SBY, Jawa Timur 60238</p>";

let marker = L.marker(lokasi).addTo(mymap).bindPopup(markertitle);

// lokasi - lokasi ngopi di surabaya
let places = [
  {
    lokasi: [-7.265094058283979, 112.73851544841582],
    gambar: "../images/pexels-image-2.jpg",
    deskripsi:
      "<p align='center'><b>Ada Apa Dengan Kopi</b><br>Lat: -7.265 Lng: 112.738<br><br> Jl. Tegalsari No.24, Kedungdoro, Kec. Tegalsari, Kota SBY, Jawa Timur 60262</p>",
  },
  {
    lokasi: [-7.273424902534877, 112.7482558161651],
    gambar: "../images/pexels-image-2.jpg",
    deskripsi:
      "<p align='center'><b>Timoer Kopi</b><br>Lat: -7.273 Lng: 112.748<br><br> Jl. Jawa No.18, Gubeng, Kec. Gubeng, Kota SBY, Jawa Timur 60281</p>",
  },
  {
    lokasi: [-7.292178406942765, 112.8105969908658],
    gambar: "../images/pexels-image-2.jpg",
    deskripsi:
      "<p align='center'><b>Tropical Coffee</b><br>Lat: -7.292 Lng: 112.810<br><br> Jl. Keputih Tegal Timur No.20, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111</p>",
  },
  {
    lokasi: [-7.269408659495589, 112.74643633322007],
    gambar: "../images/pexels-image-2.jpg",
    deskripsi:
      "<p align='center'><b>Papercup Coffee</b><br>Lat: -7.269 Lng: 112.746<br><br> Jl. Kayoon No.48, Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271</p>",
  },
  {
    lokasi: [-7.282213586971852, 112.73722595617429],
    gambar: "../images/pexels-image-2.jpg",
    deskripsi:
      "<p align='center'><b>Latterre Cafe</b><br>Lat: -7.282 Lng: 112.737<br><br> Jalan MH. Thamrin No.46, DR. Soetomo, Tegalsari, Surabaya City, East Java 60264</p>",
  },
];

function findLokasi(x, y) {
  for (var a = 0; a < places.length; a++) {
    if (places[a].lokasi[0] == x && places[a].lokasi[1] == y) {
      return a;
    }
  }
  return -1;
}

function showLokasi(e) {
  console.log("Lokasi: " + e.latlng.lat + " dan " + e.latlng.lng);
  let lokasingopi = findLokasi(e.latlng.lat, e.latlng.lng);
  if (lokasingopi >= 0) {
    image.src = places[lokasingopi].gambar;
  }
}

// gambar
let wadah = document.getElementById("wadah");
let image = document.createElement("img");
wadah.appendChild(image);

for (var place of places) {
  var markerlist = L.marker(place.lokasi)
    .addTo(mymap)
    .bindPopup(place.deskripsi);
  markerlist.on("click", showLokasi);
}
