---
layout: post
title: "The Web Developer Bootcamp - Lesson 105: The Grid & Flexbox"
categories: misc
---

Two really important things talked about in this lesson: 'justify-content', and 'align-items'. At 2:00 mins into the lecture, we have a row taking up half the page. We can move the content of that row to the end of the row, or to the center or beginning by using 'justify-content-end', 'justify-content-center', or 'justify-content-start', respectively. This to be added in our <div> after "row". Another way to move items around in a row is to use something like 'col-sm-6', where you're stating that that particular element is to be put in a column, at small, taking up six units (out of default 12), which is half the space.
'Justify-content-between' is another tool you can use - this to evenly space out content within a row. It can take content that is really hard to space in markup in BS - space that doesn't divide easily from 12 - and fix it for you simply. This is one reason why Flexbox works so nicely. 
There's also 'justify-content-around', which will evenly distribute the spacing 'around' the element, rather than just to the left or right.

Remember, you can check if the code you're writing is in fact using Flexbox, by "inspecting' the page in the developer tools. Will show as: display: flex; when you check the CSS.