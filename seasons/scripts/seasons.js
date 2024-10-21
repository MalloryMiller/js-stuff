

const poems = {
    0: "APPROACHING OUR END AS IT DRAWS NEAR\n\
    STOKING IN US THE CLEAREST FEAR.\n\
    MEANWHILE THE SKY WILL CHURN AND YEARN,\n\
    SPURNING ALL QUINARY EXTERNE.",

    1: "ONE QUIET AND LUMINOUS NIGHT\n\
    WITH PERFECT GLITTERING FRAUDULENCE,\n\
    RAYS KNIT BEAMS OF FINE EFFULGENCE\n\
    SHONE IN PENTAGONAL SHARDS OF LIGHT.",

    2: "GIVE EACH OF THESE MANY FEW\n\
    THEIR DUE BLOSSOMING TIME TOO, \n\
    FOR THE RIPEST OF ANY EXPRESSIONS\n\
    LEAVE THE STRONGEST OF IMPRESSIONS.",

    3: "IN THE DEPTHS OF YOUR MIND SUSPEND\n\
    NINE CONCENTRIC CIRCLES THAT BLEND AND REND.\n\
    SPEND DAYS AND NIGHTS OF YOUR LIFE MENDING\n\
    FROM SHATTERED PIECES A TRUE, PURE ENDING.",

    4: "FORTHCOMING FROM THESE AUBURN TREES\n\
    THE LEAVES SHUFFLE UPON THE BREEZE.\n\
    IF THE SOUTHERN WIND IS GRACIOUS,\n\
    PERHAPS IT WILL HAVE SUFFICIENT PATIENCE.",

    5: "STRUCK DOWN BY OUR SHRINE'S OWN CRIME\n\
    AS BELLS IN THE CHURCH SING DIVINE,\n\
    I AWAIT YOU NOW, THE PERFECT CHIME.\n\
    AFTER MY PATIENCE, THERE ARE ONLY NINE.",

    6: "THE SUN IN RETURN WILL NOW ADJOURN\n\
    AS THE HORIZON WILL CEASE TO BURN.\n\
    ENDEAVOR IN VAIN THE SIXTH FRONTIER,\n\
    HERE DO WE PATIENTLY DISAPPEAR.",
}


const seasons = {
    0: "schmorplorp",
    1: "winter",
    2: "spring",
    3: "pollination",
    4: "fall",
    5: "burning",
    6: "ash",
}


const date = new Date();
const day = date.getDay();

function setSeason(){    
    var poem = document.getElementById("poem")
    var body = document.getElementById("body")

    body.setAttribute("class", "season-background " + seasons[day])

    poem.innerHTML = poems[day].replaceAll("\n", "<br />")
    
}