//function for getting all the tasks in the todo list
const getTasks = async () => {
    const fetchData = await getData();
    const ulElement = document.getElementById("task-list");
    const newItemFirst = fetchData.reverse();

    newItemFirst.forEach((todo) => {
        const li = document.createElement("li");
        li.setAttribute("class", "todo-item");
        li.setAttribute("data-key", todo._id);
        if (todo.done) {
            li.classList.add("done");
        }
        li.innerHTML = `<input type="checkbox" name="taskcheck" id="${todo._id}" /><label for="${todo._id}"></label><span>${todo.description}</span>
      <img src="trash.jpg">`;
        ulElement.appendChild(li);
    });
};

//function for adding an item to the todo list
const addItem = () => {
    const button = document.getElementById("add-item");
    button.addEventListener("click", () => {
        const description = document.getElementById("todo-item").value.trim();

        if (description != "") {
            const ulElement = document.getElementById("task-list");
            const li = document.createElement("li");
            li.innerHTML = `<input type="checkbox" name="taskcheck" id="" /><label for=""></label><span>${description}</span>
      <img src="trash.jpg">`;
            ulElement.insertBefore(li, ulElement.childNodes[0]);
            postToDo(description);
            document.getElementById("todo-item").value = "";
            document.getElementById("todo-item").focus();
            location.reload();
        }
    });
};

//function for deleting a task from the todo list
const removeItem = async () => {
    await getData();
    const lis = document.getElementsByTagName("li");

    Array.from(lis).forEach((item) => {
        const id = item.dataset.key;
        const trash = item.getElementsByTagName("img");
        trash[0].addEventListener("click", (event) => {
            event.preventDefault();
            const li = event.target.parentElement;
            li.parentNode.removeChild(li);
            deleteToDo(id);
        });
    });
};

//function to enable checkbox and set status false to true
const setTaskToDone = async () => {
    await getData();
    const checkbox = document.querySelectorAll("input[type=checkbox]");

    Array.from(checkbox).forEach((item) => {
        const id = item.id;
        item.addEventListener("change", (event) => {
            const li = event.target.parentElement;
            li.classList.add("done");
        });
    });
};


document.addEventListener("DOMContentLoaded", () => {
    getTasks();
    addItem();
    removeItem();
    setTaskToDone();
});