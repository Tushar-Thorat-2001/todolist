const item = document.querySelector("#item");
const todobox = document.querySelector("#to-do-box");

// keyup is use to check what is writen in input box
//  this is refering the element
// eg in these this is referning the item

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addtodo(this.value);
  }
});

const addtodo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item} <i class="fas fa-times"></i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });
  todobox.appendChild(listItem);
};
