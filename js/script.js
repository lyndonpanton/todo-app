document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("todo-form");
    todoForm.addEventListener("submit", handleTodoFormSubmission);
    
    function handleTodoFormSubmission(event) {
        event.preventDefault();

        let todoList = document.getElementById("todo-list");
        let todoFormName = document.getElementById("todo-form-name");
        let todoFormCategory = document.getElementById("todo-form-category");

        console.log(todoList.id);
        console.log(todoFormName.value);
        console.log(todoFormCategory.value);

        /*
            Later, each category should have its own todo list, and you should
            add the todo to the relevant todo list
        */
        let todo = document.createElement("li");
        let todoCheckbox = document.createElement("input");
        let todoText = document.createTextNode(todoFormName.value);
        let todoDeleteIcon = document.createElement("i");
        let todoCompleteIcon = document.createElement("i");

        todoDeleteIcon.classList.add("fa-solid", "fa-xmark");
        todoCompleteIcon.classList.add("fa-regular",  "fa-square-check");
        todo.classList.add("todo-list-item");

        todoCheckbox.type = "checkbox";

        todo.appendChild(todoCompleteIcon);
        todo.appendChild(todoText);
        todo.appendChild(todoDeleteIcon);

        todoList.appendChild(todo);

        // Clear the input field
        todoFormName.value = "";
    }
});
