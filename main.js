const Images = document.querySelectorAll('.images');
const ImagesFromSlider = document.querySelectorAll('.mainslider-imagecontainer > div');
const Modal = document.getElementById('image-slider');
const closeBtn = document.querySelector('#closeButton');
const main = document.querySelector('main');
const sliderImage = document.querySelector('.slider-image');

Images.forEach((image, index) => {
    image.addEventListener('click', openModal.bind(image, index));
});

closeBtn.addEventListener('click', closeModal);

function openModal(index){
    Modal.style.display = 'block';
    main.style.display = 'none';
    slideIndex = index + 1;
    showSlides(slideIndex);
}

function closeModal(){
    Modal.style.display = 'none';
    main.style.display = 'flex';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function sliderNum(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > ImagesFromSlider.length) {slideIndex = 1}
    if (n < 1) {slideIndex = ImagesFromSlider.length}
    for (i = 0; i < ImagesFromSlider.length; i++) {
        ImagesFromSlider[i].style.display = "none";
    }
    ImagesFromSlider[slideIndex-1].style.display = "block";
}
