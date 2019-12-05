---
layout: post
title: "The Web Developer Bootcamp - Lesson 156: Arrays Exercises"
categories: misc
---

Exercise with a nested array - aka a "2 dimensional array".
```
var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];

console.log(friendGroups[2][0]);
```
The result is:
```
"Mooney"
```
This is because in console.log(friendGroups[2][0]);, the first bracketed item [2], indicates the third nested array 
(first nested array) starts at [0]. The Second bracketed item [0], indicates the first item within the third nested array.
These two bracketed items, in sequence: [2][0], point us to "Mooney".



