const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector(".username").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const user = {
    username: username,
    email: email,
    password: password,
    rememberMe: false,
  };

  const json = JSON.stringify(user);
  localStorage.setItem("userdata", json);
  console.log("added");
  location.href = "../projects.html";
});
