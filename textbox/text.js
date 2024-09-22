
// CONSTS

const special_speakers = ["Terminal"];
const TEXT_SPEED = 30;
const SPECIAL_TEXT_SPEEDS = {
    ',': 3,
    '.': 8,
    '?': 8,
    '!': 5,
    '-': 4
}



let current_text = [];
let current_pos = -1;
let speaker = null;

// TEXTBOX STATUS
let not_skipped = true;


//example:
// [{text: "owh, hellow!"}, [{choice: "hi", onclick: "changeText(1)"}, {choice: "no", onclick: "changeText(-1)"}]]

//to_say for newText should be a list of text boxes as shown above.

//Each text box can look like:
// for a player choice:
// - [{choice: "forward one", onclick: "changeText(1)"}, 
//    {choice: "backward one", onclick: "changeText(-1)"}]

// for a speaking text box:
// - {"speaker": "Roxie", 
//    "text": "oh look at that!", 
//    "sprite": "sprites/Roxie.png"}
// Any of these can be left blank to show nothing EXCEPT "text"


function newText(to_say) {
    deleteText();
    var textbox = document.getElementById("textbox");
    


    textbox.setAttribute("onclick", "next_text()")


    var focus = document.getElementById("focus");
    focus.setAttribute("class", "unfocussed");

    var name = document.createElement("div");
    //name.innerHTML = speaker;
    name.id = "speaker"
    name.setAttribute("class", "textbox-label");
    textbox.appendChild(name);
    


    var text_holder = document.createElement("p");
    text_holder.setAttribute("id", "active-text")
    textbox.appendChild(text_holder);


    current_text = to_say;
    current_pos = -1;


    var next = document.createElement("div")
    next.setAttribute("id", "next");
    next.setAttribute("class", "invisible");
    next.innerHTML = " ▼ "
    textbox.appendChild(next);

    changeText(1, true);
}


function next_text() {
    changeText(1);
    
}


function changeImage(name, pose) {
    var image = document.getElementById("speaking-sprite");
    source = "sprites/" + name;
    if (pose != undefined) source += pose;
    source += ".png"
    image.src = source;
    if (image.name != name){
        console.log("NEW NAME")

    }
    image.name = name; // save original image

    image.onerror = function() { // doesn't exist
        image.src = "";
        image.name = "";
    }

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
        
        if (speaker != undefined) {
            speaker_box.innerHTML = speaker;

            if (special_speakers.includes(speaker)) {
                document.getElementById("textbox").setAttribute("class", "active textbox " + speaker);
            } else {
                document.getElementById("textbox").setAttribute("class", "active textbox");
            }

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


function deleteText(){
    // deletes all text in the textbox
    let box = document.getElementById("textbox")
    box.innerHTML = "";
    box.setAttribute("class", "")
    box.removeEventListener("animationend", deleteText)

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



function testText() {
    newText([{"speaker": "Cyn", "text": "oh look at that! Honestly, I wasn't expecting to win... maybe there's still hope, haha."}, [{choice: "eat an entire packet of hot peppers with no milk", onclick: "changeText(1)"},{choice: "no", onclick: "changeText(-10)"}], {"speaker": "Eda", "text":"mary had a little lamb little lamb little lambmary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lambmary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lambmary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb  lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lambmary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a little lamb little lamb little lamb mary had a "} , 
    {"speaker": "Eda", "text": "<span  style='color: aqua;'> neat</span>-o"}, 
    {"text": "kinda cool."}, {"Nifty":'<div class="jitter"> EAT MY JORTS</div>'}, {"Cyn":'<div class="jitter2">                                                        W H a t</div>'}]);
}

