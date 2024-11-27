let messageEL = document.querySelector("#message-el")
let sumEL = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0
function startGame(){
    if(!isAlive){
        isAlive = true
        clearDeck(cards)
        sum = 0
        cards.push(randomCard())
        cards.push(randomCard())
        sum += (cards[0] + cards[1])
        rendergGame()
    }
}
function rendergGame(){

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
    renderCards()

}

 function newCard(){
    if (isAlive && !hasBlackJack){
        let card = randomCard()
        sum += card
        cards.push(card)
        rendergGame()
    }
}
function randomCard(){
    let value =  Math.floor(Math.random() * 14) + 2
    if (value > 11) return 10
    else return value
}
function renderCards(){
    let text = "Cards: "
    for(let i = 0; i < cards.length; i++){
        text += cards[i]
        text += " "
    }
    cardsEL.textContent = text
}
function clearDeck(array){
    while (array.length > 0){
        array.pop()
    }
}