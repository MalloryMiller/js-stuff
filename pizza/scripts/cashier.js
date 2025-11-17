
function cashier_speak() {
    newText([
        {"speaker": "Cashier", pose: "thinking", "text": "Welcome to Parsec Pizza. Longest delivery range in the Quadrant."}, 
        {"speaker": "Cashier", "text": "Due to technical difficulties we are currently closed. We appologize for the inconvenience."}, 
        [{choice: "What's the technical difficulty?", onclick: "changeText(1)"},{choice: "Alright, sorry to bother you.", onclick: "changeText(10)"}],
        {"speaker": "Cashier", pose: "reading", "text": "Oh, wait, are you the tech support we called?"}, 
        {"speaker": "Cashier", pose: "thinking",  "text": "Okay, so, for some reason our ordering system is acting up. All of the names and descriptions of the pizzas are... just wrong."},  
        {"speaker": "Cashier", "text": "You can go look at our menu to see for yourself. You can click on the red boxes to see the descriptions for each different pizza."},  
        {"speaker": "Cashier", pose: "thinking",  "text": "Anyway, uh... This will probably take at least all day to fix, right?"},  
        [{choice: "No, this shouldn't take long.", onclick: "changeText(4)"},{choice: "Yeah, it probably will take all day.", onclick: "changeText(1)"}],
        
        {"speaker": "Cashier", pose: "reading", "text": "Wow, you really think so!?"}, 
        {"speaker": "Cashier", "text": "Haha. Nice."}, 
        {"speaker": "Cashier", pose: "thinking", "text": "Ahem, uh, I mean you've got this. Take your time.", onclick: "changeText(2)"}, 
        {"speaker": "Cashier", "text": "<span style='font-style: italic; opacity:.5'>Sigh...</span> Oh well. I'll just savor the time I have left."}, 
        {"speaker": "Cashier", "text": "We hope you had a Positively Perfect purchase at Parsec Pizza."}, 
    ])
}
