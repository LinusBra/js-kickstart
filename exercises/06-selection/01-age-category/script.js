

const prompt = require('prompt-sync')();

const age = Number(prompt("Enter your age: "));
if (age<= 12) {
    console.log("You are a child.")
} else if (age <= 19) {
    console.log("You are a teenager.");
} else if (age <= 64) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}
