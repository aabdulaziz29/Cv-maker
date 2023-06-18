const form = document.querySelector("form");
const rememberMe = document.querySelector("#rememberMe");
const eye = document.querySelector(".fa-eye");
let user = JSON.parse(localStorage.getItem("userdata"));
const password2 = document.querySelector(".password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  const result = document.querySelector(".result");

  if (username == user.username && password == user.password) {
    location.href = "../projects.html";
    if (rememberMe) {
      user.rememberMe = true;
      let json = JSON.stringify(user);
      localStorage.setItem("userdata", json);
    } else {
      user.rememberMe = false;
      let json = JSON.stringify(user);
      localStorage.setItem("userdata", json);
    }
  } else {
    result.textContent = "Incorrect login or password!";
  }
});
eye.addEventListener("mousedown", () => {
  password2.setAttribute("type", "text");
  console.log(password2.getAttribute("type"));
});
eye.addEventListener("mouseup", () => {
  password2.setAttribute("type", "password");
  console.log(password2.getAttribute("type"));
});
