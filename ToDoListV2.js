const input = document.querySelector ("#input");
const list = document.querySelector ("#list");
const add = document.querySelector ("#add");
const clear = document.querySelector ("#reset");

add.addEventListener ("click", () => {
    const newTodo = input.value;
    const newList = document.createElement ("li");
    newList.innerText = newTodo;
    list.append (newList);
    input.value ="";
})


clear.addEventListener("click", () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
}) 


list.addEventListener ("click", (e) => {
    e.target.nodeName === "LI" && e.target.remove ();
})
