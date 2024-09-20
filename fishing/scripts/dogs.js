



function first_speak() {
    newText([
        {"speaker": "R3TRVR", "text": "Thank you, you've saved me!"} , 
        {"speaker": "R3TRVR", "text": "My crew and I were trying to leave orbit when our ship was suddenly attacked by some kind of virus."} ,
        {"speaker": "R3TRVR", "text": "It wanted us to solve a puzzle, so I split the work amongst the crew."} , 
        {"speaker": "R3TRVR", "text": "Unfortunately... we ran out of time before we could reconvene with our progress."} , 
        {"speaker": "R3TRVR", "text": "All I know is that <span style='color: red'> the first letter is either 10 letters before the second one in the alphabet or it is an R.</span>"} , 
        {"speaker": "R3TRVR", "text": "Got that?"} , 

        [{choice: "Got what?", onclick: "changeText(-2)"},{choice: "Got it.", onclick: "changeText(1)"}],
        {"speaker": "R3TRVR", "text": "Thank you! Once we've put the pieces together we should be able to prevent future issues."} , 
    ])
}

function second_speak() {
    newText([
        {"speaker": "Cnvs", "text": "That was so much fun! Can we go again?"} ,  
        [{choice: "Any progress on the ship's puzzle?", onclick: "changeText(3)"},{choice: "Again?!", onclick: "changeText(1)"}],
        {"speaker": "Cnvs", "text": "Again! Again!"} , 
        [{choice: "Any progress on the ship's puzzle?", onclick: "changeText(1)"},{choice: "Again?!?", onclick: "changeText(-1)"}],
        {"speaker": "Cnvs", "text": "Yeah I know it! You want it?"} , 
        {"speaker": "Cnvs", "text": "Aww but where's the fun if you don't solve it yourself! Hmm..."} , 
        {"speaker": "Cnvs", "text": "Oh! Oh! Here: <span style='color: red'>The fourth letter can be found by looking at the second half of the first!</span>"} , 
        {"speaker": "Cnvs", "text": "Hope that helps, friend! Again, Again!"} , 
    ])
}
function third_speak() {
    newText([
        {"speaker": "Cnvs", "text": "Ah what a valiant rescue! A bravest of endeavors!"} , 
        {"speaker": "Cnvs", "text": "What a story this shall make, generations shall sing your praise, kind stranger!"} , 
        [{choice: "Did you make any progress on the puzzle in the ship?", onclick: "changeText(2)"},{choice: "Oh, do say more.", onclick: "changeText(1)"}],
        {"speaker": "Cnvs", "text": "A splendiferous occasion! A phenomenal and courageous venture!"} , 
        {"speaker": "Cnvs", "text": "Of course for your incredible endeavors I must bequeath you a reward:"} , 
        {"speaker": "Cnvs", "text": "<span style='color: red'>The last letter is the first plus seventeen!</span>"} , 
    ])
}

function fourth_speak() {
    newText([
        {"speaker": "M4L4MUt3", "text": "Hi Hi!"} , 
        {"speaker": "M4L4MUt3", "text": "..."} , 
        [{choice: "Did you have any information about the letter you were decoding?", onclick: "changeText(1)"},{choice: "Bye.", onclick: "changeText(-10)"}],
        {"speaker": "M4L4MUt3", "text": "Oh. Uhh. Haha."} , 
        {"speaker": "M4L4MUt3", "text": "Funny story I, uhm, usually just ask the onboard ship assistant to do that kind of thing."} , 
        {"speaker": "M4L4MUt3", "text": "But for some reason it was offline, so."} , 
        {"speaker": "M4L4MUt3", "text": "I just typed some stuff thoughtfully while everyone else did their thing."} , 
        {"speaker": "M4L4MUt3", "text": "Plus I, like, forgot which of the <span style='color: red'>five</span> I was supposed to do... Hahaha..."} , 
        {"speaker": "Cnvs", "text": "Anyway thanks for the rescue!"} , 
    ])
}

function fifth_speak() {
    newText([
        {"speaker": "P0DL3", "text": "..."} , 
        {"speaker": "P0DL3", "text": "The Second Letter is <span style='color: red'>L</span>."} , 
    ])
}

function no_more() {
    newText([
        {"text": "You've fished... a boot?"} , 
        [{choice: "You know what? I like boots.", onclick: "changeText(1)"},{choice: "Reset Puzzle", onclick: "reset_puzzle_speeches()"}],
    ])
}


const speakers = [first_speak, second_speak, third_speak, fourth_speak, fifth_speak, no_more]
var current_speaker = 0;

function dog_speak() {
    speakers[current_speaker]();
    current_speaker++;
    if (current_speaker > speakers.length - 1) current_speaker = speakers.length - 1
}

function reset_puzzle_speeches() {
    changeText(1);
    current_speaker = 0;
}


`
the first letter is either 10 letters before the second one in the alphabet or it is an r.
The fourth letter can be found by looking at the second half of the first!
The last letter is the first plus two!
the third letter fits in the blank: ac_te
...
second letter is L

`

