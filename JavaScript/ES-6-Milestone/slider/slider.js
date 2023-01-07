const imgList = [
  "images/img-1.jpg",
  "images/img-2.jpg",
  "images/img-3.jpg",
  "images/img-4.jpg",
  "images/img-5.jpg",
  "images/img-6.jpg",
  "images/img-7.jpg",
  "images/img-8.jpg",
  "images/img-9.jpg",
  "images/img-10.jpg",
];
const imagePath = document.getElementById("slider-img");
let imgIndex = 0;
const previousImage = document.getElementById("prev-btn");
const nextImage = document.getElementById("next-btn");

setInterval(() => {
  if (imgIndex >= imgList.length) {
    imgIndex = 0;
  }
  // showNextSlider();
  const imgUrl = imgList[imgIndex];
  imagePath.setAttribute("src", imgUrl);

  imgIndex++;
}, 1000);
