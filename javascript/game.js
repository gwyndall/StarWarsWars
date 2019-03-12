function loadImgs() {
    bg();
    heroImgs();
    foeImgs();
};

function bg() {

    var image = new Array();
    image[0] = "./images/wallpaper.jpg";
    image[1] = "./images/wallpaper2.jpg";
    image[2] = "./images/wallpaper3.jpg";

    var size = image.length
    var x = Math.floor(size * Math.random())

    $('#backgroundImg').attr('background', image[x]);
};

function heroImgs() {
    
    var image = new Array();
    image[0] = droids;
    image[1] = finn;
    image[2] = han;
    image[3] = lando;
    image[4] = maz;
    image[5] = poe;
    image[6] = leia;
    image[7] = rey;
    
    shuffle(image);

    for (let idx = 0; idx < 5; idx++) {

        $('#hero' + idx).attr('src', image[idx].image);
        // Show Hero and Enemy names in Label
        $('#hero' + idx).after('<label>'+ image[idx].name + '</label>')
    }
}

function foeImgs() {

    var image = new Array();
    image[0] = boba;
    image[1] = phasma;
    image[2] = maul;
    image[3] = vader;
    image[4] = hux;
    image[5] = greedo;
    image[6] = jabba;
    image[7] = kylo;
    
    shuffle(image);

    for (let idx = 0; idx < 5; idx++){

        $('#enemy' + idx).attr('src', image[idx].image);
        $('#enemy' + idx).after('<label>'+ image[idx].name + '</label>')
    }
}


function shuffle(array) { //from https://bost.ocks.org/mike/shuffle/
    var m = array.length,
        t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
}
var heroes = [
     droids = {
        name: "The Droids",
        image: "./images/heroes/droids.jpg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    finn = {
        name: "Finn",
        image: "./images/heroes/finn.jpg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    han = {
        name: "Han Solo",
        image: "./images/heroes/HanSolo.jpg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    lando = {
        name: "Lando Calrissian",
        image: "./images/heroes/Lando-Calrissian.jpg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    maz = {
        name: "Maz Kanata",
        image: "./images/heroes/MazKanata.jpg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    poe = {
        name: "Poe Dameron",
        image: "./images/heroes/poe-dameron.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    leia = {
        name: "Leia Organa",
        image: "./images/heroes/princess-leia.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    rey = {
        name: "Rey",
        image: "./images/heroes/rey.jpg",
        health: 0,
        attack: 0,
        counterattack: 0,
    }
];

var foes = [
    boba = {
        name: "Boba Fett",
        image: "./images/enemies/bobafett.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    phasma = {
        name: "Captain Phasma",
        image: "./images/enemies/CaptainPhasma.jpg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    maul = {
        name: "Darth Maul",
        image: "./images/enemies/DarthMaul.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    vader = {
        name: "Darth Vader",
        image: "./images/enemies/darthvader.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    hux = {
        name: "General Hux",
        image: "./images/enemies/generalHux.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    greedo = {
        name: "Greedo",
        image: "./images/enemies/greedo.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    jabba = {
        name: "Jabba the Hutt",
        image: "./images/enemies/jabbahutt.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    },
    kylo = {
        name: "Kylo Ren",
        image: "./images/enemies/kylo-ren.jpeg",
        health: 0,
        attack: 0,
        counterattack: 0,
    }
];


// User selects Hero player

// Hero goes to battlefield, other heroes hide
// $( "#hero0" ).click(function() {
//     alert( "Handler for .click() called." );
//   });

// User selects foe,

// Foe goes to battlefield and orig copy of that foe hides

// On attack, hero attack is calculated and subtracted from foe HP

// Foe attack is calculated and subtracted from hero HP

// Message results;

// If HP of both is above 0, attack again, increase Attack Points

// If hero HP <= 0, You Died! Play again button resets game.

// If foe HP and NOT hero HP <= 0, You win!  Choose your next opponent!

 

// Once all 4 foes are vanquished, declare VICTORY! Play again button resets game.