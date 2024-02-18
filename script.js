let name = "";
let score = 0;
let grade = "";
let status = "";

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("nilai").value = "";
}

function renderOutput() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  // create new element
  const nameElement = document.createElement("p");
  const scoreElement = document.createElement("p");
  const gradeElement = document.createElement("p");
  const statusElement = document.createElement("p");

  // create text node
  const nameText = document.createTextNode(`Name: ${name}`);
  const scoreText = document.createTextNode(`Score: ${score}`);
  const gradeText = document.createTextNode(`Grade: ${grade}`);
  const statusText = document.createTextNode(`Status: ${status}`);

  // append text node to element
  nameElement.appendChild(nameText);
  scoreElement.appendChild(scoreText);
  gradeElement.appendChild(gradeText);
  statusElement.appendChild(statusText);

  // append element to output div
  outputDiv.appendChild(nameElement);
  outputDiv.appendChild(scoreElement);
  outputDiv.appendChild(gradeElement);
  outputDiv.appendChild(statusElement);

  // reset form
  resetForm();
}

function sumbit() {
  // get inputs value
  const nameValue = document.getElementById("name").value;
  const scoreValue = document.getElementById("nilai").value;

  if (!nameValue || !scoreValue) {
    return alert("Name and score is required");
  }

  if (scoreValue < 0 || scoreValue > 100) {
    return alert("Score must be between 0 and 100");
  }

  // save values to global variable
  name = nameValue;
  score = scoreValue;

  // check grade
  if (scoreValue >= 90) {
    grade = "A";
    status = "Lulus";
  } else if (scoreValue >= 80) {
    grade = "B";
    status = "Lulus";
  } else if (scoreValue >= 70) {
    grade = "C";
    status = "Lulus";
  } else if (scoreValue >= 60) {
    grade = "D";
    status = "Lulus";
  } else {
    grade = "E";
    status = "Tidak Lulus";
  }

  // render output
  renderOutput();
}
