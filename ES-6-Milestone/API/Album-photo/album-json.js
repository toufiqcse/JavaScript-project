// https://jsonplaceholder.typicode.com/photos

function loadsAlbum() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => displayAlbum(data));
}
loadsAlbum();
function displayAlbum(data) {
  const albumGallery = document.getElementById("gallery-list");
  for (const album of data) {
    // albumGallery.innerHTML += `<img src ="${album.url}">`;
    const li = document.createElement("li");
    li.innerHTML = `<img  src = "${album.url}">`;
    li.classList.add("albumImg");
    albumGallery.appendChild(li);
  }
}
