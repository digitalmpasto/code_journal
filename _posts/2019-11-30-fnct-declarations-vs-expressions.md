---
layout: post
title: "The Web Developer Bootcamp - Lesson 146: Function Declaration vs Function Expression."
categories: misc
---

There are two ways of defining equivalent functions:
1. Function declaration
2. Function Expression

Function declaration:
```
function capitalize(str) {
    return str.charAt(0).toUppercase() + str.slice(1);
}
```

Function expression:
```
var capitalize = function(str) {
    return str.charAt(0).toUppercase() + str.slice(1);
}
```

If there is a function expression rather than a function declaration, then you cannot change the variable you used in the function elsewhere in your code, or else it will be overridden. This means you won't be able to use the function anymore.

