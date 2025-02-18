/* Data *//////////////////////////////////////////
let cateories = {
    "extracurricular": "red",
    "leisure": "orange",
    "life": "yellow",
    "school": "green",
    "shopping": "blue",
    "travel": "indigo",
    "work": "violet"
};


/* Functinonality *//////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("todo-form");
    todoForm.addEventListener("submit", handleTodoAdd);
    
    function handleTodoAdd(event) {
        event.preventDefault();

        let todoList = document.getElementById("todo-list");
        let todoFormName = document.getElementById("todo-form-name");
        let todoFormCategory = document.getElementById("todo-form-category");

        /*
            Later, each category should have its own todo list, and you should
            add the todo to the relevant todo list
        */
        let todo = document.createElement("li");
        let todoText = document.createElement("span");
        let todoTextContent = document.createTextNode(todoFormName.value);
        let todoCompleteIcon = document.createElement("i");
        let todoDeleteIcon = document.createElement("i");

        /*
            <i class="fa-regular fa-square"></i>
            <i class="fa-regular fa-square-check"></i>
        */
        todoCompleteIcon.classList.add("fa-regular",  "fa-square");
        todoDeleteIcon.classList.add("fa-solid", "fa-xmark");
        todoText.classList.add("todo-text");
        todo.classList.add("todo-item");

        todoCompleteIcon.addEventListener("click", handleTodoComplete);
        todoDeleteIcon.addEventListener("click", handleTodoDelete);

        todoText.appendChild(todoTextContent);
        todo.appendChild(todoCompleteIcon);
        todo.appendChild(todoText);
        todo.appendChild(todoDeleteIcon);

        todoList.appendChild(todo);

        todoFormName.value = "";
    }

    function handleTodoComplete(event) {
        let todo = event.target.parentElement;
        let todoCheckbox = event.target;

        if (todo.classList.contains("todo-item-complete")) {
            todo.classList.remove("todo-item-complete");

            todoCheckbox.classList.remove("fa-square-check");
            todoCheckbox.classList.add("fa-square");
        } else {
            todo.classList.add("todo-item-complete");

            todoCheckbox.classList.add("fa-square-check");
            todoCheckbox.classList.remove("fa-square");
        }
    }

    function handleTodoDelete(event) {
        let todo = event.target.parentElement;
        todo.remove();
    }
});
