document.addEventListener('DOMContentLoaded', function(e) {

   var header = document.querySelector("header");
   var ul = document.querySelector("nav > ul");
   console.log(ul);
   header.addEventListener('click', function(e) {
      ul.classList.toggle("open");
      });

});
