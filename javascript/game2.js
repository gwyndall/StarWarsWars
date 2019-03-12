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
    for (let idx = 0; idx < 5; idx++) {

        var image = new Array();
        image[0] = droids.image;
        image[1] = finn.image;
        image[2] = han.image;
        image[3] = lando.image;
        image[4] = maz.image;
        image[5] = poe.image;
        image[6] = leia.image;
        image[7] = rey.image;

        var size = image.length
        var x = Math.floor(size * Math.random())

        $('#hero' + idx).attr('src', image[x]);
    }
}

function foeImgs() {

    var image = new Array();
    image[0] = boba.image;
    image[1] = phasma.image;
    image[2] = maul.image;
    image[3] = vader.image;
    image[4] = hux.image;
    image[5] = greedo.image;
    image[6] = jabba.image;
    image[7] = kylo.image;

    shuffle(image);

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

        console.log(array);
        for (let idx = 0; idx < 5; idx++) {
            
            // var size = image.length
            // var x = Math.floor(size * Math.random())
            
            $('#enemy' + idx).attr('src', image[x]);
        }
    }
}



var droids = {
    name: "The Droids",
    image: "./images/heroes/droids.jpg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var finn = {
    name: "Finn",
    image: "./images/heroes/finn.jpg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var han = {
    name: "Han Solo",
    image: "./images/heroes/HanSolo.jpg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var lando = {
    name: "Lando Calrissian",
    image: "./images/heroes/Lando-Calrissian.jpg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var maz = {
    name: "Maz Kanata",
    image: "./images/heroes/MazKanata.jpg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var poe = {
    name: "Poe Dameron",
    image: "./images/heroes/poe-dameron.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var leia = {
    name: "Leia Organa",
    image: "./images/heroes/princess-leia.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var rey = {
    name: "Rey",
    image: "./images/heroes/rey.jpg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var boba = {
    name: "Boba Fett",
    image: "./images/enemies/bobafett.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var phasma = {
    name: "Captain Phasma",
    image: "./images/enemies/CaptainPhasma.jpg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var maul = {
    name: "Darth Maul",
    image: "./images/enemies/DarthMaul.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var vader = {
    name: "Darth Vader",
    image: "./images/enemies/darthvader.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var hux = {
    name: "General Hux",
    image: "./images/enemies/generalHux.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var greedo = {
    name: "Greedo",
    image: "./images/enemies/greedo.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var jabba = {
    name: "Jabba the Hutt",
    image: "./images/enemies/jabbahutt.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}
var kylo = {
    name: "Kylo Ren",
    image: "./images/enemies/kylo-ren.jpeg",
    health: 0,
    attack: 0,
    counterattack: 0,
}