// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Submission Alert
  document.querySelector('.callback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
  });
  // Handle Login Form Submission
document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Dummy authentication (can be replaced with backend logic)
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
      window.location.href = 'index.html'; // Redirect to home page
    } else {
      alert('Invalid email or password.');
    }
  });
  function navigateToCourse(courseUrl) {
    window.location.href = courseUrl; // Redirect to the course video page
  }
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelector('.feedback-cards');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cardWidth = document.querySelector('.feedback-card').offsetWidth + 20; // Card width + margin
    let currentIndex = 0;

    const updateCarousel = () => {
        cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0); // Prevent going past the first card
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        const totalCards = document.querySelectorAll('.feedback-card').length;
        currentIndex = Math.min(currentIndex + 1, totalCards - 1); // Prevent going past the last card
        updateCarousel();
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress');

  // Example: Update progress dynamically
  const progressValues = [80, 60, 40]; // Update progress values in percentage
  progressBars.forEach((bar, index) => {
    setTimeout(() => {
      bar.style.width = `${progressValues[index]}%`;
    }};

    function playVideo(videoSrc) {
      const videoPlayer = document.createElement("video");
      videoPlayer.src = videoSrc;
      videoPlayer.controls = true;
      videoPlayer.style.position = "fixed";
      videoPlayer.style.top = 0;
      videoPlayer.style.left = 0;
      videoPlayer.style.width = "100%";
      videoPlayer.style.height = "100%";
      videoPlayer.style.zIndex = 1000;
      videoPlayer.style.backgroundColor = "black";
  
      videoPlayer.addEventListener("ended", () => {
          document.body.removeChild(videoPlayer);
      });
  
      document.body.appendChild(videoPlayer);
      videoPlayer.play();
  }
  
  
      

  