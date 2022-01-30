
/* Define a list of faction choices */
var smashup = [
    {
        "name" : "Smash Up",
        "box" : "smashup.jpg",
        "status" : true,
        "factions" : [
            {
                "name" : "Aliens",
                "icon" : "aliens.webp",
                "art" : "aliens.webp",
                "card" : "invader.webp"
            },
            {
                "name" : "Dinosaurs",
                "icon" : "dinosaurs.webp",  
                "art" : "dinosaurs.webp",
                "card" : "war-raptor.webp"
            },
            {
                "name" : "Ninjas",
                "icon" : "ninjas.webp",  
                "art" : "ninjas.webp",
                "card" : "tiger-assassin.webp"
            },
            {
                "name" : "Pirates",
                "icon" : "pirates.webp",  
                "art" : "pirates.webp",
                "card" : "pirate-king.webp"
            },
            {
                "name" : "Robots",
                "icon" : "robots.webp",  
                "art" : "robots.webp",
                "card" : "zapbot.webp"
            },
            {
                "name" : "Tricksters",
                "icon" : "tricksters.webp",  
                "art" : "flame-trap.webp",
                "card" : "war-raptor.webp"
            },
            {
                "name" : "Wizards",
                "icon" : "wizards.webp",  
                "art" : "wizards.webp",
                "card" : "neophyte.webp"
            },
            {
                "name" : "Zombies",
                "icon" : "zombies.webp",  
                "art" : "zombies.webp",
                "card" : "war-raptor.webp"
            }
        ]
    },
    {
        "name" : "Awesome Level 9000",
        "box" : "awesome-level-9000.webp",
        "status" : true,
        "factions" : [
            {
                "name" : "Bear Calvary",
                "icon" : "bear-cavalry.webp",  
                "art" : "bear-cavalry.webp",
                "card" : "war-raptor.webp"
            },
            {
                "name" : "Ghosts",
                "icon" : "ghosts.webp",  
                "art" : "ghosts.webp",
                "card" : "ghost.webp"
            },
            {
                "name" : "Killer Plants",
                "icon" : "killer-plants.webp",  
                "art" : "killer-plants.webp",
                "card" : "water-lily.webp"
            },
            {
                "name" : "Steampunks",
                "icon" : "steampunks.png",  
                "art" : "steampunks.png",
                "card" : "escape-hatch.webp"
            }
        ]
    },
    {
        "name" : "The Obligatory Cthulhu Set",
        "box" : "cthulhu.webp",
        "status" : true,
        "factions" : [
            {
                "name" : "Elder Things",
                "icon" : "elder-things.png",  
                "art" : "elder-things.png",
                "card" : "elder-thing.jpg"
            },
            {
                "name" : "Innsmouth",
                "icon" : "innsmouth.png",  
                "art" : "innsmouth.png",
                "card" : "the-locals.jpg"
            },
            {
                "name" : "Minions of Cthulhu",
                "icon" : "cthulhu.png",  
                "art" : "cthulhu.png",
                "card" : "whispers-in-darkness.jpg"
            },
            {
                "name" : "Miskatonic University",
                "icon" : "miskatonic-university.png",  
                "art" : "miskatonic-university.png",
                "card" : "librarian.jpg"
            }
        ]
    }
];

/* *********************************************************** */
/* Define functions */

function getResults()
{

    results.innerHTML = "";    
    factionResults = new Array();

    for(var i = 0; i < playerCountChoice; i++)
    {

        factionResults[i] = new Array();
        factionResults[i][0] = randomFaction();
        factionResults[i][1] = randomFaction();

        results.innerHTML += "<p>Player " + (i + 1) + "</p>";
        results.innerHTML += factionCard(factionResults[i][0]);
        results.innerHTML += factionCard(factionResults[i][1]);

    }

}

function factionInfo(id)
{

    for(var i = 0; i < smashup.length; i++)
    {
        if(id >= smashup[i].factions.length)
        {
            id -= smashup[i].factions.length;
        }
        else
        {
            // console.log(smashup[i].factions[id]);
            // console.log(id);
            return smashup[i].factions[id];
        }
    }

}

function factionCard(id)
{

    var info = factionInfo(id);

    return '<div class="card">' +
        info.name + 
        '<br>' + 
        '<img src="images/icons/' + info.icon + '">' + 
        '</div>';

}

function factionSelected(id)
{

    for(var i = 0; i < factionResults.length; i++)
    {
        for(var j = 0; j < factionResults[i].length; j++)
        {
            if(factionResults[i][j] == id) return true;
        }
    }

    return false;

}

function caculateTotalFactions()
{

    totalFactions = 0;

    for(var i = 0; i < smashup.length; i++)
    {
        if(smashup[i].status == true )
        {
            totalFactions += smashup[i].factions.length;
        }
    }

}

function randomFaction()
{

    do
    {
        var factionChoice = Math.floor(Math.random() * totalFactions);
    }
    while(factionSelected(factionChoice) == true);

    return factionChoice;

}

/* *********************************************************** */
/* Setup */

var totalFactions = 0;
caculateTotalFactions();
var factionResults = new Array();

/* *********************************************************** */
/* Intro */

var headerNext = document.getElementById("header-next");
headerNext.addEventListener("click", function(){

    window.location.hash = 'step-1';

});

/* *********************************************************** */
/* *********************************************************** */
/* *********************************************************** */
/* Step 1: Visitor chooses number of players */

// Define the elements required for this step
var playerCountPlus = document.getElementById("player-count-plus");
var playerCountMinus = document.getElementById("player-count-minus");
var playerCount = document.getElementById("player-count");

// Define other variables
var playerCountChoice = 2;
playerCount.innerHTML = playerCountChoice;

// React to a plus or minus click
playerCountPlus.addEventListener("click", function(){

    if(playerCountChoice < 8)
    {
        playerCountChoice++;
    }
    else
    {
        // Display an error message
    }    

    playerCount.innerHTML = playerCountChoice;

});

playerCountMinus.addEventListener("click", function(){

    if(playerCountChoice > 2)
    {
        playerCountChoice--;
    }
    else
    {
        // Display an error message
    }    

    playerCount.innerHTML = playerCountChoice;

});

// React to a continue click
var step1Previous = document.getElementById("step-1-previous");
step1Previous.addEventListener("click", function(){

    window.location.hash = 'intro';

});

var step1Next = document.getElementById("step-1-next");
step1Next.addEventListener("click", function(){

    window.location.hash = 'step-2';

});

/* *********************************************************** */
/* *********************************************************** */
/* *********************************************************** */
/* Step 2: Visitor chooses expansions */

// Define the elements required for this step
var expansions = document.getElementById("expansions");

for(var i = 0; i < smashup.length; i ++)
{
    expansions.innerHTML += "<div class='box selected' onclick='selectBox(" + i + 
        ");'><img src='images/boxes/" +
        smashup[i]['box'] + "' height='200'></div>";
}

function selectBox(id)
{

    var box = document.querySelector(".box:nth-child(" + (id + 1) + ")");

    if(smashup[id].status == true)
    {
        smashup[id].status = false;
        box.classList.remove("selected");
    }
    else
    {
        smashup[id].status = true;
        box.classList.add("selected");
    }

    caculateTotalFactions();
    
}

// React to a continue click
var step2Previous = document.getElementById("step-2-previous");
step2Previous.addEventListener("click", function(){

    window.location.hash = 'step-1';

});

var step2Next = document.getElementById("step-2-next");
step2Next.addEventListener("click", function(){

    window.location.hash = 'step-3';

    getResults();

});

/* *********************************************************** */
/* *********************************************************** */
/* *********************************************************** */
/* Step 3: Results */

var results = document.getElementById("results");

// React to a continue click
var step3Previous = document.getElementById("step-3-previous");
step3Previous.addEventListener("click", function(){

    window.location.hash = 'step-2';

});

var step3Next = document.getElementById("step-3-next");
step3Next.addEventListener("click", function(){

    window.location.hash = 'intro';

});