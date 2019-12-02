---
layout: post
title: "The Web Developer Bootcamp - Lesson 143 and 144: Introduction to Functions and Arguments"
categories: misc
---

## Lesson 143: Functions

Functions let us wrap bits of code up into reusable packages.
They are a way to store many lines of code - somewhat like a variable which stores more bite-sized things.

1. We must first 'declare' functions:
```
function doSomething() {
    console.log("Hello World.");
}
```
2. Then 'call' them:
```
doSomething();
doSometning();
doSomething():
etc.
```

If you want to see the code in the console, type in 'doSomething' without the ()'s and the console will show you your original code (from 1. above), without running it.

To clear code in the console, write the function *clear()*.

The naming convention for functions is camel-case.


## Lesson 144: Arguments

Often we want to write functions that take inputs.
```
function square(num) {
    console.log(num * num);
}
```
Now when we call* *square()* we need to pass in a value.
```
square(10);
square(3);
etc.
```

Another example:
```
function sayHello(name) {
    console.log("Hello there " + name + "!");
}

sayHello("Rusty");
```

*console.log will print: Hello there Rusty!*