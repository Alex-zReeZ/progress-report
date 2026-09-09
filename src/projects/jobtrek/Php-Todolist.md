---
date: TODO
duration: TODO
location: Jobtrek
grade: TODO
---

# PHP todolist <Badge type="tip" text="PHP" />

## Purpose

A todo list written in PHP, backed by a SQLite database, where a task can be created and deleted. The
stated goal of the exercise was to learn how routing works in PHP, and I wrote the whole thing.

> NOTE: confirm the purpose. The original page says the point was to use a PHP framework, while the
> project is written in vanilla PHP. The framework version is the [Slim todolist](./Slim_Todolist.md).

## Technologies

- PHP
- SQLite

## How it works

The pages talk to the database through PDO. Every statement is prepared and its values bound rather
than concatenated into the SQL, so a task title coming from a form cannot alter the query that
handles it.

```php

/* Remove todo */
function removeTodo($taskId): void
{
    global $pdo;
    $deleteData = $pdo->prepare('DELETE FROM todo WHERE id = :id;');
    $deleteData->execute(['id' => $taskId]);
}

```

## Operational Competencies Acquired

I implemented the back-end in PHP, including the operations on the tasks and their persistence in
SQLite through prepared statements. **(g5)**

**Operational competencies:** g5

## Source code

The repository is available [here](https://github.com/Alex-zReeZ/todo_php).
