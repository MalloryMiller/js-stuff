
function pilgrim_speak() {
    newText([
        {"speaker": "Pilgrim Dapeng", pose: "confused", "text": "Welcome to Parsec Pizza. Longest delivery range in the Quadrant."}, 
        {"speaker": "Pilgrim Dapeng", "text": "Due to technical difficulties we are currently closed. We appologize for the inconvenience."}, 
        {"speaker": "Pilgrim Dapeng", pose: "happy", "text": "Due to technical difficulties we are currently closed. We appologize for the inconvenience."}, 
        [{choice: "What's the technical difficulty?", onclick: "changeText(1)"},{choice: "Alright, sorry to bother you.", onclick: "changeText(10)"}],
    ])
}
