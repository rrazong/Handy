function fade (e) {
   e.preventDefault();

   var el = e.target;

   el.style.opacity = 1;

   var interval_id = window.setInterval(function () {
       el.style.opacity = el.style.opacity - 0.1;

       if (el.style.opacity <= 0) {
           window.clearInterval(interval_id);
       }
   }, 100);  
}             

document.body.addEventListener('click', fade, true);
