---
layout: post
title: "The Web Developer Bootcamp - Lessons 138 - 140: For Loops"
categories: misc
---

Went through some *for loop* problems. 

With a for loop we have the basic structure:
```
for (init; condition; step) {
    //run some code;
}
```

The following are examples of some simple exercises:

**Print numbers from 0 to 5 with a for loop:**
```
for (var count = 0; count < 6; count++); {
    console.log (count);
}
```
*For loops* are much like *while loops*, but they're shorter and the variable exists *inside* the loop. See the following for contrast:
```
*print numbers from 0 to 5 with a while loop:*
```
var count = 1;

while (count < 6) {
    console.log ("count is: " + count);
    count ++;
}
```

*Or take for example, a string:*

**Printing each character in a string with a for loop:**
```
var str = "hello";

for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
```

*versus with a while loop:*
```
var str = "hello";
var count = 0;

while (count < str.length) {
    console.log (str[count]);
    count++;
}
```

*Note the variable i. You'll see this a lot as standard practice when a short variable is needed that doesn't have any other purpose than to live inside the loop.*