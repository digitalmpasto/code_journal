//forEach exercise
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(color){
    if(color % 3 ===0) {
        console.log(color);
    }
});


//written as a for loop
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < numbers.length; i++) {
    if(i % 3 === 0) {
        console.log(i)
    }
}