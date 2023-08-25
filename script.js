(function () {
 'use strict';
 const togglebtn = document.getElementById('toggle');
 const nav = document.getElementById('nav');
 let icon = document.getElementById('icon');
 
 const cancel = "images/icon-close.svg";
 const hamburger = 'images/icon-hamburger.svg';
 
 togglebtn.addEventListener('click', function() {
   nav.classList.toggle('open');
 
   const isOpen = nav.classList.contains('open');
   
   
   
   if (isOpen) {
     icon.src = cancel;
   }
   else {
     icon.src = hamburger;
   }
   
 })
})();
