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
arr - whatever the name of the array is.

forEach - make sure to use camel-case.

someFunction - pass in a function.
<br>
So an example of the function to be passed in would look like this:
```
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color) {
    console.log(color);
}
```
NOTE: in the above, 'color' is a placeholder - you can call it whatever you want.

So whatever you passin into the function colors.forEach(); will be called on each element.
