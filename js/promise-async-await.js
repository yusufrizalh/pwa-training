async function fetchAndDecode(url, type) {
  let response = await fetch(url);
  let content;

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    if (type === "blob") {
      content = await response.blob();
    } else if (type === "text") {
      content = await response.text();
    }
  }
  return content;
}

async function displayContent() {
  let img1 = fetchAndDecode("../assets/img-1.jpg", "blob");
  let img2 = fetchAndDecode("../assets/img-2.jpg", "blob");
  let text1 = fetchAndDecode("../assets/description.txt", "text");

  let values = await Promise.all([img1, img2, text1]);

  let imgUrl1 = URL.createObjectURL(values[0]);
  let imgUrl2 = URL.createObjectURL(values[1]);
  let textUrl1 = values[2];

  let image1 = document.createElement("img");
  let image2 = document.createElement("img");
  let paragraph = document.createElement("p");

  image1.src = imgUrl1;
  image2.src = imgUrl2;
  paragraph.textContent = textUrl1;

  document.body.appendChild(image1);
  document.body.appendChild(image2);
  document.body.appendChild(paragraph);
}

displayContent().catch((error) => console.log(error));
