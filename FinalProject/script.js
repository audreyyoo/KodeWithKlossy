var button = $(".submit-btn");
var formOutput = $(".form-output");

button.on("click", display);

function display() {
  event.preventDefault();
  formOutput.text("Thanks for your input!");
  document.getElementById("form").reset();
}