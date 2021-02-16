// Login page password Hide/Show
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


// Seat view details

var acc = document.getElementsByClassName("table_row");
var buttonText = document.getElementById('button_text');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if(buttonText.innerHTML === "View Seat"){
      buttonText.innerHTML = "Hide Seat";
    }
    else{
      buttonText.innerHTML = "View Seat";
    }
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}