const id = document.getElementById('id');
const protocol = document.getElementById('protocol');
const name = document.getElementById('name');
const email = document.getElementById('email');
const container = document.getElementById('container');
const btn = document.getElementById('btn');

const fetchdetails = (input) => {
  fetch("http://localhost:5173")
    .then((res) => res.json())
    .then((res) => (container.innerText = res["input"]));
};
convert.addEventListener("click", () => {
  fetchdetails(id.value)
});