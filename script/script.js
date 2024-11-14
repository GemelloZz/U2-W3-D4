const API_KEY = "oGRY8CENrVD2uQBcd1RiuhMGjxdxAWYgvT2ZQY4SLGuDhk7yztWCUEZZ";
const change = document.querySelectorAll("img");
const button = document.getElementById("img_button");
const button2 = document.getElementById("img_button2");
fetch("https://api.pexels.com/v1/search?query=nature&per_page=9", {
  method: "GET",
  headers: {
    Authorization: API_KEY,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Non è stato possibile trovare i dati");
    }
  })
  .then((nature) => {
    console.log(nature);
    const objData = nature;
    return objData.photos[0].src.landscape;
  })
  .then((new_img) => {
    const imgLoop = function () {
      for (let i = 0; i < change.length; i++) {
        change[i].setAttribute("src", `${new_img}`);
      }
    };
    button.addEventListener("click", imgLoop);
  })
  .catch((error) => {
    console.error("Errore:", error);
    imgLoop();
  });
// secondo bottone
fetch("https://api.pexels.com/v1/search?query=kittens&per_page=9", {
  method: "GET",
  headers: {
    Authorization: API_KEY,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Non è stato possibile trovare i dati");
    }
  })
  .then((nature) => {
    const objData = nature;
    return objData.photos[0].src.landscape;
  })
  .then((new_img) => {
    const imgLoop = function () {
      for (let i = 0; i < change.length; i++) {
        change[i].setAttribute("src", `${new_img}`);
      }
    };
    button2.addEventListener("click", imgLoop);
  })
  .catch((error) => {
    console.error("Errore:", error);
    imgLoop();
  });

console.log(buttonHide);

const buttons = document.querySelectorAll(`.btn-group button:nth-of-type(2)`);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].innerText = `hide`;
}

const deleteButton = document.querySelectorAll("button");
const ghost = function () {
  deleteButton.addEventListener("click", classList.Add("d-none"));
};
ghost();
console.log(buttons);
