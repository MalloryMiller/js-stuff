

//0: "schmorplorp",
//1: "winter",
//2: "spring",
//3: "pollination",
//4: "fall",
//5: "burning",
//6: "ash",


const season_desc = {
    0: "Schmorplorp is the cleansing time. Definitely the most dangerous time to be outdoors... Hope you're staying safe out there!",
    1: "Winter here is cold and sort of desolate... but peaceful. Beautiful in its own way.",
    2: "Spring is when we plant our crops. They grow fast, but planting early is vital to them sprouting on time.",
    3: "Pollination time is dreadful to go outside, but usually someone has to do it to tend the crops.",
    4: "Fall is when we have our harvest. You have to get to the crops fast to collect them all in time, because once the burning starts...",
    5: "The Burning is a religious time for many of our people. The fires represent both the joy and danger in the sponteneity of life.",
    6: "The Ash is seen by many as a time for rest. Unfortunately, with things going the way they are, its difficult to rest comfortably...",

}


function find_season() {  
    let all_cookies = decodeURIComponent(document.cookie).split(';');
    season = ""
    for (cookie of all_cookies) {

        if (cookie.includes("season=")) {
            season = cookie.split("=")[1];
        }
    }
    return season
}



function Betzalel() {
    let seen = find_season();
    console.log("last seen on " + seen)

    var intro = "Hello? Hello! I'm so glad to see someone's finally arrived!"
    var followup = "You must be with the IT people we called for... I would invite you in, but-"

    if (seen != "" && seen != seasons[day]) { // seen before on different day
        intro = "Ah! It's you from the <span class='hint-emphasis'>" + seen + "</span>! Good to see you again!";
        followup = "It's the <span class='hint-emphasis'>" + seasons[day] + "</span> now... how time flies, huh?";
    } else {
            
        if (seen != "") { // seen before on same day type
            intro = "Hello again!";
            followup = "Any progress?";
        }
    }

    newText([
        {"speaker": "Betzalel", pose: "happy", "text": intro} , 
        {"speaker": "Betzalel", "text": followup}, 
        [
            {choice: "What's the issue?", onclick: "changeText(1)"}, 
            {choice: "What's this poem next to the door?", onclick: "changeText(7)"}, 
            {choice: "Tell me about the current season.", onclick: "changeText(11)"}, 
            {choice: "Let me look around.", onclick: "seen()"}
        ],        
        {"speaker": "Betzalel", "text": "Ah! You see, The climate of our planet has become rather inhospitible, so our civilization relocated underground."}, 
        {"speaker": "Betzalel", pose: "sad", "text": "Unfortunately, we do need to leave our bunker for harvest and trade with other planets... But something terrible has happened to our doors!"}, 
        {"speaker": "Betzalel", "text": "They've locked themselves from the outside!"},
        {"speaker": "Betzalel", pose: "confused", "text": "Breaking the door down would expose us to the rapidly changing seasons' elements, but we only have so many rations..."},
        {"speaker": "Betzalel", "text": "Please, if there's any way you can fix this..."},  
        [
            {choice: "What's this poem next to the door?", onclick: "changeText(1)"}, 
            {choice: "Tell me about the current season.", onclick: "changeText(5)"}, 
            {choice: "Let me look around.", onclick: "seen()"}
        ],
        {"speaker": "Betzalel", pose: "confused", "text": "Poem... on the door? Sorry, you're a little muffled..."},  
        {"speaker": "Betzalel", "text": "There shouldn't be any 'poem' on the door. It should just display the <span class='hint-emphasis'>local date time</span>. You know, to help you figure out how long you can stay outside."},  
        {"speaker": "Betzalel", pose: "confused", "text": "That's awful strange... You should <span class='hint-emphasis'>write down what it says</span> just in case..."},  
        [
            {choice: "What's the issue?", onclick: "changeText(-9)"}, 
            {choice: "Tell me about the current season.", onclick: "changeText(1)"}, 
            {choice: "Let me look around.", onclick: "seen()"}
        ],
        {"speaker": "Betzalel", "text": "Well, right now it's the " + seasons[day] + " season."},  
        {"speaker": "Betzalel", pose: "sad", "text": season_desc[day]},  
        {"speaker": "Betzalel", pose: "confused", "text": "... You know, sometimes when I'm stumped on something it can help to take a break and <span class='hint-emphasis'>come back another time</span> with a fresh eye."}, 
        {"speaker": "Betzalel", "text": "Sometimes you can get so consumed with what you've already seen that you stop looking for what you're missing."},
        [
            {choice: "What's the issue?", onclick: "changeText(-14)"}, 
            {choice: "What's this poem next to the door?", onclick: "changeText(-8)"}, 
            {choice: "Let me look around.", onclick: "seen()"}
        ],
    ])
}

function seen() {
    //clearSeason();
    changeText(-40);
    var new_cookies = ""

    let all_cookies = decodeURIComponent(document.cookie).split(';');

    if (!document.cookie.includes("season=")) { // season's not already there
        document.cookie += "season=" + seasons[day] + ";";

    } else { // seasons already there

        document.cookie = ";"

        for (cookie of all_cookies) {
            if (cookie.includes("season=")) {
                new_cookies += "season=" + seasons[day] + "; "
            } else {
                new_cookies += cookie + ";"
            }
        }

    }
    document.cookie = new_cookies;
}


console.log(document.cookie)

function clearSeason() {
    let all_cookies = decodeURIComponent(document.cookie).split(';');
    document.cookie = ""

    for (cookie of all_cookies) {
        if (!cookie.includes("season=")) {
            document.cookie += cookie + ";"
        }text
    }
}