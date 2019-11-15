---
layout: post
title: "The Web Developer Bootcamp - Lessons 126 - 128: JS Basics - Control Flow-2"
categories: misc
---

## Logical Operators

Went over operators AND (&&), OR (\|\|), and NOT (!), and the results they produce. There were a couple of exercises that tripped me up a little bit, but I think I have a pretty good understanding of them nonetheless. It's just easy to make a mistake.

Then learned about "truthy" and "falsey" values - values that aren't actually true or false, but are still "truthy" or "falsey" when evaluated in a boolean context. Every value in JS has an inherent "truthiness" or "falsiness" given to it by JS.
You can find out the boolean assigned to "hello", for example', by negating it: !"hello". So if you do this in the console and get 'false' back, then the string "hello" is 'truthy' (which it is). If you want to make it easier and get the direct answer back, then double negate it: !!'hello".
Here is a list of all the falsey value:
  - false
  - 0
  - "" (no space in between)
  - null
  - undefined
  - NaN (Not a Number)

Everything else is 'truthy'.

## Conditionals

This lesson goes over how to add logic to your programming by utilizing *If*, *Else If*, and *If* statements.

You've been over this with Python, but here is an example of some JS code as a refresher:

        ```
        if (age < 18) {
            console.log ("Sorry, you're not old enough to enter");
        }

        else if (age < 21) {
            console.log ("You can enter, but cannot drink");
        }

        else {
            console.log ("Come on in. You can drink.");
        }
        ```