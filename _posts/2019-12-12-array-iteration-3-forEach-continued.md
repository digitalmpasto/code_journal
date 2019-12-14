---
layout: post
title: "The Web Developer Bootcamp - Lesson 159: Array Iteration 3 - forEach continued"
categories: misc
---

Here's another example, but without using `forEach()`, just to demonstrate how to pass in arguments:
```
> function printColor(color) {
    console.log("******");
    console.log(color);
    console.log("******");
}

> printColor("purple");

******
purple
******
```

Now you can use the forEach() to print every color in the array:
```
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(printColor);
```
So with the above code, you will get the following:
```
******
red
******
******
orange
******
******
yellow
******
******
green
******
```
*parethesis do not need to be added to printColor `(ie.printColor())` because colors.forEach is taking our `printColor` function
and is calling it for us. That's what the `forEach()` is doing.*

Behind the scenes `forEach` is doing this:
```
printColor (colors[i])
``
which starts at 0, and looks like this:
```
printColor (colors[0])

\\and then iterates:

printColor (colors[1])
printColor (colors[2])
printColor (colors[3])
```

So `forEach` is nice because we don't have to work with `i` or write out the syntax of a for loop,
and we don't have to access `colors[i]` inside of our code with a for loop, like:
```
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0); i < colors.length; i++) {
    console.log(colors[i]);
}
```

---

## Recap

**for** vs. **forEach** vs. **while**

`for`
```
for(var i = 0); i < colors.length; i++) {
    console.log(colors[i]);
}
```

`forEach`
```
colors.forEach(function(color){
    console.log(color);
});
```

`while` (rare in such a case)
```
var count = 0;

while (count < colors.length) {
    console.log(colors[count]);
    count++;
}
```










