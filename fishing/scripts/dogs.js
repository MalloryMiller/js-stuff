

function level_up() {
    changeText(1);
    run();
}


function first_speak() {
    newText([
        {"speaker": "R3TRVR", "text": "Thank you, you've saved me!"} , 
        {"speaker": "R3TRVR", "text": "My crew and I were trying to leave orbit when our ship was suddenly attacked by some kind of virus."} ,
        {"speaker": "R3TRVR", "text": "It wanted us to solve a puzzle, so I split the work amongst the crew."} , 
        {"speaker": "R3TRVR", "text": "Unfortunately... we ran out of time before we could reconvene with our progress."} , 
        {"speaker": "R3TRVR", "text": "All I know is that <span style='color: red'> the first letter is either 10 letters before the second one or it is an R.</span>"} , 
        {"speaker": "R3TRVR", "text": "Got that?"} , 

        [{choice: "Got what?", onclick: "changeText(-2)"},{choice: "Got it.", onclick: "changeText(1)"}],
        {"speaker": "R3TRVR", "text": "Thank you! Once we've put the pieces together we should be able to prevent future issues."} , 
        [{choice: "Alright, I'll get back to it.", onclick: "level_up()"}],
    ])
}

function second_speak() {
    newText([
        {"speaker": "0ZI3", "text": "That was so much fun! Can we go again?"} ,  
        [{choice: "Any progress on the ship's puzzle?", onclick: "changeText(3)"},{choice: "Again?!", onclick: "changeText(1)"}],
        {"speaker": "0ZI3", "text": "Again! Again!"} , 
        [{choice: "Any progress on the ship's puzzle?", onclick: "changeText(1)"},{choice: "Again?!?", onclick: "changeText(-1)"}],
        {"speaker": "0ZI3", "text": "Yeah I know it! You want it?"} , 
        {"speaker": "0ZI3", "text": "Aww but where's the fun if you don't solve it yourself! Hmm..."} , 
        {"speaker": "0ZI3", "text": "Oh! Oh! Here: <span style='color: red'>The fourth letter can be found by looking at the second half of the first!</span>"} , 
        {"speaker": "0ZI3", "text": "Hope that helps, friend! Again, Again!"} , 
        [{choice: "Again!", onclick: "level_up()"}],
    ])
}

function third_speak() {
    newText([
        {"speaker": "T3RI3R", "text": "Ah what a valiant rescue! A bravest of endeavors!"} , 
        {"speaker": "T3RI3R", "text": "What a story this shall make, generations shall sing your praise, kind stranger!"} , 
        [{choice: "Did you make any progress on the puzzle in the ship?", onclick: "changeText(6)"},{choice: "Oh, do say more.", onclick: "changeText(1)"}],
        {"speaker": "T3RI3R", "text": "A splendiferous occasion! A phenomenal and courageous venture!"} , 
        {"speaker": "T3RI3R", "text": "There I was, in the most dire of circumstances... My oxygen running low! My doggy paddle not paddling hard enough to keep my heavy equipment above water!"} , 
        {"speaker": "T3RI3R", "text": "I was permitted in those moments to contemplate my life. All the things which one wishes to do but never would get the chance. All the games of fetch left to play, the kibble left to eat..."} , 
        {"speaker": "T3RI3R", "text": "And just as I began to believe that the sea in its callousnes would let swing its Sword of Damocles, something happened!"} , 
        {"speaker": "T3RI3R", "text": "From the sky like a god from the machine, I was pulled from my watery peril by none other than you!"} , 
        {"speaker": "T3RI3R", "text": "Of course for your incredible endeavors I must bequeath you a reward:"} , 
        {"speaker": "T3RI3R", "text": "<span style='color: red'>The last letter of the puzzle is the first plus seventeen!</span>"} , 
        [{choice: "Let's continue.", onclick: "level_up()"}],
    ])
}

function fourth_speak() {
    newText([
        {"speaker": "M4L4MUt3", "text": "Hi Hi!"} , 
        {"speaker": "M4L4MUt3", "text": "..."} , 
        [{choice: "Did you have any information about the letter you were decoding?", onclick: "changeText(1)"},{choice: "...", onclick: "changeText(-1)"}],
        {"speaker": "M4L4MUt3", "text": "Oh. Uhh. Haha."} , 
        {"speaker": "M4L4MUt3", "text": "Funny story I, uhm, usually just ask the onboard ship assistant to do that kind of thing."} , 
        {"speaker": "M4L4MUt3", "text": "But for some reason it was offline, so."} , 
        {"speaker": "M4L4MUt3", "text": "I just tried to look busy while everyone else did their thing."} , 
        {"speaker": "M4L4MUt3", "text": "Plus I, like, forgot which of the <span style='color: red'>five</span> letters I was supposed to do... Hahaha..."} , 
        {"speaker": "Cnvs", "text": "Anyway thanks for the rescue!"} , 
        [{choice: "Back at it then...", onclick: "level_up()"}],
    ])
}

function fifth_speak() {
    newText([
        {"speaker": "P0DL3", "text": "..."} , 
        {"speaker": "P0DL3", "text": "The Second Letter is <span style='color: red'>L</span>."} , 
        [{choice: "..!", onclick: "level_up()"}],
    ])
}

function sixth_speak() {
    newText([
        {"speaker": "D0C", "text": "Greetings, friend. Thank you for the assist."} , 
        {"speaker": "D0C", "text": "I presume you're collecting what the crew found of the puzzle on board?"} , 
        {"speaker": "D0C", "text": "I was very close, but my diction is rather poor. <span style='color: red'>The third letter fits in the blank: ac_te</span>."} , 
        {"speaker": "D0C", "text": "Hopefully that helps; thank you for your service."} , 
        [{choice: "Thanks for your help!", onclick: "level_up()"}],
    ])
}

function no_more() {
    newText([
        {"text": "You've fished... a boot?"} , 
        [{choice: "You know what? I like boots.", onclick: "level_up()"},{choice: "Reset Puzzle", onclick: "reset_puzzle_speeches()"}],
    ])
}


const speakers = [first_speak, second_speak, third_speak, fourth_speak, fifth_speak, sixth_speak, no_more];
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


