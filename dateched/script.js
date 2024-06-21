console.log("hurma");

let currentSlide = 0;

const currentSldieEl = document.querySelector(".currentSlide");
const maxSldieEl = document.querySelector(".maxSlide");

const galleryEl = document.querySelector(".gallery");
const leftBtnEl = document.querySelector(".left");
const rightBtnEl = document.querySelector(".right");

console.log(document.getElementById("oleg"));

const maxSlideIndex = galleryEl.querySelectorAll(".gallery-block").length - 1;
currentSldieEl.textContent = currentSldieEl + 1;
maxSldieEl.textContent = maxSlideIndex + 1;

const updateCurrentSlideEl = () => {
   currentSldieEl.textContent = currentSlide + 1;
};

console.log(maxSlideIndex);
const nextSlide = () => {
   if (currentSlide >= maxSlideIndex) currentSlide = 0;
   else currentSlide += 1;
   updateCurrentSlideEl();
   galleryEl.style.transform = `translate(-${currentSlide * 100}%)`;
};
const prevSlide = () => {
   if (currentSlide <= 0) currentSlide = maxSlideIndex;
   else currentSlide -= 1;
   updateCurrentSlideEl();
   galleryEl.style.transform = `translate(-${currentSlide * 100}%)`;
};


updateCurrentSlideEl();
rightBtnEl.addEventListener("click", nextSlide);
leftBtnEl.addEventListener("click", prevSlide);
