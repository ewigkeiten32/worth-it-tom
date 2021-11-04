
const isSingular1 = (str) => {
  return true;
};

function calculator() {
  const purchaseForm = document.getElementById("purchase_form");

  if (purchaseForm) {
    const weeklyContribution = document.getElementById(
      "weekly-contribution"
    ).innerHTML;
    purchaseForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const heading = document.getElementById("heading");
      const impact = document.getElementById("impact");
      const list = document.getElementById("list");
      const setback = document.getElementById("setback");
      const context = document.getElementById("context");
      const days_reason = document.getElementById("days_reason");
      const visual = document.getElementById("visual");
      const goal_name = document
        .getElementById("goal_name")
        .getAttribute("value");
      const goal_reason = document.getElementById("goal_reason").innerHTML;
      // const purchase = purchaseForm.querySelectorAll("input")[0].value
      // const cost = purchaseForm.querySelectorAll("input")[1].value
      const cost = document.getElementById("what-is-cost").value;
      const purchase = document.getElementById("what-to-buy").value;
      const listChildren = document.querySelectorAll("#list>li");
      const impactBtns = document.querySelector(".impact-btns");
      const again = document.getElementById("again");

      const calculatedImpact =
        (parseInt(cost) / parseInt(weeklyContribution)).toFixed() * 7;

      // This is randomizing the objects, value and emojis
      const object = [
        [`☕️`, 5, "coffees from a trendy Melbourne cafe"],
        [`🍹`, 10, "pints off the wood at your local."],
        [`🍕`, 25, "pizzas from LazerPig."],
        ["🎧", 20, "months of Spotify Premium."],
        [`🥃`, 10, "shots of Fireball."],
        [
          `🐖`,
          7,
          "of those nasty shredded ham pizzas you get around the corner.",
        ],
        [`🥑`, 10, "servings of smashed avo."],
        [`🍔`, 4, "Maccas Cheeseburgers."],
        [`🍆`, 30, "months of Tinder Gold. Apparently."],
        [`💪`, 40, "weeks worth of F45."],
        [`💻`, 11, "months of Netflix."],
        [`🎹`, 60, "piano lessons."],
        ["🥰", 80, "date nights."],
      ];

      const randomObject = object[Math.floor(Math.random() * object.length)];
      console.log(randomObject);

      const items = (parseInt(cost) / randomObject[1]).toFixed();
      const emoji = randomObject[0];
      const emoji_name = randomObject[2];
      // let randomQuote = "";
      // let positiveQuote = "";

      const quotes = [
        "Not so fast, Moneybags.",
        "Champagne taste on a beer budget, ey?",
        "Yeah that's gonna be a no from me, dawg",
        "We both know that's not a good idea.",
        "Denial. Not just a river in Egypt.",
        "How about a deep breath for dinner?",
        "Woah, slow your roll.",
        "Ease up, Turbo."
      ];
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const positiveQuote = "Look, it's not disastrous.";

      let finalQuote = calculatedImpact > 7 ? randomQuote : positiveQuote;
      // console.log(finalQuote);
      let i = 0;
      const SPEED = 50; /* The SPEED/duration of the effect in milliseconds */

      heading.innerText = "";
      /**
      * comments here.
      *
      */
      const typeWriter = () => {
        if (i < finalQuote.length) {
          document.getElementById("heading").innerHTML += finalQuote.charAt(i);
          // document.getElementById("heading").innerHTML += positiveQuote.charAt(i);
          i++;
          impactSection();
        }
 /**
      * If you have ANY problems, it's probably this setTimeout.
      *
      */
        setTimeout(typeWriter, SPEED);
      }

      const impactSection = () => {
        if (i == finalQuote.length - 1) {
          if (isSingular1(purchase)) {
            impact.innerHTML = `If you buy the ${purchase} for $${cost}:`;
          } else {
            impact.innerHTML = `If you buy the ${purchase} for $${cost}:`;
          }

          if (calculatedImpact > 7) {
            setback.innerHTML = `1. You'll push your goal back another ${calculatedImpact} days`;
            // days_reason.innerHTML = `That's ${calculatedImpact} days longer you're whinging ${goal_reason}`
            days_reason.innerHTML = `2. You're saving so you can ${goal_reason}. How important is that to you?`;
          } else {
            setback.innerHTML = `1. Delays aren't great, but it'll only set you back less than a week`;
            // days_reason.innerHTML = `It's only a few days longer you're whinging ${goal_reason}`
            days_reason.innerHTML = `2. You're saving so you can ${goal_reason}. How important is that to you?`;
          }

          context.innerHTML = `For context, $${cost} is equivalent to ${items} ${emoji_name}`;
          visual.innerHTML = emoji.repeat(items);
          impactBtns.style.display = "flex";
          again.classList.remove("d-none");
        } else if (i === 1){
            impact.innerHTML = ""
            setback.innerHTML = ""
            days_reason.innerHTML = ""
            context.innerHTML = ""
            visual.innerHTML = ""
        }
      };
      listChildren.forEach((listChild) => {
        console.log(listChild);
        listChild.classList.add("list-item");
      });

      // the output to the calculator builder results

      typeWriter();
      // list.style.listStyleType = "disc"
    });
  }
}

export { calculator };


// const isSingular = require("is-singular");

// function calculator() {
//   const purchaseForm = document.getElementById("purchase_form");
//   if (purchaseForm) {
//     const weeklyContribution = document.getElementById(
//       "weekly-contribution"
//     ).innerHTML;
//     purchaseForm.addEventListener("submit", (event) => {
//       event.preventDefault();
//       // const heading = document.getElementById("heading");
//       const impact = document.getElementById("impact");
//       const list = document.getElementById("list");
//       const setback = document.getElementById("setback");
//       const context = document.getElementById("context");
//       const days_reason = document.getElementById("days_reason");
//       const visual = document.getElementById("visual");
//       const goal_name = document
//         .getElementById("goal_name")
//         .getAttribute("value");
//       const goal_reason = document.getElementById("goal_reason").innerHTML;
//       const purchase = purchaseForm.querySelectorAll("input")[0].value;
//       const cost = purchaseForm.querySelectorAll("input")[1].value;
//       const listChildren = document.querySelectorAll("#list>li");
//       const impactBtns = document.querySelector(".impact-btns");
//       const again = document.getElementById("again");
//       submit.disabled = true;

//       const calculatedImpact =
//         (parseInt(cost) / parseInt(weeklyContribution)).toFixed() * 7;

//       // This is randomizing the objects, value and emojis
//       const object = [
//         [`☕️`, 5, "coffees served by a bearded Fitzroy hipster"],
//         [`🍹`, 10, "Stone & Wood Pacific Ale pints."],
//         [`🍕`, 25, "pizzas from LazerPig."],
//         ["🎧", 20, "months of Spotify Premium."],
//         [`🥃`, 10, "shots of patron."],
//         [
//           `🐖`,
//           7,
//           "of those nasty shredded ham pizzas you get around the corner.",
//         ],
//         [`🥑`, 10, "servings of smashed avo."],
//         [`🍔`, 4, "Maccas cheeseburgers."],
//         [`🍆`, 30, "months worth of a Tinder Gold subscription. Apparently."],
//         [`💪`, 40, "weeks worth of an F45 membership."],
//         [`💻`, 11, "months worth of a Netflix subscription."],
//         [`🎹`, 60, "piano lessons."],
//         ["🥰", 80, "date nights."],
//       ];
//       const randomObject = object[Math.floor(Math.random() * object.length)];
//       console.log(randomObject);

//       const items = (parseInt(cost) / randomObject[1]).toFixed();
//       const emoji = randomObject[0];
//       const emoji_name = randomObject[2];
//       // let randomQuote = "";
//       // let positiveQuote = "";

//       const quotes = [
//         "Not so fast, Moneybags.",
//         "Champagne taste on a beer budget, ey?",
//         "Yeah, that's gonna be a 'No' from me, dawg",
//         "We both know that's not a good idea.",
//         "Denial. Not just a river in Egypt.",
//         "How about a deep breath for dinner?",
//       ];
//       let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//       const positiveQuote = "Look, it's not disastrous.";

//       let finalQuote = calculatedImpact > 7 ? randomQuote : positiveQuote;
//       console.log(finalQuote);
//       let i = 0;
//       const speed = 50; /* The speed/duration of the effect in milliseconds */

//       function typeWriter() {
//         if (i < finalQuote.length) {
//           document.getElementById("heading").innerHTML += finalQuote.charAt(i);
//           // document.getElementById("heading").innerHTML += positiveQuote.charAt(i);
//           i++;
//           if (i == finalQuote.length - 1) {
//             if (isSingular(purchase)) {
//               impact.innerHTML = `If you buy this ${purchase} for $${cost}:`;
//             } else {
//               impact.innerHTML = `If you buy these ${purchase} for $${cost}:`;
//             }

//             if (calculatedImpact > 7) {
//               setback.innerHTML = `You'll push your goal back another ${calculatedImpact} days`;
//               // days_reason.innerHTML = `That's ${calculatedImpact} days longer you're whinging ${goal_reason}`
//               days_reason.innerHTML = `You're saving so you can ${goal_reason}. How important is that to you?`;
//             } else {
//               setback.innerHTML = `Delays aren't great, but it'll only set you back less than a week`;
//               // days_reason.innerHTML = `It's only a few days longer you're whinging ${goal_reason}`
//               days_reason.innerHTML = `You're saving so you can ${goal_reason}. How important is that to you?`;
//             }

//             context.innerHTML = `FWIW, $${cost} is equivalent to ${items} ${emoji_name}`;
//             visual.innerHTML = emoji.repeat(items);
//             impactBtns.style.display = "flex";
//             again.classList.remove("d-none");
//           }
//         }

//         setTimeout(typeWriter, speed);
//       }

//       listChildren.forEach((listChild) => {
//         console.log(listChild);
//         listChild.classList.add("list-item");
//       });

//       // the output to the calculator builder results

//       typeWriter();
//       // list.style.listStyleType = "disc"
//     });
//   }
// }

// // function calculateImpact(){
// //   const parsedWeeklyContribution = parseInt(weeklyContribution)
// //   const parsedCost = parseInt(cost)
// //   console.log(cost,parsedCost)
// //   return (parsedCost)
// // }

// export { calculator };

