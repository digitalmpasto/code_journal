---
layout: post
title: "The Web Developer Bootcamp - Lesson 155: Array Methods"
categories: misc
---

### Built-in array methods:
- push/pop
- shift/unshft
- indexOf
- slice
<br>
### Push - adds item to the end an array. 
Helpful when you don't know how many items are in the array and you'd like to add an item to the end of a list.
```
var colors = ["red", "orange", "yellow"];
colors.push("green");
```
### Pop - to remove last item from an array.
```
var colors = ["red", "orange", "yellow"];
colors.pop();  
["red", "orange"]
```
colors.pop(); takes no argument. It simply removes the last item.
<br>
You can also store the removed item in a variable:
```
var colors = ["red", "orange", "yellow"];
var col = colors.pop();  
```
The variable col now contains the item "yellow".
<br>
### Unshift - adds item to the front of an array.
```
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared");
["infrared", "red", "orange", "yellow"]
```
<br>
### Shift - to remove the first item in an array.
```
var colors = ["infrared", "red", "orange", "yellow"];
colors.shift();
["orange", "yellow"]
```
colors.shift(); takes no argument as it simply removed the first item.
<br>
### indexOf - used to find the index of an item in an array.
```
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];
friends.indexOf("David");
2
friends.indexOf("Liz");
4
friends.indexOf("Larry");
-1
```
If there are more than one of the same item in the array, the index of the first instance of the item will be given,
as shown in the second example.
If you are calling on an item that is not present in the array, then -1 will display, as shown in the third example.

### Slice - used to copry parts of an array.
```
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
citrus = ["Orange", "Lemon"]
```
Used slice to copy the second and third fruits by specifying where the new array starts (1) and ends (3).
Slicing does not alter the original items in the array.
<br>
You can also use slice() to copy an entire array.
```
var nums = [1, 2, 3];
var otherNums = nums.slice();
```
Empty parenthesis duplicates an entire array.
Both arrays are now [1, 2, 3].