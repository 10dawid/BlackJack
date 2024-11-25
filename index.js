let messageEL = document.querySelector("#message-el")
let sumEL = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")
let firstCard
let secondCard
let hasBlackJack = false
let isAlive = true
let hasStarted = false
let message = ""
let sum



function startGame(){
    hasStarted = true
    firstCard = 10
    secondCard = 11
    cardsEL.textContent = "Cards: " + firstCard + " : " + secondCard
    
    sum = firstCard + secondCard
    if (sum < 21){
        message= "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "Congrats!! You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "you are out of the game!"
        isAlive = false
    }
    messageEL.textContent = message
    sumEL.textContent = "Sum: " + sum
}
function newCard(){
    if (hasStarted){
        let nextCard = 10
        sum += nextCard
        sumEL.textContent = "Sum: " + sum
        cardsEL.textContent += " : " + nextCard
    }
}
console.log(newCard())
