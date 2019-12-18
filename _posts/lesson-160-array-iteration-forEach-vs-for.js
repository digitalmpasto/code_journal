//ARRAY ITERATION EXERCISE

//written using forEach
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (number) {
    if (number % 3 === 0) {
        console.log(number);
    }
});


//same, but written as a for loop
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 3; i < numbers.length; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}