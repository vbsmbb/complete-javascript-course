'use strict';

const btn = document.querySelector('.btn-country');
const imageContainer = document.querySelector('.images');
let currentImage;

// Remove button from display
btn.style.display = 'none';

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;
    image.alt = 'An image';
    image.addEventListener('load', function () {
      imageContainer.append(image);
      resolve(image);
    });
    image.addEventListener('error', function () {
      reject(new Error('Image not found 💥💥💥'));
    });
  });
};

createImage('img/img-1.jpg')
  .then(image => {
    currentImage = image;
    // console.log('Image 1 loaded');
    return wait(3);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(image => {
    currentImage = image;
    // console.log('Image 2 loaded');
    return wait(3);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(image => {
    currentImage = image;
    // console.log('Image 3 loaded');
    return wait(3);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(`${err.message}`));
