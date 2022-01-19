// All code should be written in this file.
let playerOneMoveOneType=undefined;
let playerOneMoveTwoType=undefined;
let playerOneMoveThreeType=undefined;

let playerTwoMoveOneType=undefined;
let playerTwoMoveTwoType=undefined;
let playerTwoMoveThreeType=undefined;

let playerOneMoveOneValue=undefined;
let playerOneMoveTwoValue=undefined;
let playerOneMoveThreeValue=undefined;

let playerTwoMoveOneValue=undefined;
let playerTwoMoveTwoValue=undefined;
let playerTwoMoveThreeValue=undefined;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType,moveTwoValue, moveThreeType, moveThreeValue) {

if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue ||
!moveThreeType || !moveThreeValue) {
return;
}

if (!isValidMoveType(moveOneType) ||
!isValidMoveType(moveTwoType) ||
!isValidMoveType(moveThreeType)) {
return;
}

if (!isValidMoveValue(moveOneValue) ||
!isValidMoveValue(moveTwoValue) ||
!isValidMoveValue(moveThreeValue)) {
return;
}

if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
return;
}

if (player === 'Player One') {
playerOneMoveOneType = moveOneType;
playerOneMoveOneValue = moveOneValue;
playerOneMoveTwoType = moveTwoType;
playerOneMoveTwoValue = moveTwoValue;
playerOneMoveThreeType = moveThreeType;
playerOneMoveThreeValue = moveThreeValue;
} else if (player === 'Player Two') {
playerTwoMoveOneType = moveOneType;
playerTwoMoveOneValue = moveOneValue;
playerTwoMoveTwoType = moveTwoType;
playerTwoMoveTwoValue = moveTwoValue;
playerTwoMoveThreeType = moveThreeType;
playerTwoMoveThreeValue = moveThreeValue;
}
}

function isValidMoveType(moveType) {
    return (moveType === 'rock') ||
           (moveType === 'paper') ||
           (moveType === 'scissors');
}

function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99);
}

function getRoundWinner(roundNumber) {
    switch(roundNumber) {
      case 1:
        return getMoveWinner(playerOneMoveOneType,
                             playerOneMoveOneValue,
                             playerTwoMoveOneType,
                             playerTwoMoveOneValue);
      case 2:
        return getMoveWinner(playerOneMoveTwoType,
                             playerOneMoveTwoValue,
                             playerTwoMoveTwoType,
                             playerTwoMoveTwoValue);
      case 3:
        return getMoveWinner(playerOneMoveThreeType,
                             playerOneMoveThreeValue,
                             playerTwoMoveThreeType,
                             playerTwoMoveThreeValue);
      default:
        return null;
    }
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType,
    playerTwoMoveValue) {
if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType ||
!playerTwoMoveValue) {
return null;
}

if (playerOneMoveType === playerTwoMoveType) {
if (playerOneMoveValue > playerTwoMoveValue) {
return 'Player One';
} else if (playerOneMoveValue < playerTwoMoveValue) {
return 'Player Two';
} else {
return 'Tie';
}
}
if (playerOneMoveType === 'rock') {
if (playerTwoMoveType === 'scissors') {
return 'Player One';
} else {
return 'Player Two';
}
} else if (playerOneMoveType === 'paper') {
if (playerTwoMoveType === 'rock') {
return 'Player One';
} else {
return 'Player Two';
}
} else {
if (playerTwoMoveType === 'paper') {
return 'Player One';
} else {
return 'Player Two';
}
}
}

function getGameWinner(){
    if(playerTwoMoveOneValue===undefined || playerOneMoveOneValue===undefined || playerTwoMoveTwoValue===undefined || playerOneMoveTwoValue===undefined || playerTwoMoveThreeValue===undefined || playerOneMoveThreeValue===undefined ||
        playerTwoMoveOneType===undefined || playerOneMoveOneType===undefined || playerTwoMoveTwoType===undefined || playerOneMoveTwoType===undefined || playerTwoMoveThreeType===undefined || playerOneMoveThreeType===undefined){
            return null;
        }

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
    }else if(player1===player2){
        return 'Tie';
    }
}

function setComputerMoves() {
    const moves = ['rock', 'paper', 'scissors'];
    const moveOneType = moves[Math.floor(Math.random() * 3)];
    const moveTwoType = moves[Math.floor(Math.random() * 3)];
    const moveThreeType = moves[Math.floor(Math.random() * 3)];
    const moveOneValue = Math.floor(Math.random() * 96) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType,
                   moveTwoValue, moveThreeType, moveThreeValue);
}
