function findMax(numbers) {
    
    let max = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(findMax([3, 7, 2, 9, 1]));     
console.log(findMax([15, 8, 23, 4, 16])); 
console.log(findMax([5]));                
console.log(findMax([-2, -8, -1, -5])); 
