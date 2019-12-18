---
layout: post
title: "The Web Developer Bootcamp - Lesson 162: Todo list code along"
categories: misc
---

Here, we've taken the Todo list from 156 and modified it.

Here's the starter code, as left off from lesson 156 (with notes):

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






