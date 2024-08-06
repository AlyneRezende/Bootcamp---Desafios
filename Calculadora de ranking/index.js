let result = ranker(60 , 10)
let result2 = level(result)

function ranker(numOfWin = 1, numOfLose = 1){
    let balance = numOfWin - numOfLose
    return balance
}

function level(result){
    if (result <= 10){
        let classification = "Ferro"
        return classification
    } else if(result >= 11 && result <= 20){
        classification = "Bronze"
        return classification
    } else if(result >= 21 && result <= 50){
        classification = "Prata"
        return classification
    } else if(result >= 51 && result <= 80){
        classification = "Ouro"
        return classification
    } else if(result >= 81 && result <= 90){
        classification = "Diamante"
        return classification
    } else if(result >= 91 && result <= 100){
        classification = "Lendário"
        return classification
    } else{
        classification = "Imortal"
        return classification
    }
}

console.log(`The hero has a balance of ${result} and is at the level of ${result2}`)