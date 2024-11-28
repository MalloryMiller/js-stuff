

function instructions() {
    newText([
        {"speaker": "K9-RETRIEVAL-UNIT", "text": "The K9RU (K9-RETRIEVAL-UNIT) is a dredging machine designed to recover lost personel."} ,
        {"speaker": "K9-RETRIEVAL-UNIT", "text": "It consists of a magnetized crane and a target detection system."} ,
        {"speaker": "K9-RETRIEVAL-UNIT", "text": "For proper operation, the crane must be over a target to successfully magnetize to them."} ,
        {"speaker": "K9-RETRIEVAL-UNIT", "text": "By default the crane swings quickly. In order to steady the crane to a more reasonable speed, hold the button or [space bar]."} ,
        {"speaker": "K9-RETRIEVAL-UNIT", "text": "Once the yellow aiming marker is over a bright green area on the detection system, release to drop the crane into the water."} ,
        ], false)

}



function retrvr() {
    newText([
        {"speaker": "R3TRVR", "text": "Thank you, you've saved me!"} , 
        {"speaker": "R3TRVR", "text": "My crew and I were trying to leave orbit when our ship was suddenly attacked by some kind of virus."} ,
        {"speaker": "R3TRVR", "text": "It wanted us to solve a puzzle, so I split the work amongst the crew."} , 
        {"speaker": "R3TRVR", "text": "Unfortunately... we ran out of time before we could reconvene with our progress."} , 
        {"speaker": "R3TRVR", "text": "All I know is that <span class='hint-emphasis'> the first letter is either 10 letters before the second one or it is an R.</span>"} , 
        {"speaker": "R3TRVR", "text": "Got that?"} , 

        [{choice: "Got what?", onclick: "changeText(-2)"},{choice: "Got it.", onclick: "changeText(1)"}],
        {"speaker": "R3TRVR", "text": "Thank you! Once we've put the pieces together we should be able to prevent future issues."} , 
        [{choice: "Alright, I'll get back to it.", onclick: "level_up()"}],
    ])
}

function ozie() {
    newText([
        {"speaker": "O2I3", "text": "That was so much fun! Can we go again?"} ,  
        [{choice: "Any progress on the ship's puzzle?", onclick: "changeText(3)"},{choice: "Again?!", onclick: "changeText(1)"}],
        {"speaker": "O2I3", "text": "Again! Again!"} , 
        [{choice: "Any progress on the ship's puzzle?", onclick: "changeText(1)"},{choice: "Again?!?", onclick: "changeText(-1)"}],
        {"speaker": "O2I3", "text": "Yeah I know it! You want it?"} , 
        {"speaker": "O2I3", "text": "Aww but where's the fun if you don't solve it yourself! Hmm..."} , 
        {"speaker": "O2I3", "text": "Oh! Oh! Here: <span class='hint-emphasis'>The fourth letter can be found by looking at the second half of the first!</span>"} , 
        {"speaker": "O2I3", "text": "Hope that helps, friend! Again, Again!"} , 
        [{choice: "Again!", onclick: "level_up()"}],
    ])
}

function terier() {
    newText([
        {"speaker": "T3RI3R", "text": "Ah what a valiant rescue! A bravest of endeavors!"} , 
        {"speaker": "T3RI3R", "text": "What a story this shall make, generations shall sing your praise, kind stranger!"} , 
        [{choice: "Did you make any progress on the puzzle in the ship?", onclick: "changeText(6)"},{choice: "Oh, do say more.", onclick: "changeText(1)"}],
        {"speaker": "T3RI3R", "text": "A splendiferous occasion! A phenomenal and courageous venture!"} , 
        {"speaker": "T3RI3R", "text": "There I was, in the most dire of circumstances... My oxygen running low! My doggy paddle not paddling hard enough to keep my heavy equipment above water!"} , 
        {"speaker": "T3RI3R", "text": "I was permitted in those moments to contemplate my life. All the things which one wishes to do but never would get the chance. All the games of fetch left to play, the kibble left to eat..."} , 
        {"speaker": "T3RI3R", "text": "And just as I began to believe that the sea in its callousnesss would let swing its Sword of Damocles, something happened!"} , 
        {"speaker": "T3RI3R", "text": "From the sky like a god from the machine, I was pulled from my watery peril by none other than you!"} , 
        {"speaker": "T3RI3R", "text": "Of course for your incredible endeavors I must bequeath you a reward:"} , 
        {"speaker": "T3RI3R", "text": "<span class='hint-emphasis'>The last letter of the puzzle is the first plus seventeen!</span>"} , 
        [{choice: "Let's continue.", onclick: "level_up()"}],
    ])
}

function malamute() {
    newText([
        {"speaker": "M4L4MUt3", "text": "Hi Hi!"} , 
        {"speaker": "M4L4MUt3", "text": "..."} , 
        [{choice: "Did you have any information about the letter you were decoding?", onclick: "changeText(1)"},{choice: "...", onclick: "changeText(-1)"}],
        {"speaker": "M4L4MUt3", "text": "Oh. Uhh. Haha."} , 
        {"speaker": "M4L4MUt3", "text": "Funny story I, uhm, usually just ask the onboard ship assistant to do that kind of thing."} , 
        {"speaker": "M4L4MUt3", "text": "But for some reason it was offline, so."} , 
        {"speaker": "M4L4MUt3", "text": "I just tried to look busy while everyone else did their thing."} , 
        {"speaker": "M4L4MUt3", "text": "Plus I, like, forgot which of the <span class='hint-emphasis'>five</span> letters I was supposed to do... Hahaha..."} ,         
        {"speaker": "R3TRVR", "text": "..."} , 
        {"speaker": "M4L4MUt3", "text": "Anyway thanks for the rescue!"} , 
        [{choice: "Back at it then...", onclick: "level_up()"}],
    ])
}

function podle() {
    newText([
        {"speaker": "P0DL3", "text": "..."} , 
        {"speaker": "P0DL3", "text": "The Second Letter is <span class='hint-emphasis'>L</span>."} , 
        [{choice: "..!", onclick: "level_up()"}],
    ])
}

function doc() {
    newText([
        {"speaker": "D0C", "text": "Greetings, friend. Thank you for the assist."} , 
        {"speaker": "D0C", "text": "You're probably collecting what the crew found of the puzzle on board."} , 
        {"speaker": "D0C", "text": "I was very close, but I don't know so many words. <span class='hint-emphasis'>The third letter fits in the blank: ac_te</span>."} , 
        {"speaker": "D0C", "text": "Hopefully that helps; thank you for your service."} , 
        [{choice: "Thanks for your help!", onclick: "level_up()"}],
    ])
}

function boot() {
    newText([
        {"text": "You've fished... a boot?"} , 
        [{choice: "You know what? I like boots.", onclick: "level_up()"},{choice: "Reset Puzzle", onclick: "location.reload()"}],
    ])
}


const speakers = [retrvr, ozie, terier, malamute, podle, doc, boot];
var current_speaker = 0;



function level_up() {
    changeText(1);
    run();
}


function dog_speak() {
    speakers[current_speaker]();
    current_speaker++;
    if (current_speaker > speakers.length - 1) current_speaker = speakers.length - 1
}

