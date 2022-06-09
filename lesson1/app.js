// LESSON_1:

// !!!REGULAR EXPRESSIONS

// // /pattern/flag

// let string = prompt("tell me your name");

// let regExp = /y/;

// // console.log(string.match(regExp));

// // match использеться для поиска слов (символов)

// // ---------

// regExp = /Y/;

// // чувствительность к регистру (получим null)

// // console.log(string.match(regExp));

// // ---------

// // флаги: i, g, m

// regExp = /Y/i;

// // i не чувствителен к регистру

// console.log(string.match(regExp));

// const letter = "AbCcDi";

// // const regExp = /C/gi;

// const regExp = new RegExp("C", "gi");

// // g делает глобальным т.е. находит все соответсвующие элементы

// console.log(letter.match(regExp));

// ----------

// классы \d \w

// \d для поиска цифр
// \w для поиска цифр и букв

// const letter = "111222333";

// const regExp = /\d/g;
// console.log(letter.match(regExp));
// console.log(letter.replace(regExp, "*"));

// //  .test необходим для валидации

// const phoneInput = document.querySelector(".phoneInput");
// const phoneCheck = document.getElementsByClassName("phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// const phoneValidate = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneCheck[0].addEventListener("click", () => {
//   if (phoneValidate.test(phoneInput.value)) {
//     phoneResult.innerText = "ok";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerText = "not  ok";
//   }
// });

// !!!RECURS

// let num = 0;
// let field = "";
// const count = () => {
//   num++;
//   console.log(num);
//   if (num < 50) {
//     return count();
//   }
// };
// count();

// const people = {
//   John: {
//     age: 25,
//     parents: {
//       Kelly: {
//         age: 45,

//       Tony: {
//         age: 45,
//       },
//     },
//   },
//   Sam: {
//     age: 15,
//     parents: {
//       Jean: {
//         age: 35,
//       },
//     },
//   },
// };

// const parantList = (obj) => {
//   if (obj.parents) {
//     for (let key in obj.parents) {
//       console.log(key);
//       parantList(obj.parents[key]);
//     }
//   }
// };

// parantList(people.John);

for (let key in people) {
  parentList[key];
}
