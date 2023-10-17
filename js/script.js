const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const submitButton = document.getElementById("submit");
const display = document.getElementById("display");
const dynamicText = document.getElementById("dynamicText");
const clear = document.getElementById("clear");

const validate = () => {
  if (nameInput.value === "") {
    throw new Error("I bet you have a really cool name");
  } else if (parseInt(ageInput.value) < 0) {
    throw new Error("Your age can't be negative!");
  } else if (isNaN(parseInt(ageInput.value))) {
    throw new Error("I won't tell a soul, but you have to tell me your age");
  }
};

const updateDisplay = (name, age) => {
  display.innerHTML = `Hello ${name}, you are ${parseInt(age)} years old. |`;
  ageInput.value = parseInt(ageInput.value);
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("name")) {
    updateDisplay(localStorage.getItem("name"), localStorage.getItem("age"));
  }

  submitButton.addEventListener("click", (e) => {
    console.log(nameInput.value, ageInput.value);
    console.log(parseInt(ageInput.value));
    //prevenimos que se recargue la pagina y validamos los datos
    e.preventDefault();
    try {
      validate();
      dynamicText.innerHTML = "Ta-da!";
      updateDisplay(nameInput.value, ageInput.value);
    } catch (error) {
      dynamicText.innerHTML = error.message;
    }
  });

  clear.addEventListener("click", () => {
    localStorage.clear();
    display.innerHTML = "|";
    nameInput.value = "";
    ageInput.value = "";
    dynamicText.innerHTML = "Give it another try!";
  });
});
