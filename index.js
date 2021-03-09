window.onload = function() {

    let randomSymbol = Math.floor(Math.random() * 4 + 1);
    let randomNumber = Math.floor(Math.random() * 13 + 1);

    let topSymbolPointer = document.querySelector("#topSymbol");
    let numberPointer = document.querySelector("#number");
    let bottomSymbolPointer = document.querySelector("#bottomSymbol");

    topSymbolPointer.innerHTML = randomSymbol;
    if(randomNumber === 11){
        numberPointer.innerHTML = "J";
    }else if(randomNumber === 12){
        numberPointer.innerHTML = "Q";
    }else if(randomNumber === 13){
        numberPointer.innerHTML = "J";
    }else if (randomNumber === 1){
        numberPointer.innerHTML = "A";
    }else{
        numberPointer.innerHTML = randomNumber;
    }
    bottomSymbolPointer.innerHTML = randomSymbol;

    switch(randomSymbol){
        case 1: {
            topSymbolPointer.innerHTML = '♦';
            topSymbolPointer.style.color= "red";
            bottomSymbolPointer.innerHTML = '♦';
            bottomSymbolPointer.style.color= "red";
            numberPointer.style.color= "red";
            break;
        }
        case 2: {
            topSymbolPointer.innerHTML = '♥';
            topSymbolPointer.style.color= "red";
            bottomSymbolPointer.innerHTML = '♥';
            bottomSymbolPointer.style.color= "red";
            numberPointer.style.color= "red";
            break;
        }
        case 3: {
            topSymbolPointer.innerHTML = '♠';
            bottomSymbolPointer.innerHTML = '♠';
            break;
        }
        case 4: {
            topSymbolPointer.innerHTML = '♣';
            bottomSymbolPointer.innerHTML = '♣';
            break;
        }
    }
};