---
layout: post
title: "The Web Developer Bootcamp - Lesson 162: Todo list code along"
categories: misc
---

Here, we've taken the Todo list from 156 and modified it.

Here's the starter code, as left off from lesson 156:
```
var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    }
    else if (input === "new") {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
```

What we're trying to accomplish in this exercise, thus far (in-between start and 6:00), is to first, for each list/array item, print each item/todo on its own, separate line in the console:
```
if (input === "list") {
    todos.forEach (function(todo)) {
        console.log(todo);
    });
```
Note: we also got rid of the `console.log(todos);` line. This simply printed the array as one, whole list.

<br>

Next, we added a parameter to our forEach:
```
if (input === "list") {
    todos.forEach(function(todo, i)) {
```
The i is short for "index".
S. the first thing to get passed into the function is the item/todo, and then i will give us the index of of that item.

In our console, we want to add the index of the item next to the item. So we add:
```
if (input === "list") {
    todos.forEach(function(todo, i)) {
        console.log (i + ": " + todo);
    });
```
See how this prints in the console:
```
0: item 1
1: item 2
2: item 3
```
and so on.

Lastly, we also put some asterisks around the index and printed item:
```
if (input === "list") {
    console.log("******")
    todos.forEach(function(todo, i)) {
        console.log (i + ": " + todo);
    });
    console.log("******")
```
Now the printed items will look like this:
```
******
0: item 1
******
******
1: item 2
******
```
<br>
Here's what the finished code looks like so far:
```
    if (input === "list") {
        console.log("******")
        todos.forEach(function (todo, i) {
            console.log(todo);
        });
        console.log("******")
    }
    else if (input === "new") {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUITE THE APP");
```


