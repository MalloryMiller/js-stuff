// ALL of these are in PERCENT
var target_size = 30;
var target_position = 0;
var target_jitter = 0;

var aim_position = 0;
const aim_width = .5;
var aim_max_vel = 3;
var aim_velocity = .5;


const acceleration_center_posn = 50;
const interval_rate = 10;
var interval;





function run() {
    interval = setInterval(update, interval_rate)
}

document.body.onkeyup = function(k) {
    if (k.key == " " || k.code == "Space" || k.keyCode == 32) {
        drop();
    }
  }
  

function update() {
    move_target();
    move_aim();
}

function drop() {
    if (target_position < aim_position && 
        aim_position < target_position + target_size) {
        clearInterval(interval);
        dog_speak();
        return;
    }
    if (target_position < aim_position + aim_width &&
        aim_position + aim_width < target_position + target_size) {
        clearInterval(interval);
        dog_speak();
        return;
    }
}


function move_target() {
    document.getElementById("target").style = "width: " + target_size + "%;";
    return;
}

function move_aim() {
    update_aim_vectors();

    document.getElementById("aim").style = "margin-left: " + aim_position + "%;";
    return;
}


function update_aim_vectors() {
    aim_position += aim_velocity
    if (aim_position >= 100) {
        aim_position = 100
        aim_velocity = -aim_velocity;
    }
    if (aim_position <= 0) {
        aim_position = 0;
        aim_velocity = -aim_velocity;
    }
    
    if (aim_velocity < 0) {

        aim_velocity -= get_acceleration(aim_position);
    }else {

        aim_velocity += get_acceleration(aim_position);
    }
    if (Math.abs(aim_velocity) >= aim_max_vel) aim_velocity = Math.sign(aim_velocity) * aim_max_vel;


}

function get_acceleration(position) {
    var acc = (Math.abs(position - acceleration_center_posn) / 1000);

    return acc;

}