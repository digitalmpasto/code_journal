---
layout: post
title: "The Web Developer Bootcamp - Lesson 158: Todo list"
categories: misc
---

The html written in the lesson is simply a list of the commands for reference that, when entered into a prompt, trigger the functionality of the Todo list:
```
<body>
    <h1>Todo List</h1>

    <ul>
        <li>"new" - Add A Todo</li>
        <li>"list" - List all Todos</li>
        <li>"quit" - Quit App</li>
    </ul>
</body>
```

The JS adds the funtionality. Here is the code plus notation:
```
var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?")

//Want to ask user over and over until they enter "quit" 
//This means we need a loop
while (input !== "quit") {
    //handle input
    if (input === "list") {
        console.log(todos);
    }
    else if (input === "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
    }
    //ask again for new input
    var input = prompt("What would you like to do?")
}
console.log("OK, YOU QUITE THE APP");
//We'll only see thie above line when the while loop is done,
//which means the user has entered "quit"
```

Within the while loop, and if and else statements you'll see "quit", "list", and "new", respectively (these words have no inherent functionality - they can be arbitrary - they are chosen by you).
Thee words are what you'll enter when prompted in the browser by the code: var input = prompt("What would you like to do?"). They direct
the action of the list item you will input after.

So,

This bit of code:
```
 else if (input === "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
    }
```
requires you to first enter "new" when prompted, so that you can then push a new ToDo item to your list.

And this bit of code:
```
if (input === "list") {
        console.log(todos);
    }
```
will print your Todo list in your browser's JS console, when you enter "list" into the prompt.

So as long as you don't enter "quit":
```
while (input !== "quit") {
```
you can keep adding/pushing items to your list with "new" and checking them with "list". Of course, you can also check the items in your list by entering the variable name of your array (todo) to the console.