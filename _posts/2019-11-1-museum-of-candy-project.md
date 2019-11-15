---
layout: post
title: "The Web Developer Bootcamp - Lessons 106 and 107: Museum of Candy Project"
categories: misc
---

Began creating a page for this lesson's project. Learned a few things about creating a nav bar. One is that if you're working with a light colored background, it's a good idea to give your navbar a background of dark (bg-dark), so that you can see what you're doing. Also, don't forget that the navbar-dark setting produces light text FOR a dark background. It doesn't make your navbar dark. 

It's also a good idea to give your nav bar an id, for the purpose of identification, in case you have another nav bar - say at the footer or as a sidebar. 

Then I learned about creating a navbar toggler button.  'toggler' is a new name in BS4, changed from BS3.
It's a good idea in your button tag, to include some text for a screen reader, so that it's known what the button is for. In this case, we labeled it 'aria-label = "Toggle-navigation'.

Lastly, learned how use the pseudo-selector, hover. Here we used it in our CSS: #mainNavbar .nav-Link:hover {color: red;} . This will turn the text in the nav bar red when we hover over it with our cursor. 

Oh and learned how to fix a nav bar to the top of the screen, when scrolling. Within <nav>: 'fixed-top'.
