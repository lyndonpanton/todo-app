<?php
    $app_title = "Todo App";
    $h1 = "Todo App";
    $categories = [
        "all",
        "extracurricular",
        "leisure",
        "life",
        "school",
        "work",
        "travel",
        "work"
    ];
?>

<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="author" content="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width; initial-scale=1.0" />

        <title><?php echo $app_title; ?></title>

        <link rel="icon" type="image/x-icon" href="./img/todo-list.ico" />
        <link rel="stylesheet" type="text/css" href="./css/styles.css" />
        <script src="https://kit.fontawesome.com/3556eab2e4.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <h1><?php echo $h1; ?></h1>
        </header>

        <main>
            <section id="todo-app">
                <section id="todo-categories">
                    <?php
                        foreach ($categories as $category) {
                            echo "<button id=\"todo-category-button-{$category}\""
                                    . "class=\"todo-category-button\">" . ucfirst(strtolower($category))
                                    . "</button>";
                        }
                    ?>
                </section>
                <article id="todo-list">
                    <!-- Colour should not be used to represent information,
                            change categories to use unique icons -->
                    <?php
                        foreach ($categories as $category) {
                            echo "<section id=\"todo-list-{$category}\" class=\"todo-list\""
                                    . "></section>";
                        }
                    ?>
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
