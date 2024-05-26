const form = document.querySelector('form');
const userNumber = document.querySelector("#guessField");
// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
const guessRange = document.querySelector('.lowOrHi')

let guesses = []
let lastResult = 10;

const randomNumber = Math.floor(Math.random() * 100+1) ;
console.log(randomNumber);

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    if(lastResult > 0){
        if(userNumber.value == randomNumber){
            window.alert("You Win")
        }
        else if(userNumber.value < randomNumber){
            guessRange.innerHTML = "Guess is Low";
            guesses.push(userNumber.value)
            lastResult -= 1;
        }
        else if(userNumber.value > randomNumber){
            guessRange.innerHTML = "Guess is High";
            guesses.push(userNumber.value)
            lastResult -= 1;
    }
    else{
        window.alert("Sorry you are out of guesses.")
    }

    document.querySelector('.guesses').innerHTML = guesses;
    document.querySelector('.lastResult').innerHTML = lastResult;}
    

    
    
})