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
    /* Give each todo list a heading */
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

        for (let i = 0; i < categories.length; i++) {

        }
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
        let todoDeleteIcon = document.createElement("i");
        let todoCategory = document.createElement("i");
        
        todoCompleteIcon.classList.add("fa-regular",  "fa-square");
        todoDeleteIcon.classList.add("fa-solid", "fa-xmark");
        todoText.classList.add("todo-text");
        todo.classList.add("todo-item");

        /*
            Later, each category should have its own todo list, and you should
            add the todo to the relevant todo list
        */
        let categoryClass = "todo-category-";

        for (category in categories) {
            if (category == todoFormCategory.value) {
                categoryClass += categories[category];
                console.log(categoryClass);
                break;
            }
        }

        // for (let i = 0; i < Object.keys(categories).length; i++) {
        //     console.log(i);
        //     console.log(categories[i] + " vs. " + todoFormCategory.value);

        //     if (categories[i] === todoFormCategory.value) {
        //         categoryClass += categories[category];
        //         console.log(categoryClass);
        //         break;
        //     }
            
        //     // else if (i == Object.keys(categories).length - 1) {
        //     //     categoryClass += nullCategory;
        //     // }
        // }

        todoCategory.classList.add("fa-solid", "fa-circle", categoryClass);
        
        todoCompleteIcon.addEventListener("click", handleTodoComplete);
        todoDeleteIcon.addEventListener("click", handleTodoDelete);

        todoText.appendChild(todoTextContent);
        todo.appendChild(todoCompleteIcon);
        todo.appendChild(todoText);
        todo.appendChild(todoCategory);
        todo.appendChild(todoDeleteIcon);

        todoList.appendChild(todo);

        todoFormName.value = "";
    }

    function handleTodoCategoryChange(event) {
        // currentCategory = event.target.value;

        // let todoLists = document.getElementsByClassName("todo-list");

        // for (let i = 0; i < todoLists.length; i++) {
        //     let listName =
        //             todoLists[i].substring(todoLists[i].lastIndexOf("-") + 1);
        //     console.log(currentCategory + "vs. " + listName);                    

            
        //     if (currentCategory == listName) {
        //         /* Display the new category */
        //         todoLists[i].classList.remove("todo-list-hidden");
                
        //         /* Restyle the sidebar category */
        //     } else {
        //         /* Hide the category */
        //         todoLists[i].classList.add("todo-list-hidden");
        //         /* Restyle the sidebar category */
        //     }
        // }
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

    function toggleSideBar(event) {
        let sidebar = document.getElementById("todo-categories");

        if (sidebar.classList.contains("todo-categories-open")) {
            sidebar.classList.remove("todo-categories-open");
        } else {
            sidebar.classList.add("todo-categories-open");
        }
    }
});
