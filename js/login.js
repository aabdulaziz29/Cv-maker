const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  const result = document.querySelector(".result");

  const user = localStorage.getItem("userdata");
  const data = JSON.parse(user);
  console.log(data);

  if (username == data.username && password == data.password) {
    location.href = "../projects.html";
  } else {
    result.textContent = "Incorrect login or password!";
  }
});
