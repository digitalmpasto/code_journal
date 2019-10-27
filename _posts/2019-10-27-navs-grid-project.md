---
layout: post
title: "The Web Developer Bootcamp - Lesson 101, 102, and 103: Navs and Flexbox, BS4 Grid, and Pattern Project, respectively"
categories: misc
---

Lesson 101 starts with some important information, letting us know that BS4 navs are built with Flexbox, behind the scenes. This means we can move the elements around using the Flexbox utilities we've learned from the previous lessons. In BS3, we had to use lists and anchor tags inside of a .nav class (.nav > li > a). Now, in BS4, instead of enforcing this structure, you have to use additional classes (.nav, .nav-item, .nav-link). This makes the HTML more flexible, while bringing along increased extensibility.
Also, navs are now built with Flexbox (in documentation as "rewrote components with flexbox"). This me3ans that they automatically have 'display' set to 'flex', so 'd-flex' doesn't have to be specified. It's a default for navs. This isn't for everything however. For example a <div> will still need to specifiy this.

Lesson 102 is some info to changes on what's probably the most commonly used feature in all of BS, the grid. The size label xs in BS3 had a dimension of <768 px, whereas in BS4, size xs is now <576px. Keep in mind, there is no xs to explicitly define anymore in BS4, it's the default. So when you're trying to make elements dynamic by say, resizing a surface, you have to override that default by specifying the size where it will make the change, and the change.

Lesson 103. Here I got started with the Pattern Project. It's an introduction to "the card", which in BS4, takes the role of 'panels', 'thumbnails', and 'wells' from BS3.
Another important thing I learned in this section was using <section>. Here, Colt used <section> instead of a <div> to define his jumbotron, because it is really a "section" of content and it's good to label yours sections. He also used an id="header" for it, even though he was not intending to use it as an id in CSS. Again, for labeling purposes. He did give it a class="jumbotron".
End result looked like this <section id="header" class="jumbotron" text-center">
