

let diceRoll = [1, 6, 6, 2, 3, 4, 6];





function get6s_v2(Dice, compare,is6) {

    return compare(Dice,is6)

    

}

//compares to variables
function compare(Dice, is6) {
    for(i = 0; i<Dice.length; i++){
        if (is6(Dice[i])) {
            console.log(i, Dice[i]);
        }
    }
    
}

//checks if value is 6
function is6(v) {
    return v === 6;
}

get6s_v2(diceRoll,compare, is6);


