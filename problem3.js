rps = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3,
};

function get_com_rps() {
    // Randomly generated number N, 0 <= N <= 10
    random_number = Math.random() * 10;
    let com_rps = 0;

    if (random_number <= 3.3) {
        com_rps = rps.ROCK;
    } else if (random_number <= 6.6) {
        com_rps = rps.PAPER;
    } else {
        com_rps = rps.SCISSORS;
    }
    return com_rps;
}

const user_rps = prompt("Enter your RPS (Rock:1 , Paper:2, Scissors: 3");

if (user_rps < 1 || user_rps > 3) {
    throw Error("You can only use 1-3");
}

const com_rps = get_com_rps();

const result = user_rps - com_rps;

if (result == 0) {
    console.log("Draw");
} else if (0 < result <= 1) {
    console.log("Win");
} else {
    console.log("Lose");
}
