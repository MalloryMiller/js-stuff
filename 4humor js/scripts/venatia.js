


function venatia_speak() {
    newText([
        {"speaker": "Venatia", pose: "happy", "text": "Hey, you must be the IT person they called in!"} , 
        {"speaker": "Venatia", "text": "Usually I can keep these arcade cabinets up and running, but this one's really stumped me. Some kinda ransomware."} , 
        [{choice: "What's the issue.", onclick: "changeText(2)"},{choice: "I'll take a look now.", onclick: "changeText(7)"}],
        {"speaker": "Venatia", "text": "Sure, sure, I'll say it again..."} , 
        {"speaker": "Venatia", pose: "confused", "text": "One day we come in and our Polybius machine is blaring: <span style='color: red'>'THE ANSWER MUST BE ELEMENTAL'</span> over and over."} , 
        {"speaker": "Venatia", pose: "happy", "text": "Had to bust the speakers just to make it stop..."} , 
        {"speaker": "Venatia", "text": "Plus, of course, the game's unplayable now. I mean... just try to <span style='color: red'>dispense tickets with that button near the bottom of the machine.</span>"} , 
        {"speaker": "Venatia", pose: "confused", "text": "I... It's frankly beyond description. Never seen anything like it."},
        [{choice: "Sorry, could you run through the issue again?", onclick: "changeText(-5)"},{choice: "I'll take a look now.", onclick: "changeText(1)"}],
        {"speaker": "Venatia", "text": "Cool, tell me how it goes."} 
    ])
}
