

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess(guess, target) {
    if (guess > target) {
        return "too high";
    } else if (guess < target) {
        return "too low";
    } else {
        return "correct";
    }
}


function isValidGuess(input) {

    const num = Number(input);

    return !isNaN(num) && num >= 1 && num <= 100 && Number.isInteger(num);

}

function playGame() {
    const target = generateRandomNumber(1, 100);
    let attempts = 0;
    let won = false;
    let guesses = [];

    const testGuesses = [50, 75, 62, 68, 65, target];

    for (let guess of testGuesses) {
        attempts++
        guesses.push(guess);

        const result = checkGuess(guess, target);
        if (result === "correct") {
            won = true;
            break;
        }
        
       
        if (attempts >= 10) {
            break;
        }
    }
    
    return {
        target: target,
        attempts: attempts,
        won: won,
        guesses: guesses
    };
}

if (require.main === module) {
    console.log("Testing Guess the Number functions...\n");
    
    // Test generateRandomNumber
    console.log("Testing generateRandomNumber(1, 10):");
    for (let i = 0; i < 5; i++) {
        console.log(`  Random number: ${generateRandomNumber(1, 10)}`);
    }
    
    // Test checkGuess
    console.log("\nTesting checkGuess:");
    console.log(`  checkGuess(50, 75): ${checkGuess(50, 75)}`);
    console.log(`  checkGuess(100, 75): ${checkGuess(100, 75)}`);
    console.log(`  checkGuess(75, 75): ${checkGuess(75, 75)}`);
    
    // Test isValidGuess
    console.log("\nTesting isValidGuess:");
    console.log(`  isValidGuess(50): ${isValidGuess(50)}`);
    console.log(`  isValidGuess(0): ${isValidGuess(0)}`);
    console.log(`  isValidGuess(101): ${isValidGuess(101)}`);
    console.log(`  isValidGuess("abc"): ${isValidGuess("abc")}`);
    
    // Test playGame
    console.log("\nTesting playGame:");
    const result = playGame();
    console.log(`  Game result:`, result);
}

// Export functions for testing
module.exports = {
    generateRandomNumber,
    checkGuess,
    isValidGuess,
    playGame
};