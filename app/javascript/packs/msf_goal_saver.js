const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const backBtn = document.querySelectorAll("form .back-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
backBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("back");
  });
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputs = [];
//   form.querySelectorAll("input").forEach((input) => {
//     const { name, value } = input;
//     inputs.push({ name, value });
//   });
//   console.log(inputs);
//   form.reset();
// });

const changeStep = (btn) => {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);

  if (index < 0) return false;

  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "back") {
    index--;
  }
  steps[index].classList.add("active");
}

export {changeStep};
