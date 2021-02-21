function myFunction() {
  var x, text_in_correct;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;
  if (x === "bittersweet") {
    text_in_correct = "Good Job!";
  } else {
    text_in_correct = "Incorrect";
  }
  document.getElementById("demo").innerHTML = text_in_correct;
}

function myFunction2() {
  var y, text_in_correct;
  y = document.getElementById("Q2").value;
  if (y === "conventional") {
    text_in_correct = "Good Job!";
  } else {
    text_in_correct = "Incorrect";
  }
  document.getElementById("second").innerHTML = text_in_correct;
}