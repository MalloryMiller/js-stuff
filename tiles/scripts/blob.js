
function blob_speak() {
    newText([
        {"speaker": "Galgeroth", pose: "happy", "text": "hallo"}, 
        {"speaker": "Galgeroth", pose: "sad", "text": "i am having bad time with preenter"}, 
        {"speaker": "Galgeroth", "text": "the interface is of slime but it has more information that you should write down", onclick: "changeText(2)"}, 
        {"speaker": "Galgeroth", pose: "sad", "text": "sure"}, 
        {"speaker": "Galgeroth", "text": "<span class='red-accent'>red:</span> brick wall, impassible"}, 
        {"speaker": "Galgeroth", "text": "<span class='white-accent'>white:</span> stone path, always passible"}, 
        {"speaker": "Galgeroth", "text": "<span class='purple-accent'>purple:</span> nighttime, you must wait till night to continue past this tile, stepping on this tile functionally makes it night"}, 
        {"speaker": "Galgeroth", "text": "<span class='yellow-accent'>yellow:</span> daytime, you must wait till day to continue past this tile, stepping on this tile functionally makes it day"}, 
        {"speaker": "Galgeroth", "text": "<span class='orange-accent'>orange:</span> springboard, when stepped on will launch you past the next tile you would have continued to if you continued walking the same direction <br /> You do not step on the tile you launched past, instead landing on the tile after <br /> if the tile you would land on does not exist or would be impassible, this tile is as well"}, 
        {"speaker": "Galgeroth", "text": "<span class='blue-accent'>blue:</span> water, At night the jellyfish are sleeping, but the springboard can wake them up <br /> if you wake them up they attack you, so the tile is impassible <br /> can be passed through unless it is day or you enter from a springboard"}, 
        {"speaker": "Galgeroth", "text": "<span class='green-accent'>green:</span> high grass, impassible at night due to large common krait populations, but passible during the day <br /> if an adjascent tile is blue, this tile becomes waterlogged, making it completely impassible as it also contains jellyfish"}, 
        [{choice: "Sorry, could you repeat the rules again?", onclick: "changeText(-8)"},{choice: "Got it, thanks!", onclick: "changeText(10)"}],
    ])
}
