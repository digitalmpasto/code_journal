---
layout: post
title: "The Web Developer Bootcamp - Lesson 109: Museum of Candy Project"
categories: misc
---

Added a fluid container to the section class: <section class-"container-fluid"></section>. You can use a grid system inside of the container, with a row and columns but With a fluid container, the contents will go all the way across the surface.

We also added image fluid here: <img class="img-fluid" scr="imgs/hand2.png alt=....>. In the BS4 documentation, under "Responsive Images": "Images in BS are made responsive with .img-fluid" - they're given the following attributes: "'max-width: 100%;', and 'height: auto;' are applied to the image aso that it scales with the parent element." This makes it easier to work with images in the grid system.

At 6:30, learned how to hide a block of text except at a certain size. Example: <div class="text-white text-center d-none d-lg-block"> The display here is 'none' for all sizes, except display block at large and up.

At 10:30, learned about media queries, which allow us to selectively apply styles based on different screen sizes. example: @media (max-width: 1200px) {#headingGroup h1 {font-weight: 100; font-size: 3rem;}}. So if, say, your text is becoming too crowded with some other element on the surface, you can adjust it at a certain pixel size.