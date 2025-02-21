<!-- Database -->
<?php
    $host = "localhost";
    $user = "lyndon";
    $pass = "my_password";
    $db = "todo_app";

    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
        die("Database connection failed");
    }

    // try {
    //     $conn = new PDO("mysql:host=$host,database=$db" , $user , $pass);
    //     $conn−> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // } catch (PDOException $e) {
    //     echo "Connection failed: " . $e−>getMessage ();
    // }
?>

<!-- Local -->
<?php
    $app_title = "Todo App";
    $h1 = "Todo App";
    $categories = [
        "all",
        "extracurricular",
        "leisure",
        "life",
        "school",
        "shopping",
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

                    <select id="todo-form-category" name="todo-form-category">
                        <?php
                            foreach ($categories as $category) {
                                echo "<option name=\"todo-form-category\" value=\"{$category}\">";

                                if ($category == "all") {
                                    echo "---";
                                } else {
                                    echo ucfirst(strtolower($category));
                                }

                                echo "</option>";
                            }
                        ?>
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
