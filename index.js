console.log("Code your solution!")
const list = document.querySelector("form");
const resultsList = document.querySelector(".displayItem");

// console.log(list);
// console.log(resultsList);

list.addEventListener("submit", (event) => {
  event.preventDefault();

  const errorElement = document.createElement("p");
  errorElement.setAttribute("class", "format");

  const unOrdered = document.createElement("ul");
  const listText = document.querySelector("list").value;

    if (listText){
        const newList = document.createElement("li")
        newList.textContent = listText
        unOrdered.append(newList)
    }
    else {
        errorElement.textContent = "Please type in textfield";
        list.after(errorElement);
    }

  newList.addEventListener("click", () => {
    newList.style.textDecoration = "line-through";
    // console.log("I can be clicked");
 
 
    // form.reset()
    });
});