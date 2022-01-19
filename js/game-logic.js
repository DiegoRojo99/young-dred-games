// All code should be written in this file.
const playerOneMoveOneType;
const playerOneMoveTwoType;
const playerOneMoveThreeType;

const playerTwoMoveOneType;
const playerTwoMoveTwoType;
const playerTwoMoveThreeType;

const playerOneMoveOneValue;
const playerOneMoveTwoValue;
const playerOneMoveThreeValue;

const playerTwoMoveOneValue;
const playerTwoMoveTwoValue;
const playerTwoMoveThreeValue;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue){
    
    if(player==='Player One'){
        playerOneMoveOneType=moveOneType;
        playerOneMoveOneValue=moveOneValue;
        playerOneMoveTwoType=moveTwoType;
        playerOneMoveTwoValue=moveTwoValue;
        playerOneMoveThreeType=moveThreeType;
        playerOneMoveThreeValue=moveThreeValue;
    }else if(player==='Player Two'){
        playerTwoMoveOneType=moveOneType;
        playerTwoMoveOneValue=moveOneValue;
        playerTwoMoveTwoType=moveTwoType;
        playerTwoMoveTwoValue=moveTwoValue;
        playerTwoMoveThreeType=moveThreeType;
        playerTwoMoveThreeValue=moveThreeValue;
    }
    
}

function getRoundWinner(roundNumber){
    if(roundNumber===1){
        if(playerOneMoveOneType===playerTwoMoveOneType){
            if(playerOneMoveOneValue===playerTwoMoveOneValue){
                return 'Tie';
            }else if(playerOneMoveOneValue>playerTwoMoveOneValue){
                return 'Player One';
            }else if(playerOneMoveOneValue<playerTwoMoveOneValue){
                return 'Player Two';
            }
        }else{
            if(playerOneMoveOneType==='Rock'){
                if(playerTwoMoveOneType==='Scissors'){
                    return 'Player One';
                }else if(playerTwoMoveOneType==='Paper'){
                    return 'Player Two';
                }
            }
        }
    }else if(roundNumber===2){
        if(playerOneMoveTwoType===playerTwoMoveTwoType){
            if(playerOneMoveTwoValue===playerTwoMoveTwoValue){
                return 'Tie';
            }else if(playerOneMoveTwoValue>playerTwoMoveTwoValue){
                return 'Player One';
            }else if(playerOneMoveTwoValue<playerTwoMoveTwoValue){
                return 'Player Two';
            }
        }else{
            if(playerOneMoveTwoType==='Rock'){
                if(playerTwoMoveTwoType==='Scissors'){
                    return 'Player One';
                }else if(playerTwoMoveTwoType==='Paper'){
                    return 'Player Two';
                }
            }
        }        
    }else if(roundNumber===3){
        if(playerOneMoveThreeType===playerTwoMoveThreeType){
            if(playerOneMoveThreeValue===playerTwoMoveThreeValue){
                return 'Tie';
            }else if(playerOneMoveThreeValue>playerTwoMoveThreeValue){
                return 'Player One';
            }else if(playerOneMoveThreeValue<playerTwoMoveThreeValue){
                return 'Player Two';
            }
        }else{
            if(playerOneMoveThreeType==='Rock'){
                if(playerTwoMoveThreeType==='Scissors'){
                    return 'Player One';
                }else if(playerTwoMoveThreeType==='Paper'){
                    return 'Player Two';
                }
            }
        }
    }
}

function getGameWinner(){
    const winner1=getRoundWinner(1);
    const winner2=getRoundWinner(2);
    const winner3=getRoundWinner(3);
    let player1=0;let player2=0;

    if(winner1==='Player One'){
        player1++;
    }else if(winner1==='Player Two'){
        player2++;
    }

    if(winner2==='Player One'){
        player1++;
    }else if(winner2==='Player Two'){
        player2++;
    }

    if(winner3==='Player One'){
        player1++;
    }else if(winner3==='Player Two'){
        player2++;
    }

    if(player1>player2){
        return 'Player One';
    }else if(player1<player2){
        return 'Player Two';
    }else{
        return 'Tie';
    }
}

function setComputerMoves(){
    let totalPoints=99;
    Math.floor(Math.random() * 99)+1;
}
