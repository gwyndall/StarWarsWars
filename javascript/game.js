function loadImgs() {
    bg();
    heroImgs();
    foeImgs();
    heroChoice();
    foeChoice();
    attack();
};

var heroName
var foeName
var heroHealth
var foeHealth
var heroAP
var foeAP
var heroAPbase

function bg() {

    var image = new Array();
    image[0] = "./images/wallpaper.jpg";
    image[1] = "./images/wallpaper2.jpg";
    image[2] = "./images/wallpaper3.jpg";

    var size = image.length;
    var x = Math.floor(size * Math.random())

    $('#backgroundImg').attr('background', image[x]);
};


function heroImgs() {

    var image = heroes;

    shuffle(image);

    for (let idx = 0; idx < 5; idx++) {
        // Add Hero pictures to screen
        $('#hero' + idx).attr('src', image[idx].image);
        $('#hero' + idx).attr('alt_ID', image[idx].name);
        $('#hero' + idx).attr('data-key', image[idx].key);
        $('#hero' + idx).attr('data-health', image[idx].health);
        $('#hero' + idx).attr('data-power', image[idx].attack);
        // Show Hero names in Label
        $('#hero' + idx).after('<figcaption>' + image[idx].name + '</figcaption>')
    }
}

function foeImgs() {

    var image = foes;
    shuffle(image);

    for (let idx = 0; idx < 5; idx++) {
        // Add enemy pictures and names 
        $('#enemy' + idx).attr('src', image[idx].image);
        $('#enemy' + idx).attr('alt_ID', image[idx].name);
        $('#enemy' + idx).attr('data-key', image[idx].key);
        $('#enemy' + idx).attr('data-health', image[idx].health);
        $('#enemy' + idx).attr('data-power', image[idx].attack);
        $('#enemy' + idx).after('<figcaption>' + image[idx].name + '</figcaption>')
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

// Hero and Enemy character arrays
var heroes = [
    droids = {
        key: 'droids',
        name: "The Droids",
        image: "./images/heroes/droids.jpg",
        health: 100,
        attack: 1,
    },
    finn = {
        key: 'finn',
        name: "Finn",
        image: "./images/heroes/finn.jpg",
        health: 100,
        attack: 1,
    },
    han = {
        key: 'han',
        name: "Han Solo",
        image: "./images/heroes/HanSolo.jpg",
        health: 100,
        attack: 1,

    },
    lando = {
        key: 'lando',
        name: "Lando Calrissian",
        image: "./images/heroes/Lando-Calrissian.jpg",
        health: 100,
        attack: 1,

    },
    maz = {
        key: 'maz',
        name: "Maz Kanata",
        image: "./images/heroes/MazKanata.jpg",
        health: 100,
        attack: 1,

    },
    poe = {
        key: 'poe',
        name: "Poe Dameron",
        image: "./images/heroes/poe-dameron.jpeg",
        health: 100,
        attack: 1,

    },
    leia = {
        key: 'leia',
        name: "Leia Organa",
        image: "./images/heroes/princess-leia.jpeg",
        health: 100,
        attack: 1,

    },
    rey = {
        key: 'rey',
        name: "Rey",
        image: "./images/heroes/rey.jpg",
        health: 100,
        attack: 1,

    }
];

var foes = [
    boba = {
        key: 'boba',
        name: "Boba Fett",
        image: "./images/enemies/bobafett.jpeg",
        health: 100,
        attack: 1,

    },
    phasma = {
        key: 'phasma',
        name: "Captain Phasma",
        image: "./images/enemies/CaptainPhasma.jpg",
        health: 100,
        attack: 2,

    },
    maul = {
        key: 'maul',
        name: "Darth Maul",
        image: "./images/enemies/DarthMaul.jpeg",
        health: 100,
        attack: 3,

    },
    vader = {
        key: 'vader',
        name: "Darth Vader",
        image: "./images/enemies/darthvader.jpeg",
        health: 100,
        attack: 4,

    },
    hux = {
        key: 'hux',
        name: "General Hux",
        image: "./images/enemies/generalHux.jpeg",
        health: 100,
        attack: 3,

    },
    greedo = {
        key: 'greedo',
        name: "Greedo",
        image: "./images/enemies/greedo.jpeg",
        health: 100,
        attack: 2,

    },
    jabba = {
        key: 'jabba',
        name: "Jabba the Hutt",
        image: "./images/enemies/jabbahutt.jpeg",
        health: 100,
        attack: 1,

    },
    kylo = {
        key: 'kylo',
        name: "Kylo Ren",
        image: "./images/enemies/kylo-ren.jpeg",
        health: 100,
        attack: 3,

    }
];


// User selects Hero player
// Hero goes to battlefield, other heroes hide

function heroChoice() {
    $("img.hero").click(function () {
        var imgSrc = ($(this).attr("src"));
        var imgKey = ($(this).attr("data-key"));
        heroHealth = ($(this).attr("data-health"));
        heroAP = parseInt($(this).attr("data-power"));
        heroAPbase = parseInt($(this).attr("data-power"));
        heroName = ($(this).attr("alt_ID"));

        $('#heroes').hide();
        $('#fighter').attr('src', imgSrc);
        $('#fighter').css('visibility', 'visible');
        $('#fighter').after('<figcaption class="health">Health: ' + heroHealth + '</figcaption>');
    });
};

// User selects foe,
// Foe goes to battlefield and orig copy of that foe hides
function foeChoice() {

    $("img.foe").click(function () {
        var imgSrc = ($(this).attr("src"));
        foeName = ($(this).attr("alt_ID"));
        foeHealth = ($(this).attr("data-health"));
        foeAP = ($(this).attr("data-power"));
        $(this).hide();
        $(this).next().css('display', 'none');
        $('#foe').attr('src', imgSrc);
        $('#foe').css('visibility', 'visible');
        $('.foeFig > figcaption').remove();
        $('#foe').after('<figcaption class="health"> Health: ' + foeHealth + '</figcaption>');

    });
};
// On attack, hero attack is calculated and subtracted from foe HP
function attack() {

    $("#Attack").click(function () {
        var damage = Math.floor(Math.random() * 100);
        var counteratk = Math.floor(Math.random() * 100);
        foeHealth -= (damage * heroAP);
        // Foe attack is calculated and subtracted from hero HP
        heroHealth -= (counteratk * foeAP);
        //Update health bars  
        $('.heroFig > figcaption').remove();
        $('#fighter').after('<figcaption class="health">Health: ' + heroHealth + '</figcaption>');
        $('.foeFig > figcaption').remove();
        $('#foe').after('<figcaption class="health"> Health: ' + foeHealth + '</figcaption>');
        $('#combatText').html('You hit ' + foeName + ' for ' + damage*heroAP + ' points! <br> They hit you for ' + counteratk*foeAP + ' points.');
        if (heroHealth < 1) {
            //message Sorry, You Lost!
            $('#combatStatus').html('Sorry, you lose!  Play again?');
            $('#Attack').replaceWith('<button id="reset" onclick="reset()">Reset</button>');
        } else if (heroHealth > 0 && foeHealth > 0) {
            $('#combatStatus').html('Attack again!');
            heroAP += heroAPbase;
            console.log(heroAP);
        } else {
            $('#combatStatus').html('Congratulations! You killed ' + foeName + '. Select another foe!');
            heroAP += heroAPbase;
            console.log(heroAP);
        }
    });
};

function reset() {

    console.log('reset');
    location.reload();
}

// Need code to block user from just clicking through opponents without fighting them

// Once all 4 foes are vanquished, declare VICTORY! Play again button resets game.
// Need code to reset with button