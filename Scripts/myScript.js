document.addEventListener('DOMContentLoaded', function(e) {
   var $ = function(selector) {//una cadena con el selector
      if (selector.indexOf("#") == 0) {
         return document.querySelector(selector);
      }else{
         return document.querySelectorAll(selector);
      }
   };

   var mapa = $("#elMapa");
   console.log(mapa);
});
