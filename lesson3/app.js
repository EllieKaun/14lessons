// Scope

// function varTest() {
//   var x = 1;
//   if (true) {
//     var x = 2; // та же переменная!
//     console.log(x); // 2
//   }
//   console.log(x); // 2
// }
// varTest();

// function letTest() {
//   let x = 1;
//   if (true) {
//     let x = 2; // другая переменная
//     console.log(x); // 2
//   }03

//   console.log(x); // 1
// }
// letTest();

// Callbacks

// const doHomework = (subject, callback) => {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// };
// const alertFinished = () => {
//   alert("Finished my homework");
// };
// doHomework("math", alertFinished);

// Псевдомассивы
// const btn = document.querySelectorAll("button");

// console.log(btn);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// btn.forEach((item) => {
//   console.log(item);
//   item.addEventListener("click", (event) => {
//     console.log(event.target);
//     if (event.target.classList.contains("red")) {
//       event.target.classList.remove("red");
//     } else {
//       event.target.classList.add("red");
//     }
//   });
// });

// const wrapper = document.querySelector(".btns");
// const newBtn = document.createElement("button");
// wrapper.append(newBtn);

// wrapper.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     // console.log(event.target);
//     // console.dir(event.target);

//     if (event.target.classList.contains("red")) {
//       event.target.classList.remove("red");
//     } else {
//       event.target.classList.add("red");
//     }
//   }
// });
