const element = document.querySelector("p"); 
element.style.display = "none";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
  const name = event.target.value.trim();

  if (name === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = name;
  }
});