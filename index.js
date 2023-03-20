const list = document.querySelector("form");
const unOrdered = document.querySelector("#lists ul"); // accessing the things to do section 

list.addEventListener("submit", (event) => {
    event.preventDefault(); //keeps the webpage from refreshing

    const {todo} = event.target; 

    if(!todo.value) {

        const fieldSet = document.querySelector("fieldset");
        const errorPTag = document.createElement("p");
        errorPTag.setAttribute("id","error");
        errorPTag.innerText = "🛑 ERROR!! 🛑" 
        fieldSet.prepend(errorPTag)

    } else {
        const resultsList = document.querySelector(".displayItem");

        let inputText = todo.value.split("\n");
        for (let todoText of inputText){ 
            if(todoText) {
                const newListItem = document.createElement("li");
                const newDiv = document.createElement("span");
                newDiv.style.paddingRight = "10px";
                newDiv.innerText = todoText;

                
                const newDelete = document.createElement("button");
                newDelete.innerHTML = "REMOVE";

                newListItem.prepend(newDiv);
                newDiv.after(newDelete);

                newListItem.addEventListener("click",() => { 
                    if(newListItem.style.textDecoration) {
                        newListItem.style.textDecoration = "";
                    } else {
                        newListItem.style.textDecoration = "line-through solid rgb(0, 0, 0)";
                    }
                }); 
                newDelete.addEventListener("click",() => { 
                    newListItem.remove();
                });
                unOrdered.append(newListItem);
            }
        }
        list.reset();
    }
});


