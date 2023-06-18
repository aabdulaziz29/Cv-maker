const wrapper = document.querySelector(".add__project-wrap");
const username = document.querySelector(".username");
const logOut = document.querySelector(".log__out");
const deleteAcc = document.querySelector(".delete");
let data = JSON.parse(localStorage.getItem("project"));
let data2 = JSON.parse(localStorage.getItem("userdata"));
username.textContent = data2.username;
if (!localStorage.getItem("project")) {
  localStorage.setItem("project", "[]");
}
data.forEach((item) => {
  let card = `
      <div class="project" style="background-image:url(${item.img});">${item.title}</div>`;
  wrapper.insertAdjacentHTML("beforeend", card);
});
logOut.addEventListener("click", () => {
  location.href = "./index.html";
});
deleteAcc.addEventListener("click", () => {
  location.href = "../index.html";
  localStorage.clear();
});
