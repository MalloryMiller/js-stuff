


function cvns_speak() {
    newText([
        {"speaker": "Cnvs", "text": "Hey, you must be the IT person they called in!"} , 
        {"speaker": "Cnvs", "text": "Usually I can keep these arcade cabinets up and running, but this one's really stumped me. Some kinda ransomware."} , 
        [{choice: "What's the issue.", onclick: "changeText(2)"},{choice: "I'll take a look now.", onclick: "changeText(7)"}],
        {"speaker": "Cnvs", "text": "Sure, sure, I'll say it again..."} , 
        {"speaker": "Cnvs", "text": "One day we come in and out Polybius machine is blaring: <span style='color: red'>'THE ANSWER MUST BE ELEMENTAL'</span> over and over."} , 
        {"speaker": "Cnvs", "text": "Had to bust the speakers just to make it stop..."} , 
        {"speaker": "Cnvs", "text": "Plus, of course, the game's unplayable now. I mean... just try to <span style='color: red'>dispense tickets with that button near the bottom of the machine.</span>"} , 
        {"speaker": "Cnvs", "text": "I... It's frankly beyond description. Never seen anything like it."},
        [{choice: "Sorry, could you run through the issue again?", onclick: "changeText(-5)"},{choice: "I'll take a look now.", onclick: "changeText(1)"}],
        {"speaker": "Cnvs", "text": "Cool, tell me how it goes."} 
    ])
}

