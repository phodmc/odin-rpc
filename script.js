console.log('Hello world');

// todo - write computer choice logic
function getComputerChoice(){
    // generate random number
    let random = Math.floor(Math.random() * 3) + 1
 
    // return 'rock', 'paper', or 'scissors based on random
    switch (random) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        default:
            return 'scissors';
    }
}