// ALL of these are in PERCENT
var target_position = 0;

var aim_position = 0;
var aim_start_vel = .5;
var aim_velocity = .5;

const aim_width = .5;
const aim_max_vel = 3;
const slower_vel = 0.5;
const min_acceleration = .05;
const max_acceleration = 1;
const acc_jitter = 1;


const acceleration_center_posn = 50;
const interval_rate = 10;
const fail_time_penalty = 1000;


// Interval containers
var interval;
var slow_interval;
var target_move_interval;


const levels = [
    {
        'size': 30,
        'jitter': 0,
        'jitterspeed': 0,
    },
    {
        'size': 30,
        'jitter': 2,
        'jitterspeed': 0,
    },
    {
        'size': 10,
        'jitter': 5,
        'jitterspeed': 0,
    },
    {
        'size': 10,
        'jitter': 15,
        'jitterspeed': 0,
    },
    {
        'size': 10,
        'jitter': 2,
        'jitterspeed': 0,
    },
    {
        'size': 5,
        'jitter': 10,
        'jitterspeed': 0,
    },
    {
        'size': 35,
        'jitter': 10,
        'jitterspeed': 0,
    },
]



function set_button_to_drop() {
    drop_button = document.getElementById("drop-button");
    drop_button.innerHTML = "STEADY"

}

function set_button_to_slow() {
    drop_button = document.getElementById("drop-button");
    drop_button.innerHTML = "MAGNETIZE"
}

function set_button_to_busy() {
    drop_button = document.getElementById("drop-button");
    drop_button.innerHTML = "BUSY..."
}


function run() {
    place_target()
    interval = setInterval(update, interval_rate)
    target_move_interval = setInterval(jitter_target, 300)

    document.body.onkeyup = function(k) {
        if (interval != null && (k.key == " " || k.code == "Space")) {
            drop();
        }
      }
    document.body.onkeydown = function(k) {
        if (interval != null && (k.key == " " || k.code == "Space")) {
            slow();
        }
    }
}
  

function update() {
    move_target();
    move_aim();
}

function place_target() {
    target_position = Math.round(Math.random() * (100 - levels[current_speaker].size));
}

function jitter_target() {
    target_position = target_position + 
    ((Math.random() * levels[current_speaker].jitter) 
    - levels[current_speaker].jitter / 2) 
    if (target_position >= (100 - levels[current_speaker].size)) target_position  = 100 - levels[current_speaker].size;
    if (target_position <= 0) target_position  = 0;
}


function drop() {
    set_button_to_busy()
    clearInterval(interval);
    clearInterval(target_move_interval);

    var echo = document.createElement("div");
    echo.setAttribute("class", "echo");

    if ((target_position < aim_position + aim_width &&
        aim_position + aim_width < target_position + levels[current_speaker].size)||
        (target_position < aim_position && 
        aim_position < target_position + levels[current_speaker].size)) {
        setTimeout(successful_drop, fail_time_penalty);
    } else {
        setTimeout(failed_drop, fail_time_penalty);
    }
    clearInterval(slow_interval);
    slow_interval = null;
}




function failed_drop() {
    aim_velocity = Math.sign(aim_velocity) * aim_start_vel;
    interval = setInterval(update, interval_rate);
    set_button_to_drop();
    target_move_interval = setInterval(jitter_target, 300);
}

function successful_drop() {
    interval = null;
    dog_speak();
    target_move_interval = setInterval(jitter_target, 300);
}

function mouse_leave_drop() {
    if (slow_interval == null) return;
    drop();
}

function slow() {
    clearInterval(slow_interval);
    slow_interval = null;
    set_button_to_slow();
    slow_interval = setInterval(set_speed_slow, interval_rate);
}

function set_speed_slow() {
    var direction = Math.sign(aim_velocity);
    aim_velocity = direction * slower_vel;

}

function move_target() {
    document.getElementById("target").style = "width: " + levels[current_speaker].size + 
    "%; margin-left: " + target_position + "%;";
    return;
}

function move_aim() {
    update_aim_vectors();

    document.getElementById("aim").style = "margin-left: " + aim_position + "%;";
    return;
}


function update_aim_vectors() {
    aim_position += aim_velocity
    if (aim_position >= 100 - aim_width) {
        aim_position = 100- aim_width
        aim_velocity = -aim_start_vel;
    }
    if (aim_position <= 0) {
        aim_position = 0;
        aim_velocity = aim_start_vel;
    }
    
    if (aim_velocity < 0) {
        aim_velocity -= get_acceleration(aim_position);
    }else {
        aim_velocity += get_acceleration(aim_position);
    }
    if (Math.abs(aim_velocity) >= aim_max_vel) aim_velocity = Math.sign(aim_velocity) * aim_max_vel;

}


function get_acceleration(position) {
    var acc = Math.abs((acceleration_center_posn - position) / 10000);
    if (acc < min_acceleration) acc = min_acceleration;
    if (acc > max_acceleration) acc = max_acceleration;
    return acc;
}