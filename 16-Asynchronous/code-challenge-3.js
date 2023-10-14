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

// createImage('img/img-1.jpg')
//   .then(image => {
//     currentImage = image;
//     // console.log('Image 1 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(image => {
//     currentImage = image;
//     // console.log('Image 2 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(image => {
//     currentImage = image;
//     // console.log('Image 3 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(`${err.message}`));

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    await wait(3);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    await wait(3);
    img.style.display = 'none';
    img = await createImage('img/img-3.jpg');
    await wait(3);
    img.style.display = 'none';
  } catch (err) {
    console.error(`💥 err.message 💥`);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);
    const imageEls = await Promise.all(imgs);
    // console.log(imageEls);
    imageEls.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(`💥 ${err.message} 💥`);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
