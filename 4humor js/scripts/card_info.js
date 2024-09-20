const max_tries = 1000;

function get_bolstering(card) {
    var split_by_times = card.split("x")
    if (split_by_times.length == 2) {
        return split_by_times[1];
    } else {
        return 0;
    }
    
}


function get_card(card) {
    var split_by_times = card.split("x")
    if (split_by_times.length == 2) {
        return split_by_times[0];
    } else {
        return card;
    }
    
}

const ATTACK = {
    "": 0,
    "A": 1,
    "2": 1,
    "3": 2,
    "4": 2,
    "5": 2,
    "6": 3,
    "7": 3,
    "8": 3,
    "9": 3,
    "1": 4, // Ace is encoded as A
    "J": 4,
    "Q": 4,
    "K": 4,
}

function get_attack(card) {
    return ATTACK[get_card(card)[0]];
}


const COST = {
    "": 0,
    "A": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "1": 10, // Ace is encoded as A
    "J": 11,
    "Q": 12,
    "K": 13,
}

function get_cost(card) {
    return COST[get_card(card)[0]];
}

function get_suit(card) {
    if (card.includes("♠️")) return "spades";
    if (card.includes("♣️")) return "clubs";
    if (card.includes("♦️")) return "diamonds";
    if (card.includes("♥️")) return "hearts";
    return "";
}


const puzzles = [-14, 7, 2] // oo looking thru my constants!!! more confusing than helpful, tho :P


const YOUR_VITAL_SUPPORT = [
    "9♠️", "8♠️", "5♠️",
    "A♣️",
    "9♦️", "4♦️"
]


const YOUR_SMALL_ATTACK = [
    "7♠️", "3♠️",
    "6♠️", "4♠️",
    "3♣️", 
]

const YOUR_ONE_ATTACK = [
"2♠️", "2♣️",
]

const YOUR_BIG_ATTACK = [
    "K♠️", "Q♠️", "J♠️", "10♠️",
    "K♣️", "Q♣️", "J♣️", "9♣️", "10♣️",
]

const YOUR_SUPPORT = [
    "8♣️", "7♣️", 
    "A♣️", "A♠️",
    "9♠️", "8♠️", "5♠️",
    "9♦️", "4♦️"

]



function get_attacker(board, posn) {
    return board[1][0][posn];
}
function get_support(board, posn) {
    return board[1][1][posn];
}
function get_defender(board, posn) {
    return board[0][1][posn];
}
function get_defender_support(board, posn) {
    return board[0][0][posn];
}



var test_board = [
    [
        ["",     "",     "A♥️", ""], 
        ["9♦️",   "6♣️x2",     "", ""]
    ], 
    [
        ["9♦️x1", "A♣️x3", "Q♣️", "10♦️"], 
        ["4♦️",   "",     "5♠️", ""]
    ]
];
