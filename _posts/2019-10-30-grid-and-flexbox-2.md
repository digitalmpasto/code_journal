---
layout: post
title: "The Web Developer Bootcamp - Lesson 105: The Grid & Flexbox, continued"
categories: misc
---

Placed three elements of content in a row using 'justify-content-around'. The box in the middle has more content than the boxes on either side of it, causing the other boxes to stretch out further than they need to, leaving negative space at the bottom. The default of the align-items value is 'stretch', so this is why this happens. 
This stretching can be corrected. Here, we tried align-items-start after "row" in our parent <div>, changing out default of 'stretch', to 'start'. This removed all of the negative space from the two boxes, leaving the middle box as it was, with all of its content (You can also use options align-items-end, or align-items-center to move content aorund).

So, between justify-content-___________ , and align-items-______________ , we have a lot of control with Flexbox.