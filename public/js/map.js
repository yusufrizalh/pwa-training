var mymap = L.map("mapid").setView(
  [-7.318541855043537, 112.74407819002279],
  13
);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoieXVzdWZyaXphbGgiLCJhIjoiY2pubDh4ZDFtMDZqajNwbnppandja25nbCJ9.ULxqaXHPzFArFjMk7cdcxQ",
  }
).addTo(mymap);

var marker = L.marker([-7.318541855043537, 112.74407819002279]).addTo(mymap);

var circle = L.circle([-7.318541855043537, 112.74407819002279], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(mymap);

marker
  .bindPopup(
    "<p align='center'><img src='../images/pexels-image-2.jpg' width='100%' /><br><br><b>Ngopi Favorit: Kopisae Surabaya</b></p>"
  )
  .openPopup();

function onMapClick(koordinat) {
  alert("Lokasi Ngopi ada di " + koordinat.latlng);
}

mymap.on("click", onMapClick);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Lokasi saat ini ada di " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on("click", onMapClick);
