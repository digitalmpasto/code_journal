---
layout: post
title: "The Web Developer Bootcamp - Lesson 150: Intro to JS Scope-1"
categories: misc
---

### Global and Local Scope
A function has its own scope - its own set of variables.
When we define something outside of a function in the global scope, we still have acces to it inside of a function.

In the following example, y is defined in the global scope and can be used in the function (local scope).
```
var y = 99;

y
99

function doMoreMath() {
    console.log(y);
}

doMoreMath()
99
```

vs.

In the following example, we can't pull out x from the local into the global scope:
```
function doMath() {
    var x = 40;
    console.log(x);
}

doMath()
40

x
error
```
