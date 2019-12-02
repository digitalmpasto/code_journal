---
layout: post
title: "The Web Developer Bootcamp - Lesson 146: The Return Keyword."
categories: misc
---

It may be helpful to think of a function as being like a machine.
```
Input --> Function --> Output
```
The input is the argument.
The function does something with the input: math, checks user log in, adds to a score, etc.
The output returns it.


*console.log* prints to the console and is not considered an output. *You don't actually have something that is being returned.*
So it can't be used in any other part of your code.

If you use the *return* keyword, it means you are capturing the value that is coming back out of the function.
```
function square(x) {
    return x * x;
}
```

The return keyword is going to output a value from a function.
Here, we call the function:
```
>  square(4)
<- 16
```
The <- arrow indicated it was returned.

Another aspect of a return value is that it stops the execution of a function. So as soon as we return something, we're done.
