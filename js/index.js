let data = JSON.parse(localStorage.getItem("userdata")) || false;
const create = document.querySelector(".create");
create.addEventListener("click", () => {
  if (data.rememberMe) {
    location.href = "../projects.html";
  } else {
    location.href = "../registration.html";
  }
});
