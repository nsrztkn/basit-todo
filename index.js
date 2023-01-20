let Form = document.getElementById("form");
let Input = document.getElementById("input");
let Button = document.getElementById("add");
let todolar = document.getElementById("todolar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  AddTodo(Input.value);
});

function AddTodo(x) {
  let htmlkod = `<li>${x}<button onclick="Sil(this)">Sil</button></li>`;

  todolar.insertAdjacentHTML("beforeend", htmlkod);
  Input.value = "";
  Input.focus();
}

function Sil(x) {
  x.parentElement.remove();
}
