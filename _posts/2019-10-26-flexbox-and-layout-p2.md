---
layout: post
title: "The Web Developer Bootcamp - Lesson 100 - Flexbox and Layout 2"
categories: misc
---

This is the second lesson on Flexbox utilities. More of the same here - just some practice on pushing around elements within a flexbox. It makes it all very easy. You have to use it logically though. For example, you can do <...flex-row-reverse...> and then justify and align your content, but you have to keep in mind the fact that you initially reversed everything. This will impact your justify and align lines. So if, for example, you type <class"...flex-row-reverse justify-content-start align-items-end...">, your 'start' point is going to be on the right, since you reversed it. Also, the elements are going to be in reverse order. It's going to push everything to the bottom right of the box.

Also, when you add the utility <...flex-column...>, we're switching our main axis from left-to-right to top-to-bottom, creating a column of our elements.

Lastly, this lesson closed with making flexboxes responsive to surface change. It's important to remember here that if you want something to happen after xs in size., you have to override it, since xs is never specified in BS4, unlike BS3. So as an example, in <div class="...d-flex flex-column flex-md-row...">, flex-column is stating that at xs on-up, there will always be a column, unless specified, which is what flex-md-row is doing. So after md size, the flexbox will turn from a column to a row.