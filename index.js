function animateCounter(targetId, start, end, duration) {
    const target = document.getElementById(targetId);
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
  
    function updateCounter() {
      start += increment;
      target.textContent = start;
  
      if (start !== end) {
        requestAnimationFrame(updateCounter);
      }
    }
  
    requestAnimationFrame(updateCounter);
  }
  
  // Trigger the counter animation when the section is reached
  document.addEventListener("scroll", function () {
    const section = document.getElementById("counter-section");
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
  
    if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
      animateCounter("user-counter", 0, 1000, 2000); // Example values, adjust as needed
      animateCounter("visit-counter", 0, 5000, 2000); // Example values, adjust as needed
    }
  });