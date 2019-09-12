// Game values
let min = 1,
    max = 10,
    winningNumber = 2;
    guessesLeft = 2;
// UI Elements

const game = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

// Set min and max length
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    
    guess = parseInt(guessInput.value);
    
    // Validation
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter numbers between ${min} and ${max}`, 'red');
    }
    // Check if won
    if(guess === winningNumber){
        //disable input
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${guess} is correct, YOU WIN!`, 'green');
    }else{
        
    }
});

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}