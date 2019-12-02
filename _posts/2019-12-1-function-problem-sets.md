---
layout: post
title: "The Web Developer Bootcamp - Lesson 149: Function problem sets"
categories: misc
---

### Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise:

```
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}
```

Another, shorter way to do write this same function:
```
function isEven(num) {
    return num % 2 === 0;
}
```
This code will return the boolean value true or false.


### Write a function factorial() which takes a single numeric argument and returns the factorial of that number.

```
function factorial(num) {
    var result = 1;
    for(var i = 1' i <= num; i++) {
        result = result * i;
    }
}
```

Can also be shortened up a bit to:
```
function factorial(num) {
    var result = 1;
    for(var i = 2' i <= num; i++) {
        result *= i;
    }
}
```
here, 2 replaces 1 as the variable because the first pass throught the loop produces 1 * 1, which is unnecessary. Also, the last *result* line is shortened.

One aspect that really tripped me up on this example problem, was that I didn't understand why
var i = 1 in the for loop didn't reset the variable i back to 1. It turns out that I had forgotten that the first argument in the for loop is to *initialize* or *init*.
This simply sets up your for loop with a variable and only runs once. When the result cycles back, the init value does not come into play again. That only happens once, at the beggining of running the for loop.
