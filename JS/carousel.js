var timer;
var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  } 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
   dots[i].classList.add("atual");
   
   if(i > (slideIndex -1)|| i < (slideIndex -1) ){
    dots[i].classList.remove("atual");
   }
  
  }
  slides[slideIndex - 1].style.display = "block";
  clearTimeout(timer);
  timer = setTimeout(() => plusSlides(1), 12000);
}
