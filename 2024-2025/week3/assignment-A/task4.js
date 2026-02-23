// ************ TASK DESCRIPTION ************

// Write a PURE function "increaseScore" which updates the score 
// of a "player" object (1st parameter) by a fixed amount (2nd parameter).

// Example of a player object:
// * player1 = {"name": "Osman", "score": 30}



// TODO

const increaseScore = (player, amount) => {
    return {
        name: player.name, 
        score: player.score + amount 
    };
};



























// Below this comment any modification is prohibited. 
module.exports = increaseScore;
