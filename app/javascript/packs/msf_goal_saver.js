const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const backBtn = document.querySelectorAll("form .back-btn");
const worthItBtn = document.querySelectorAll("form .worth-it");
const askAgainBtn = document.querySelectorAll("form .ask-again")
const form = document.querySelector("form");

const changeStep = (btn) => {
  console.log(steps1);
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);

  if (index < 0) return false;

  steps[index].classList.remove("active");
  if (btn === "next" || btn === "worth-it") {
    index++;
  } else if (btn === "back") {
    index--;
  } else if (btn === "ask-again") {
    index = 0;
  }
  steps[index].classList.add("active");
};

const firstLoad = () => {
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
  worthItBtn.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("worth-it");
    });
  });
  askAgainBtn.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("ask-again");
    });
  });
};
export { firstLoad };
export { changeStep };
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




