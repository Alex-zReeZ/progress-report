# Slim todolist <Badge type="tip" text="PHP" />

## What is the project purpose ?

The purpose of this project was to use a PHP framework to learn how to make roots


## How did I do it

For that project, I used [Slim](../languages/Php.md) framework.

### Here is an exemple of my code


```php

/* Remove todo */
function removeTodo($taskId): void
{
    global $pdo;
    $deleteData = $pdo->prepare('DELETE FROM todo WHERE id = :id;');
    $deleteData->execute(['id' => $taskId]);
}

```

This function here allows you to remove a todo from your todo list

In this code, I take a todo that was written in the input and write it into
the database, writing a success message or an error message.

For the database, we used the SQLite database.

## How to initiate project

For that, you will only need [PHP](https://www.php.net/downloads)

## You can find the [GitHub depot here](https://github.com/Alex-zReeZ/todo_php)
