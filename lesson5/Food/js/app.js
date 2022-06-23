//tabs
const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add("hide", "fade");
    item.classList.remove("show");
  });

  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add("show", "fade");
  tabsContent[i].classList.remove("hide");
  tabs[i].classList.add("tabheader__item_active");
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// modal
const modal = document.querySelector(".modal");
const modalTrigger = document.querySelectorAll("[data-modal]");
const closeModalBtn = document.querySelector(".modal__close");

modalTrigger.forEach((item) => {
  item.addEventListener("click", openModal);
});

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// function openModalScroll() {
//   const page = document.documentElement;

//   if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
//     openModal();

//     window.removeEventListener("scroll", openModalScroll);
//   }
// }

// form
const forms = document.querySelectorAll("form");
const message = {
  loading: "Идет загрузка...",
  success: "Спасибо, скоро свяжемся !",
  fail: "Что-то пошло не так",
};

forms.forEach((item) => {
  postData(item);
});

function postData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //остановка перезагрузки

    const messageBlock = document.createElement("div");
    messageBlock.textContent = message.loading;
    form.append(messageBlock);

    const request = new XMLHttpRequest(); //создание запроса
    request.open("POST", "server.php"); //определение типа запроса / путь запроса
    request.setRequestHeader("Content-type", "application/json"); //определение типа данных

    const formData = new FormData(form); //клониррование данных формы
    const object = {}; //создание пустого объекта

    formData.forEach((item, i) => {
      object[i] = item; //обертывание данных формы в объект
    });

    const json = JSON.stringify(object); //превращение объекта в строку

    request.send(json); //отправка строки с данными формы

    request.addEventListener("load", () => {
      if (request.status === 200) {
        //проверка успеха отправки
        console.log(request.response);
        messageBlock.textContent = message.success;
      } else {
        messageBlock.textContent = message.fail;
      }
    });
  });
}
