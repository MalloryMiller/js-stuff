
menu_items = {
    1: {
        'Item': "The Swiftie",
        'Description': "We're in our pizza era. This recipe from a Waco, TX university dates back to 1989.",
        'Image' : 'assets/pizza_not_found.svg',
    },
    2: {
        'Item': "The Prisoner",
        'Description': "This surreal pizza features many Spanish flavors to honor the artist that inspired it. You won't need to steal a loaf of bread after eating this pizza.",
        'Image' : 'assets/pizza_not_found.svg',
    },
    3: {
        'Item': "The Island",
        'Description': "This pizza is named for the island where it was created by a new immigrant to the US, who would later go on to become a popular Rock and Roller.",
        'Image' : 'assets/pizza_not_found.svg',
    },
    4: {
        'Item': "The High-schooler",
        'Description': "Inspired by 2017's best musical, an in-house pesto sauce is the 'Tsar' of this pie. Unlike its namesake, it's anything but terrible.",
        'Image' : 'assets/pizza_not_found.svg',
    },
    5: {
        'Item': "The Grandmaster",
        'Description': "Named after a one direction member and English singer, this pizza will checkmate your tastebuds like the 13th chess world champion.",
        'Image' : 'assets/pizza_not_found.svg',
    },
    6: {
        'Item': "The First Lady",
        'Description': "When not spending time with her husband Abe, this pizza's namesake founded a popular department store chain that hosts a parade on Thanksgiving Day.",
        'Image' : 'assets/pizza_not_found.svg',
    },
    7: {
        'Item': "The Scientist",
        'Description': "In addition to being a civil rights leader and journalist, the inspiration for this pizza also had time to write the first computer programs.",
        'Image' : 'assets/pizza_not_found.svg',
    },
    8: {
        'Item': "The Actor",
        'Description': "Hating this pizza doesn't make you a bad guy, but we'd prefer if you like it. You won't see many stranger things than this Grammy-winning pie.",
        'Image' : 'assets/pizza_not_found.svg',
    },

}



function show_item(id) {
    var list = document.getElementById('menu-item-list');
    var content = ""

    content += "<div class='item-display'>"
    content += "<button class='pizza-menu-back-button' onclick='load_menu_items( "+ list.scrollTop +")'>Back</button> <br />"

    content += "<div class='item-content'> <image src='" + menu_items[id].Image + "' />"
    content += " <h1>#" + id + " " + String(menu_items[id].Item) + "</h1> <div class='description'>" + String(menu_items[id].Description) + " </div>"
    content += "</div>"

    content+= "</div>"
    list.innerHTML = content;
}



function make_item_button(id) {
    var button = "<button onclick='show_item(" + id + ")' class='menu-item button' >"
    button += "<image src='" + menu_items[id].Image + "' style='transform: rotate3d(" + (Math.random()-.5) + ", " + (Math.random()-.5) + ", " + ((Math.random()-.5)*.1) + ", 35deg)'/>"
    button += " <h2>#" + id + " " + String(menu_items[id].Item) + "</h2></button>"

    return(button)
}


function get_logo_image(){
    return('<img alt="Parsec Pizza" src="assets/pizza_logo.svg" />')
}



function load_menu_items(previous_scrollTop = 0) {
    var list = document.getElementById('menu-item-list');
    var content = "<div id = pizza-mini-navbar>" +  get_logo_image() + "Menu" + "</div>"

    for (i in menu_items) {
        content += make_item_button(i)
    }

    list.innerHTML = content;
    list.scrollTo(0, previous_scrollTop)
    
}


