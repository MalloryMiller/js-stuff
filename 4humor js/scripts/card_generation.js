var index = 0;

function next_puzzle() {
    index = (index + 1) % current_boards.length;
    if (get_total_damage(current_boards[index]) == 0) { // first run
        generate();
    } else {
        display_generation()
    }
}

function last_puzzle() {
    index = (index - 1);
    if (index < 0) index = current_boards.length - 1;
    if (get_total_damage(current_boards[index]) == 0) { // first run
        generate();
    } else {
        display_generation()
    }

}

var current_boards = [[
    [
        ["", "", "", ""], 
        ["", "", "", ""]
    ], 
    [
        ["", "", "", ""], 
        ["", "", "", ""]
    ]
], [
    [
        ["", "", "", ""], 
        ["", "", "", ""]
    ], 
    [
        ["", "", "", ""], 
        ["", "", "", ""]
    ]
], [
    [
        ["", "", "", ""], 
        ["", "", "", ""]
    ], 
    [
        ["", "", "", ""], 
        ["", "", "", ""]
    ]
], [
    [
        ["", "", "", ""], 
        ["", "", "", ""]
    ], 
    [
        ["", "", "", ""], 
        ["", "", "", ""]
    ]
]];




function generate() {
    clear_display_generation();
    
    var objective = test_get_attack();
    for (var i = 0; i < index; i++) {
        objective += puzzles[i];
    }

    var random_board = [
        [
            randomize_board_side(YOUR_SUPPORT, ["", "", "", ""], 2),
            randomize_board_side(YOUR_BIG_ATTACK, ["", "", "", ""], 1),
        ],
        [
            randomize_board_side(YOUR_BIG_ATTACK, ["", "", "", ""], 2),
            randomize_board_side(YOUR_SUPPORT, ["", "", "", ""], 2),
        ]
    ]


    setTimeout(function(){

        random_board = optimize_board(random_board, objective);
    
        current_boards[index] = random_board;
    
    
        if (get_total_damage(current_boards[index]) == objective) {
            display_generation();
    
        } else {
            generate()
        }
    }, 1);

}


function optimize_board(random_board, objective) {

    var tries = 0;
    var current_count = get_total_damage(random_board)

    while (current_count != objective && tries < max_tries) {
        var difference = objective - current_count;
        if (difference < 0) {
            if (difference < -2) {
                random_board[1][0] = randomize_lower(random_board[1][0], 1)
            }
            if (difference < -8) {
                random_board[0][1] = randomize_higher(YOUR_BIG_ATTACK, random_board[0][1], 1)
            }

        } else {
            if (difference == 1) {
                random_board[1][0] = randomize_higher(YOUR_ONE_ATTACK, random_board[1][0], 1)
            }
            if (difference > 4) {
                random_board[1][0] = randomize_higher(YOUR_SMALL_ATTACK, random_board[1][0], 2)
                random_board[0][1] = randomize_lower(random_board[0][1], 2)
            }
            if (difference > 6) { // make it much higher
                random_board[1][0] = randomize_board_side(YOUR_BIG_ATTACK, ["", "", "", ""], 8);
                random_board[1][1] = randomize_board_side(YOUR_VITAL_SUPPORT, ["", "", "", ""], 8);
            }
        }
        current_count = get_total_damage(random_board)
        tries++;
    }
    return random_board;
}




function randomize_board_side(pool, original, amount) {
    var new_line = original;
    var used = []
    for (x of original) {
        used.push(x);
    }
    for (var x = 0; x < amount; x++) {
        value = ""
        var tries = 0;
        while (used.includes(value) && tries < 10) {
            value = pool[Math.floor(Math.random() * pool.length)];
            tries++;
        }
        new_line[Math.floor(Math.random() * 4)] = value;
        used.push(value);

    }
    return new_line;

}



function randomize_higher(pool, original, amount) {
    var new_line = original;
    var used = []
    for (x of original) {
        used.push(x);
    }

    console.log(used);

    var value = ""
    var changed_spot = Math.floor(Math.random() * 4);
    for (var x = 0; x < amount; x++) {
    
        var new_value = get_attack(value);
        var old_value = get_attack(original[changed_spot]);

        var tries = 0;
        do {
            console.log(used.includes(value));
            value = pool[tries];
            tries++;
        } while (used.includes(value) && tries < pool.length && (original[changed_spot] != "" && new_value < old_value));
        new_line[changed_spot] = value;
        used.push(value);

    }
    return new_line;

}

function randomize_lower(original, amount) {
    var new_line = original;
    for (var x = 0; x < amount; x++) {
        new_line[Math.floor(Math.random() * 4)] = "";

    }
    return new_line;


}


function update_puzzle_num() {
    var progress = document.getElementById("progress");
    progress.innerHTML = (index + 1) + " / " + current_boards.length;
}


function clear_display_generation() {
    update_puzzle_num();
    current_board = document.getElementById("board");
    result = document.getElementById("result");

    html = "<div class=' board loading-part'>Generating Puzzle...</div>";
    current_board.innerHTML = html;

    result.innerHTML = 0;

}




function display_generation() {
    update_puzzle_num();
    current_board = document.getElementById("board");
    result = document.getElementById("result");

    html = "<table class='board'>";

    html += board_html(current_boards[index][0], "opponent")
    html += "<tr class='border'></tr>"
    html += board_html(current_boards[index][1], "frend")

    html += "</table>"
    current_board.innerHTML = html;

    result.innerHTML = get_total_damage(current_boards[index]);

}

function board_html(board_part, row_class) {
    table = "<tr class='" + row_class+ "'>";

    for (x of board_part[0]) {
        table += "<td class='" + get_suit(x) + "'>" + x + "</td>";
    }
    table += "</tr><tr class='" + row_class+ "'>";

    for (x of board_part[1]) {
        table += "<td class='" + get_suit(x) + "'>" + x + "</td>"
    }
    table += "</tr>";

    return table;

}