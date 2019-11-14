---
layout: post
title: "The Web Developer Bootcamp - Lessons 125 - 128: JS Basics - Control Flow"
categories: misc
---

## Boolean Logic

Went over different operators. Most importantly, equal to (==), not equal to (!=), equal value and type (===), and not equal value or type (!==). It's important to remember that == performs type coercion, for example:

        ```
        var x = 99;
        x == "99"  //true  (here, JS tries to get the string and number to be the same format, then compares the value)
        x === "99"  //false  (here, JS checks to see if they share equality as a number, which is false because one is a string and one is a number. Their type doesn't match, automatically making it false)
        ```

As a rule use === , as it is much safer and much more specific.


### A Few Interesting Cases with "Double Equals" (==)

true == "1"  //true  (any string number except "1" doesn't equal 'true')
0 == false  //true
null == undefined  //true
Nan == NaN  //false  (NaN [Not a Number] - So Not a Number is not comparable to Not a Number. "One of the weirdest quirks of Javascript)