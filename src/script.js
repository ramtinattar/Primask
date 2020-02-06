<<<<<<< HEAD
let matterButton = document.querySelectorAll("#matter");
let colorButton = document.querySelectorAll("#color");
let img = document.querySelector(".character");

console.log(img)
=======
function slideSwitch() {
  var $active = $("#slideshow IMG.active");
  var $next = $active.next();
  $active.addClass("last-active");
  $next
    .css({ opacity: 0.0 })
    .addClass("active")
    .animate({ opacity: 1.0 }, 1000, function() {
      $active.removeClass("active last-active");
    });
}
$(function() {
  setInterval("slideSwitch()", 5000);
});
>>>>>>> aed71f133228ef26808004c55b5b0aac284aaf27
