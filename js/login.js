const form = document.querySelector("form");
const rememberMe = document.querySelector("#rememberMe");
let user = JSON.parse(localStorage.getItem("userdata"));

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
