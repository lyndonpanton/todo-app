<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="author" content="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width; initial-scale=1.0" />

        <title>Todo App</title>

        <link rel="icon" type="image/x-icon" href="./img/todo-list.ico" />
        <link rel="stylesheet" type="text/css" href="./css/styles.css" />
        <script src="https://kit.fontawesome.com/3556eab2e4.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <h1>Todo App</h1>
        </header>

        <main>
            <section id="todo-app">
                <section id="todo-categories">
                    <button id="todo-category-button-all" class="todo-category-button">All</button>
                    <button id="todo-category-button-extracurricular" class="todo-category-button">Extracurricular</button>
                    <button id="todo-category-button-leisure" class="todo-category-button">Leisure</button>
                    <button id="todo-category-button-life" class="todo-category-button">Life</button>
                    <button id="todo-category-button-school" class="todo-category-button">School</button>
                    <button id="todo-category-button-shopping" class="todo-category-button">Shopping</button>
                    <button id="todo-category-button-travel" class="todo-category-button">Travel</button>
                    <button id="todo-category-button-work" class="todo-category-button">Work</button>
                </section>
                <article id="todo-list">
                    <section id="todo-list-all" class="todo-list">

                    </section>
                    <!-- Colour should not be used to represent information,
                            change categories to use unique icons -->
                    <section id="todo-list-extracurricular" class="todo-list todo-list-hidden">

                    </section>
                    <section id="todo-list-leisure" class="todo-list todo-list-hidden">

                    </section>
                    <section id="todo-list-life" class="todo-list todo-list-hidden">

                    </section>
                    <section id="todo-list-school" class="todo-list todo-list-hidden">

                    </section>
                    <section id="todo-list-shopping" class="todo-list todo-list-hidden">

                    </section>
                    <section id="todo-list-travel" class="todo-list todo-list-hidden">

                    </section>
                    <section id="todo-list-work" class="todo-list todo-list-hidden">

                    </section>
                </article>

                <form name="todo-form" action="./" method="GET" id="todo-form">
                    <input autocomplete="off" type="text" id="todo-form-name" name="todo-form-name" placeholder="Go for a walk..." />
                    <!--
                        Allow user to define which category the new todo item
                        should be placed in
                    -->
                    <select id="todo-form-category" name="todo-form-category">
                        <option name="todo-form-category" value="all">
                            ---
                        </option>
                        <option name="todo-form-category" value="extracurricular">
                            Extracurricular
                        </option>
                        <option name="todo-form-category" value="leisure">
                            Leisure
                        </option>
                        <option name="todo-form-category" value="life">
                            Life
                        </option>
                        <option name="todo-form-category" value="school">
                            School
                        </option>
                        <option name="todo-form-category" value="shopping">
                            Shopping
                        </option>
                        <option name="todo-form-category" value="travel">
                            Travel
                        </option>
                        <option name="todo-form-category" value="work">
                            Work
                        </option>
                    </select>

                    <input type="submit" id="todo-form-submit" value="Add Todo" />
                </form>
            </section>
        </main>

        <footer>
            
            <script type="text/javascript" src="./js/script.js"></script>
        </footer>
    </body>
</html>
