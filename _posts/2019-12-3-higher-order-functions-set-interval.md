---
layout: post
title: "The Web Developer Bootcamp - Lesson 153: Higher Order Functions"
categories: misc
---

*Higher order functions* either take a function as an argument, or they return another function.

An example of a higher order function would be a set interval.
*Set interval* takes a function and calls that function at a specific interval we provide.
It's a way to have something repeat every second, half-second, etc., in a timed fashion, unlike a loop which repeats immediately.

Example:
```
function sing() {
    console.log("twinkle twinkle...");
    console.log("how I wonder...");
}

setInterval(sing, 1000);
```
Here the higher order function setInterval is passing our created function *sing* into itself.
The reason we *don't* include the parenthesis *()* after *sing* (sing()) is because setInterval() is calling *sing*, not us.
We don't want to execute it - we want setInterval() to execute it.

Also, the argument '1000' has an implied value of milliseconds. So 1000 = 1 second, 500 = 0.5 seconds, etc.
So every second, the contents of the function sing() will be printed.


To stop setInterval from running continuously in the browser, we use the number returned by the browser after we initially ran setInterval:
 ```
  > setInterval(sing,1000);
 <- 2
 ```
 as such:
 ```
  > clearInterval(2);
 ```
 _______________________

Sometimes we want to run some code using setInterval, but we don't want to define a separate function ahead of time.
Here, we can write in an anonymous function:
```
setInterval(function() {
    console.log("I am an anonymous funciton");
    console.log("This is awesome!");
}, 2000);
```
So we're defining our function in-line. This is simply a way to pass some code into setInterval().
We can't call it outside of setInterval().
Also, the anonymous function needs parenthesis this time, since it has not been defined elsewhere.

We use these anonymous functions when we're passing in a function to another function.

