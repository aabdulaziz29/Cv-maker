// from
const newProjectForm = document.querySelector(".new__project form");

// inputs
const inputImg = document.querySelector(".img");
const inputName = document.querySelector(".name");
const inputJob = document.querySelector(".job");
const inputDate = document.querySelector(".date");
const inputDescription = document.querySelector(".description");

// results

const resultImg = document.querySelector(".new__project-img");
const resultName = document.querySelector(".new__project-name");
const resultJob = document.querySelector(".new__project-job");
const resultDate = document.querySelector(".new__project-date");
const resultDescription = document.querySelector(".new__project-about");

inputImg.addEventListener("input", () => {
  resultImg.src = inputImg.value;
});

inputName.addEventListener("input", () => {
  resultName.textContent = inputName.value;
});

inputJob.addEventListener("input", () => {
  resultJob.textContent = inputJob.value;
});

inputDate.addEventListener("input", () => {
  resultDate.textContent = inputDate.value;
});

inputDescription.addEventListener("input", () => {
  resultDescription.textContent = inputDescription.value;
});


newProjectForm.addEventListener("submit", () =>{
    
})