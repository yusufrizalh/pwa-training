let places = JSON.parse(localStorage.getItem("places"));

function findLokasi(x, y) {
  for (var x = 0; x < places.length; x++) {
    if (places[x].lokasi[0] == x && places[x].lokasi[1] == y) {
      return x;
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

var url = "../data/coffeeshop.json"; // url

/*
    # Anonymous function: fungsi tak bernama
      - sifatnya adalah langsung dieksekusi
*/
(async function () {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    localStorage.setItem("places", JSON.stringify(responseJson.places));
    places = responseJson.places;
    console.log(responseJson.places);

    // menampilkan data
    for (var place of responseJson.places) {
      var marker = L.marker(place.lokasi)
        .addTo(mymap)
        .bindPopup(place.deskripsi);
      marker.on("click", showLokasi);
    }
  } catch (error) {
    console.log(error);
  }
})();
