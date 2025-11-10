// Open the Modal 
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Initialize the Slide Index and starts the lightbox at the first image by default
let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail Image Controls 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to Display Slides
function showSlides(n) {
  let i;
  // Collects all slides and thumbnails (dots)
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");
  // Loop back to the first slide if the index exceeds total number of slides
  if (n > slides.length) { slideIndex = 1 }
  // Loop to the last slide if index goes below 1
  if (n < 1) { slideIndex = slides.length }
  // Hide all slides initially
  for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
  // Remove 'active' class from all thumbnails
  for (i = 0; i < dots.length; i++) { dots[i].classList.remove("active"); }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  // Display the alt text of the active thumbnail as the caption
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
