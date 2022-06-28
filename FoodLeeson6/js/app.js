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
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

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

const forms = document.querySelectorAll("form");
const message = {
  loading: "Идет загрузка",
  success: "Спасибо, скоро свяжемся !",
  fail: "Что-то пошло не так",
};

forms.forEach((item) => {
  bindPostData(item);
});

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });

  return res;
};
function bindPostData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const object = {};

    formData.forEach((item, i) => {
      object[i] = item;
    });

    // fetch("server.php", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(object),
    // });

    postData("server.php", JSON.stringify(object))
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      })
      .finally(() => {
        console.log("ok");
      });
  });
}
