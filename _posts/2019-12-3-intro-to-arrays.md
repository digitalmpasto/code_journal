---
layout: post
title: "The Web Developer Bootcamp - Lesson 154: Intro to Arrays"
categories: misc
---

An array is a data structure. A way of holding information in JS.
Some examples of arrays are when people comment on a post in FB - the comments are stored together using an array, or photos that are correspond to a particular user.

Arrays are indexed starting at 0.
We can use the indices of an array to retrieve data.
```
var friends = ["Charlie", "Laura", "Tony", "Adam"];
 
console.log(friends[0]); //"Charlie"
```

We can also update arrays:
```
var friends = ["Charlie", "Laura", "Tony", "Adam"];

friends[2] = "Anthony";
```
Updates as:
```
var friends = ["Charlie", "Laura", "Anthony", "Adam"];
```
We can also add new data:
```
var friends = ["Charlie", "Laura", "Anthony", "Adam"];
friend[4] = "Dan";
```
Updates as:
```
var friends = ["Charlie", "Laura", "Anthony", "Adam", "Dan"];
```
We can initialize an empty array in two ways:
```
var friends = [];
var friends = new Array()  \\not a typo - Array is capitalized. This method is uncommon.
```
Arrays can hold any type of data:
```
var random_collection = [49, true, "Skeletor", null];
```
Arrays have a length property (just like strings):
```
var nums = [45, 37, 90, 56];
nums.length  //4
```