---
layout: post
title: "The Web Developer Bootcamp - Lesson 159: Array Iteration 2 - forEach"
categories: misc
---

As stated in the last section, a nicer way to iterate through an array is to us forEach. The syntax is shorter and it's simpler. 

**forEach** is a method that's defined on every single array. It's part of something called the array prototype, which is where all of the methods, like "shift", "pop", and "pull" live. 
It takes a function as an argument:
```
arr.forEach(someFunction)
```
`arr` - whatever the name of the array is.

`forEach` - make sure to use camel-case.

`someFunction` - pass in a function.
<br>

So an example of the function to be passed in would look like this:
```
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color) {
    console.log(color);
});
```
NOTE: in the above, 'color' is a placeholder - you can call it whatever you want. The function above is just an anonymous function.

So whatever you pass into the function `colors.forEach();` will be called on each element.

---
Typically we'll want to use the data in the array somehow, whether it's saving something to a database, adding something to a score, etc.
We want to manipulate the data that's passed intoa function in some way, rather than just arbitrarily `console.log`-ing as we did above.

So the way that we get that data is by having our function, whether it's an anonymous function (like in the previous example), or a named function, accept an argument.

Here is an example:
```
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(funciton(iLoveDogs){
    console.log("INSIDE THE FOREACH " + iLoveDogs);
});
```
The argument we pass into the function can be called anything we want (it's just a placeholder) - here we've called it iLoveDogs.

iLoveDogs (the argument), is holding the value of each item in that array as the `forEach()` loops through.

It will print the following:
```
INSIDE THE FOREACH red
INSIDE THE FOREACH orange
INSIDE THE FOREACH yellow
INSIDE THE FOREACH green
```
So, `colors.forEach()` is calling the following function for each item in the array:
```
(funciton(iLoveDogs){
    console.log("INSIDE THE FOREACH " + iLoveDogs);
});
```
Not only is it calling the function for each item in the array, but it is passing in each color into the function.
