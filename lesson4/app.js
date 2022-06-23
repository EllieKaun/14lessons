// // const obj = {
// //   name: "John",
// //   age: "20",
// // };

// // console.log(obj);

// // const data = JSON.stringify(obj);
// // console.log(data);

// // console.log(JSON.parse(data));

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const reqest = new XMLHttpRequest(); //создание запроса
  reqest.open("GET", "data.json"); //определение типа запроса
  reqest.setRequestHeader("Content-type", "application/json"); //определение типа данных
  reqest.send(); //отправка запроса
  reqest.addEventListener("load", () => {
    //ожидание загрузки
    const data = JSON.parse(reqest.response); //превращение строки в объект
    console.log(reqest.response);
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".age").innerHTML = data.age;
  });
});

// // num str null undef booleab nan - primitive
// // arr, obj, fun - obj

// const num = 5;

// let num2 = num + 10;

// console.log(num);
// console.log(num2);

// const obj = {
//   name: "Alex",
//   num: "+996555332211",
// };

// // const obj2 = obj;

// // obj3.name = "John";

// const obj2 = { ...obj };
// obj2.name = "John";

// console.log(obj);
// console.log(obj2);
// // console.log(obj3);

// let http = require("http");

// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello world");
//   })
//   .listen(8081);

// console.log("server running at http://127.0.0.1:8081");

// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
// });
