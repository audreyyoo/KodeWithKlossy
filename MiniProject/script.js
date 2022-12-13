var button = $(".btn");
var nameOutput = $(".name-output");
var typeOutput = $(".type-output");

var compatibleTypes = {
  ESFP: "ESFJ, ESTP, and ISFP",
  ESTP: "ESTJ, ESFP, and INFJ",
  ESTJ: "ESTP, ESFJ, and ISTJ",
  ESFJ: "ISTP, ESTJ, and ESTP",
  ISTJ: "INFJ, ISTP, and ISFJ",
  ISTP: "ISFP, INFP, and ESFP",
  ISFJ: "ESFJ, ISFP, and ISTJ",
  ISFP: "ESFP, ISFJ, and ESFJ",
  ENTJ: "INTJ, ENTP, and ENFJ",
  ENTP: "ENTJ, ENFP, and ENFJ",
  ENFJ: "ENFJ, INFJ, and ENFP",
  ENFP: "ENTJ, INTJ, and INTP",
  INTJ: "INTP, INFJ, and INFP",
  INTP: "ENTP, INFP, and ENFP",
  INFJ: "ISTJ, INFP, and INTJ",
  INFP: "INFJ, ISFJ, and ENFJ",
}

button.on("click", display);

function display() {
  event.preventDefault();
  var nameInput = $(".name-input").val();
  var typeInput = $(".type-input").val();

  nameOutput.text(`${nameInput}, you are an ` + `${typeInput}!`);
  
  typeOutput.text("You are most compatible with " + compatibleTypes[typeInput] + "!");
}