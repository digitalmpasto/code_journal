---
layout: post
title: "The Web Developer Bootcamp - Lesson 150: Intro to JS Scope-2"
categories: misc
---

In the following example, when we initially declare var y = 99, y is declared in the global scope.
```
var y = 99

function doMoreMath() {
    y = 100;
    console.log(y);
}
```

So when we type in the variable y the first time, it brings up 99 as its value.
However, we then call doMoreMath(), and get back 100. This changed the variable y of the global scope to what y is inside the function (100),
as we see when we try y again.
So y within the function *reaches* back into the global scope and retreaves var y = 99 from the global scope. This can not work in reverse. The global
scope cannot reach forward into the local scope of a function.
```
y
99

doMoreMath()
100

y
100
```


If we wish to create a *new* variable within a function and not have it reach back into that global scope, as we just saw, we can do the following:
```
var y = 99

function doMoreMath() {
    var y = 100;
    console.log(y);
}
```
Adding *var* to the variable var y = 100 in the local scope, sets it as a new variable.

So when we call doMoreMath():
```
doMoreMath()
100
```
our value is shown as 100.

and then if after calling doMoreMath(), we check y again:
```
y
99
```
we can see that y is still 99. We can see that var y = 100, as declared within the function doMoreMath(), created a new variable simply by placing *var* before y = 100.
This variable exists only in the scope of doMoreMath().