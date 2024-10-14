
// CONSTS

const TEXT_SPEED = 30;
const SPECIAL_TEXT_SPEEDS = {
    ',': 3,
    '.': 8,
    '?': 8,
    '!': 5,
    '-': 4
}

const SPRITE_FOLDER = "../textbox/sprites/"



let current_text = [];
let current_pos = -1;
let speaker = null;
let current_images = [];

// TEXTBOX STATUS
let not_skipped = true;

//example:
// [{text: "owh, hellow!"}, [{choice: "hi", onclick: "changeText(1)"}, {choice: "no", onclick: "changeText(-1)"}]]

//to_say for newText should be a list of text boxes as shown above.

//A text box is one of:
// for a player choice:
// - [{choice: "forward one", onclick: "changeText(1)"}, 
//    {choice: "backward one", onclick: "changeText(-1)"}]
// for a speaking text box:
// - {"speaker": "Roxie", 
//    "pose": "angry"
//    "text": "oh look at that!"}

// Any of these can be left blank to show nothing EXCEPT "text"
// if a file exists matching the speaker + .png in the textbox/sprites folder, that image will be shown


function newText(to_say) {
    // Creates a new text box with the contents of to_say
    // do not call this function again without the previous text box being resolved
    // outputs nothing

    deleteText(null, true);

    var textbox = document.getElementById("textbox");
    textbox.setAttribute("tabbable", true);


    textbox.setAttribute("onclick", "next_text()")

    var imag = document.getElementById("current-image");
    imag.setAttribute("class", "img-enter");

    var focus = document.getElementById("focus");
    focus.setAttribute("class", "unfocussed");

    var name = document.createElement("div");

    name.id = "speaker"
    name.setAttribute("class", "textbox-label");
    textbox.appendChild(name);
    


    var text_holder = document.createElement("p");
    text_holder.setAttribute("id", "active-text")
    text_holder.setAttribute("tabindex", "0")
    textbox.appendChild(text_holder);


    current_text = preloadImages(to_say);
    current_pos = -1;


    var next = document.createElement("div")
    next.setAttribute("id", "next");
    next.setAttribute("class", "invisible");
    next.innerHTML = " ▼ "
    textbox.appendChild(next);

    changeText(1, true);
}


function next_text() {
    // moves to the next text box
    // outpus nothing

    changeText(1);
}


function changeImage(name) {
    // changes the active image to the current value. 
    //input the current speaker.
    // outputs nothing

    var cur_img = document.getElementById("current-image");

    if (name == null && name == undefined || name == "") return;

    var current_value = cur_img.src;
    if (current_value != undefined) {
        current_value = current_value.split("/");
        current_value = current_value[current_value.length - 1].split("_")[0];
        if (current_value.split(".")[1] != "png") {
            current_value = undefined;
        } else {
            current_value = current_value.substring(0, current_value.length - 4);
            current_value = current_value.split("-")[0];
        }
    }


    if (current_value != name){

        if (current_value != null && current_value != undefined && current_value != "") {
            // if the previous slide had an image so you have to swap em
            cur_img.setAttribute("class", "img-leave")
            cur_img.addEventListener("animationend", slide_in);

        } else {
            // if no prev image so just slide
            cur_img.setAttribute("class", "");
            cur_img.src = current_text[current_pos].img.src;

            if (!image_exists(cur_img.src)) {
                cur_img.removeAttribute("src");
            }

            cur_img.setAttribute("class", "img-enter");

        }

    } else {
        // If no change in speaker
        cur_img.src = current_text[current_pos].img.src;
    }
    

}


function preloadImages(current_text) {
    //not sure if this works as intended...
    //saves the images in the current_text in advance

    for (var i = 0; i < current_text.length; i++) {
        if (current_text[i].speaker != undefined) {
            current_text[i].img = new Image()

            source = SPRITE_FOLDER + current_text[i].speaker;
            if (current_text[i].pose != undefined) source +=  "_" + current_text[i].pose;
            source += ".png"
            current_text[i].img.src = source;
        }
    }

    return current_text;
}

function image_exists(src){

    var http = new XMLHttpRequest();

    http.open('HEAD', src, false);

    try {
        http.send();
        return http.status != 404;
    } catch (error) {
        return false;
    }
}

function slide_in() {
    var cur_img = document.getElementById("current-image");
    cur_img.src = current_text[current_pos].img.src;
    cur_img.setAttribute("class", "img-enter");
    cur_img.removeEventListener("animationend", slide_in);
    
}

document.getElementById("current-image").onerror = function() { // doesn't exist
    var image = document.getElementById("speaking-sprite");
    var cur_img = document.getElementById("current-image");
    cur_img.src = SPRITE_FOLDER + "blank.png";
    cur_img.setAttribute("class", "img-hidden")
    image.alt = "";
}



function changeText(change, start=false) {
    var textbox = document.getElementById("active-text");
    var all_text = document.getElementById("textbox")
    var next = document.getElementById("next");
    current_pos += change;

    try {
        var new_text = current_text[current_pos]["text"];

    } catch {
        var new_text = undefined;
    }

    if ((current_text.length <= current_pos || current_pos < 0) && !start) {
        finishText()
        return;
    }
    changeImage(current_text[current_pos]["speaker"], current_text[current_pos]["pose"]);

    

    if (new_text != undefined) {
        next.setAttribute("class", "invisible");
        not_skipped = true;
        var speaker = current_text[current_pos]["speaker"];
        var speaker_box = document.getElementById("speaker");

        // TODO: UPDATE IMAGE
        
        if (speaker != undefined && speaker != null) {
            speaker_box.innerHTML = speaker;

            document.getElementById("textbox").setAttribute("class", speaker + " active textbox");

            

        } else {
            speaker_box.innerHTML = "";
            document.getElementById("textbox").setAttribute("class", "active textbox");

        }

        textbox.innerHTML =  hideText(new_text);

        setTimeout(function(){ // skips if not after a wait idk why
            all_text.setAttribute("onclick", "unhideAllText()");
        }, 50);

        unhideText(); // fast forward if clicked early

    } else {

        textbox.innerHTML = "";
        
        for (var choice of current_text[current_pos]) {
            var new_option = document.createElement("button");
            new_option.innerHTML = choice.choice;
            new_option.setAttribute("onclick", choice.onclick);
            new_option.setAttribute("class", "text-box-button");
            textbox.appendChild(new_option);

            all_text.setAttribute("onclick", "");
            next.setAttribute("class", "invisible");
        }
    }

}


function deleteText(anim_event, starting=false){
    // deletes all text in the textbox
    let box = document.getElementById("textbox")
    box.innerHTML = "";
    box.setAttribute("class", "")
    box.removeEventListener("animationend", deleteText)
    speaker = null;
    if (!starting) {
        //only do this if not the start, if starting it deletes the new image!
        var cur_img = document.getElementById("current-image");
        cur_img.addEventListener("animationend", delete_image);
        cur_img.setAttribute("class", "img-leave");
    }

}

function delete_image() {
    var cur_img = document.getElementById("current-image");
    cur_img.src = "";
    cur_img.removeEventListener("animationend", delete_image);

}


function finishText() {
    // animates the textbox and focus, resets variables.

    var focus = document.getElementById("focus");
    let box = document.getElementById("textbox")
    box.addEventListener("animationend", deleteText);
    
    focus.addEventListener("transitionend", () => {
        focus.setAttribute("class", "focussed");
    });

    box.setAttribute("class", "hidden textbox");
    focus.setAttribute("class", "focussing");

    current_text = []; //reset
    current_pos = -1;  //reset
    speaker = null;    //reset 
      
}

function hideText(text) {
    var result = "<p class = 'inner-text'>";
    var hiding = true;

    for (x of text) {
        if (x == '<') hiding = false;

        if (hiding) {
            result += "<span class='invisible'>" + x + "</span>";
        } else {
            result += x
        }
        if (x == '>') hiding = true;
    }

    result += "</p>"
    return result;

}

function unhideText() {
    var texts = document.getElementsByClassName('invisible');
    var current = 'none';
    if (!not_skipped) {
        while (texts.length > 0) {
            texts[0].setAttribute("class", "");

        }

    } else {
        current = texts[0].innerHTML;
        texts[0].setAttribute("class", "");
    }
    if (texts.length >= 1 && not_skipped) {
        speed_multiplier = 1;
        if (SPECIAL_TEXT_SPEEDS[current] != undefined) {
            speed_multiplier = SPECIAL_TEXT_SPEEDS[current];
        }

        setTimeout(unhideText, TEXT_SPEED * speed_multiplier);
        return;
    } else {
        var all_text = document.getElementById("textbox");
        all_text.setAttribute("onclick", "next_text()");
        next.setAttribute("class", "next");

    }
}


function unhideAllText() {
    not_skipped = false;
}

