// 1. Create a blank array: Start by setting up an empty array named myWork that will hold
// objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1",
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// status: false, and so on.

// 3. Add the lesson to the array: Push each lesson object into the myWork array.
// 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.


// let myWork :  {name : string; status : boolean} [] = [];

// for(let i = 1; i <= 10; i++){
//     let lesson = {
//         name : `lesson ${i}`,
//         status : i % 2 === 1 
//     };
//     myWork.push(lesson);
// }
// console.log(myWork);

// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.


// let maximValue : number = 10;

// let randomNumber : number = (Math.floor(Math.random() * maximValue + 1));
// console.log(randomNumber);

// let correctGuess: boolean = false;

// let guessNumber : number [] = [2,3,5,7,8,9,10,1];

        
        
    
// let n = 0;
// while (!correctGuess && n < guessNumber.length ) {
//     let currentGuess = guessNumber[n];
//     if( currentGuess === randomNumber){
//         correctGuess = true;
//         console.log(`Congrats! You've guessed the correct number.`);
//     }else if(currentGuess < randomNumber){
//         console.log(`Your guess ${currentGuess} is too low... Try Again` );
//     }
//     else (currentGuess > randomNumber){
//         console.log(`Your guess ${currentGuess} is too high... Try Again` );

//     };
//     n++;
    
// };

// console.log(`The random number was ${randomNumber}`);

// 3. Counter Incrementer (Using do while loop )
// Objective: Create a program that increments a counter by a specified step value using a
// do...while loop and prints the counter value to the console until it reaches or exceeds 100.
// Steps to Follow:
// 1. Set the starting counter to 0: Create a variable counter and initialize it to 0.
// 2. Create a variable, step, to increase your counter by: Define a variable step to hold
// the value by which the counter will be incremented.
// 3. Add a do...while loop: In the loop, print the counter to the console and increment it by
// the step amount each iteration.
// 4. Continue to loop until the counter is equal to or more than 100: The loop should run
// as long as the counter is less than 100.

let counterNumber = 0;

let step = 5;

do{
    console.log(`counter value ${counterNumber}`);
    counterNumber += step;
} while (counterNumber <= 100);
console.log("counternumber has finished");