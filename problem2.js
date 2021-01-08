//Find Sum of all the multiples of 3 or 5 below 1000
//Ex) Below 10 would get 3,5,6 and 9.  That adds up to 23.

function sumOfMultiples(num) {
    let sum = 0;
    for(let i = 0; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
sumOfMultiples(1000)