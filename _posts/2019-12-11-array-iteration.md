---
layout: post
title: "The Web Developer Bootcamp - Lesson 159: Array Iteration 1"
categories: misc
---

Array iteration refers to doing something to each item in an array.
An example would be comment on social media. In Reddit, comments are stored in an array.
So to display that content, each item is given some html content - like an <li> or a <p> is made for them.
To do so in such an instance, we would generate the html in a loop when we iterate over an array.
<br>
The most common thing you'll do with arrays is doing something to every item within the list of data. Otherwise,
if you only want to work with only the first item or the seventh item, for instance, then maybe an array shouldn't be used 
and the item should be stored on its own.
<br>
For this array:
```
var colors = ["red", "orange", "yellow", "green"];
```
If you wanted to print out each item, *without* a loop, you'd have to do this:
```
> console.log(colors[0])
  red

> console.log(colors[1])
  orange

etc.
```
So instead, we use a loop to help automate this process, since the same operation is being performed over and over
with only the number changing:
```
for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```
Another way to iterate through an array is by using **forEach**. It's nicer to use, simpler, shorter, and more common today. 
forEach came out in 2009, so it's pretty new.

