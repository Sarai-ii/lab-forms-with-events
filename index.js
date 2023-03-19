console.log("Code your solution!")
const body = document.querySelector("body");
const toDoList = document.querySelector("ul");
const form = document.querySelector("form");
const textBox = document.querySelector("#textbox");
const submitButton = document.querySelector("#submit-task");
const pTag = document.createElement("p");

submitButton.value = "Add Task to To-Do List";

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let newListItems = textBox.value.split("\n");
    for (let i = 0; i < newListItems.length; i++){
        const newListItem = document.createElement("li");
        newListItem.textContent = newListItems[i];
        toDoList.append(newListItem);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        newListItem.append(deleteButton);

        newListItem.addEventListener("click", (event) => {
            if (newListItem.style.textDecoration === "line-through"){
                newListItem.style = "none";
            } else {
            event.target.style.textDecoration = "line-through";
            }
        });

        deleteButton.addEventListener("click", (event) => {
            newListItem.remove();
        });
    }

    form.reset();

});