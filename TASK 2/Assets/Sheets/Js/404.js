document.addEventListener("DOMContentLoaded", function() {
   // Animate elements on load
   const container = document.querySelector('.container');
   container.style.opacity = 0;
   container.style.transform = 'translateY(-20px)';
   window.setTimeout(function() {
       container.style.transition = 'all 0.5s ease-in-out';
       container.style.opacity = 1;
       container.style.transform = 'translateY(0)';
   }, 100);

   // Event listener for home button
   const homeButton = document.querySelector('a');
   homeButton.addEventListener('click', function(event) {
       event.preventDefault();
       window.location.href = '/'; // Redirect to home page
   });

   // Additional interaction - mousemove effect
   document.addEventListener('mousemove', function(event) {
       const x = (window.innerWidth - event.pageX) / 100;
       const y = (window.innerHeight - event.pageY) / 100;

       container.style.transform = `translate(${x}px, ${y}px)`;
   });
});
