const list = document.querySelector("form");
const unOrdered = document.querySelector("#lists ul"); // accessing the things to do section 

list.addEventListener("submit", (event) => {
    event.preventDefault(); //keeps the webpage from refreshing

    const {todo} = event.target; 
// developing my error tag
    if(!todo.value) {
 
        const fieldSet = document.querySelector("fieldset");
        const errorPTag = document.createElement("p");
        errorPTag.setAttribute("id","error");
        errorPTag.innerText = "🛑 ERROR!! 🛑" 
        fieldSet.prepend(errorPTag)

    } else {
        //adds every input onto a new line
        //seperating by space removes the ability to access sentences of tasks
        let inputText = todo.value.split("\n");


/* 
looping through each input 
creating the list element for it, 
styling the content
adding a delete button for it
striking through the text
*/
        for (let todoText of inputText){ 
            if(todoText) {
                const newListItem = document.createElement("li");

                const newDiv = document.createElement("div");
                newDiv.style.paddingRight = "10px";
                newDiv.innerText = todoText;


                const newDelete = document.createElement("button");
                newDelete.innerHTML = "REMOVE";

                newListItem.append(newDiv);
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
        
    }
    list.reset();
});


