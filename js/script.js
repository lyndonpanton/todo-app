/* Data *//////////////////////////////////////////
let categories = {
    "all": "grey",
    "extracurricular": "red",
    "leisure": "orange",
    "life": "yellow",
    "school": "green",
    "shopping": "blue",
    "travel": "indigo",
    "work": "violet"
};

let nullCategory = "all";
let currentCategory = "all";

/* Store todo information in JavaScript so you can use the "all" display */

/* Functinonality *//////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    /* Set the headings for each todo list */
    setTodoListHeadings();

    /* Set current category */
    setInitialDropdownCategory();

    /* Change category view */
    let categoryButtons = document.getElementsByClassName("todo-category-button");

    for (let i = 0; i < categoryButtons.length; i++) {
        categoryButtons[i].addEventListener("click", handleCategoryChange);
    }

    /* Change todo category */
    let categoryDropdown = document.getElementById("todo-form-category");
    categoryDropdown.addEventListener("change", handleTodoCategoryChange);

    /* Submit todo form */
    let todoForm = document.getElementById("todo-form");
    todoForm.addEventListener("submit", handleTodoAdd);

    /* Toogle side bar */
    let hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", toggleSideBar);

    /* Update footer date */
    let currentYear = document.getElementById("current-year");
    currentYear.textContent = new Date().getFullYear();

    function handleCategoryChange(event) {
        let categories = document.getElementsByClassName("todo-list");
        let targetLastHyphenIndex = event.target.id.lastIndexOf("-");

        for (let i = 0; i < categories.length; i++) {
            let lastHyphenIndex = categories[i].id.lastIndexOf("-");
                    
            if (categories[i].id.slice(lastHyphenIndex + 1)
                == event.target.id.slice(targetLastHyphenIndex + 1)) {
                    categories[i].classList.remove("todo-list-hidden");
            } else {
                categories[i].classList.add("todo-list-hidden");
            }
        }

        let categoryButtons = document.getElementsByClassName("todo-category-button");

        for (let i = 0; i < categoryButtons.length; i++) {
            if (categoryButtons[i] == event.target) {
                categoryButtons[i].classList.add("todo-category-button-current");
            } else {
                categoryButtons[i].classList.remove("todo-category-button-current");
            }
        }

        // Close sidebar
        document.getElementById("todo-categories")
                .classList.remove("todo-categories-open");
    }
    
    function handleTodoAdd(event) {
        event.preventDefault();

        let todoList = document.getElementById("todo-list-" + currentCategory);
        let todoFormName = document.getElementById("todo-form-name");
        let todoFormCategory = document.getElementById("todo-form-category");

        let todo = document.createElement("li");
        let todoText = document.createElement("span");
        let todoTextContent = document.createTextNode(todoFormName.value);
        let todoCompleteIcon = document.createElement("i");
        let todoRightElements = document.createElement("div");
        let todoDeleteIcon = document.createElement("i");
        let todoCategory = document.createElement("i");
        
        todoCompleteIcon.classList.add("fa-regular",  "fa-square", "todo-item-checkbox");
        todoRightElements.classList.add("todo-item-right");
        todoDeleteIcon.classList.add("fa-solid", "fa-xmark", "todo-item-delete");
        todoText.classList.add("todo-item-text");
        todo.classList.add("todo-item");

        /*
            Later, each category should have its own todo list, and you should
            add the todo to the relevant todo list
        */
        let categoryClass = "todo-category-";

        for (category in categories) {
            if (category == todoFormCategory.value) {
                categoryClass += categories[category];
                break;
            }
        }

        todoCategory.classList.add("fa-solid", "fa-circle", "todo-category", categoryClass);
        
        todoCompleteIcon.addEventListener("click", handleTodoComplete);
        todoDeleteIcon.addEventListener("click", handleTodoDelete);

        todoText.appendChild(todoTextContent);
        todoRightElements.appendChild(todoDeleteIcon);
        todoRightElements.appendChild(todoCategory);
        todo.appendChild(todoCompleteIcon);
        todo.appendChild(todoText);
        todo.appendChild(todoRightElements);

        todoList.appendChild(todo);

        todoFormName.value = "";
    }

    function handleTodoCategoryChange(event) {
        currentCategory = event.target.value;
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
        let todo = event.target.parentElement.parentElement;
        todo.remove();
    }

    function setInitialDropdownCategory() {
        document.getElementById("todo-form-category")
                .getElementsByTagName("option")[0].selected = true;
    }

    function setTodoListHeadings() {
        let todoListHeadings = document.getElementsByClassName("todo-list-heading");
    
        for (let i = 0; i < todoListHeadings.length; i++) {
            todoListHeadings[i].textContent =
                    todoListHeadings[i].parentElement.id.slice(
                        todoListHeadings[i].parentElement.id.lastIndexOf("-") + 1,
                        todoListHeadings[i].parentElement.id.lastIndexOf("-") + 2
                    ).toUpperCase()
                    +
                    todoListHeadings[i].parentElement.id.slice(
                        todoListHeadings[i].parentElement.id.lastIndexOf("-") + 2
                    );
        }
    }

    function toggleSideBar(event) {
        let sidebar = document.getElementById("todo-categories");

        if (sidebar.classList.contains("todo-categories-open")) {
            sidebar.classList.remove("todo-categories-open");
        } else {
            sidebar.classList.add("todo-categories-open");
        }
    }
});
