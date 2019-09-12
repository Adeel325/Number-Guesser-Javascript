// Game values
let min = 1,
    max = 10,
    winningNumber = getRandomNumber(min, max);
    guessesLeft = 3;
// UI Elements

const gameWrapper = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-btn'),
    message = document.querySelector('.message');

// Set min and max length
minNum.textContent = min;
maxNum.textContent = max;

//Event Listner for Play Game
gameWrapper.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-agin'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    
    guess = parseInt(guessInput.value);
    
    // Validation
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter numbers between ${min} and ${max}`, 'red');
    }
    else{
        // Check if won
        if(guess === winningNumber){
            //game over
            //won
            gameOver(true, `${guess} is correct, YOU WIN!`);
        }else{
            //lost
            guessesLeft -= 1;
            if(guessesLeft === 0){
                //gameover
                //lost
                gameOver(false, `Game over, you lost. The correct number was ${winningNumber}`);
            }else{
                //lost 
                //answer wrong
                guessInput.value = '';
                guessInput.borderColor = 'red';
                setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
            }
        }
    }
    
});

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
//game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green': color = 'red';
    console.log(color);
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    //set guess button value to play again
    guessBtn.value = 'PLAY AGAIN';
    guessBtn.className += 'play-agin';
}
//get random number
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}