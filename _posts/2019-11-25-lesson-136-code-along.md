---
layout: post
title: "The Web Developer Bootcamp - Lesson 136: Code Along - while, if, else, .indexOf"
categories: misc
---

Created a prompt in the browser which asks if we are there yet. First used if and else statements to complete the task based on the input. 
```
var answer = prompt("are we there yet?");

if (answer === "yes") {
    alert("YAY, We made it!")
} else {
    var answer = prompt("are we there yet?");
}
```

Then used a while loop to achieve the same goal:
```
var answer = prompt("are we there yet?");

while (answer !== "yes" && answer !== "yeah") {
    var answer = prompt("are we there yet?");
}

alert("Yay, we made it!");
```

Then we created a second version after these, which checks to see if "yes" is *anywhere* in the input. This is done with .indexOf. 
To simplify, if we want to check where a letter is located within a string, we can use .indexOf:
```
var str = "hello world"
str.indexOf("w");
6
```
Here, we start counting from zero and end up where "w" occurs, at 6.

Now, we can also find where the beginning of the full word "world" occurs by the same method:
```
var str = "hello world"
str.indexOf("world");
6
```
If you try using this method on a word that doesn't exit:
```
var str = "hello world"
str.indexOf("yes");
-1
```
We get -1, which is like saying that the word isn't contained within the variable. 
We can use this to our advantage.

So to test if "yes" is anywhere within the variable, we can do the following:
```
var answer = prompt("are we there yet?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet?");
}

alert("Yay, we made it!");
```
So when we assert that: while(answer.indexOf("yes") === -1), we are saying that "yes" *does not exist* anywhere within our answer. *Does not exist* is represented by -1.

Remember that in this last example,  the while loop will keep "looping" as long as the answer does not contain "yes". Otherwise, if "yes" added to the input, we will break the loop, into our alert("Yay, we made it!");