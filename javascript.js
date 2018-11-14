var quotesFirstPart = ['Don\'t cry because it\'s ', 'Be yourself; ', 'Keep your eyes open because ', 'A man who flies away because ', 'You know you\'re '];
var quotesSecondPart = ['everyone else ', ' over and ', 'the stars ', ' your feelings, ', 'may find that he has only taken ', 'someone who knows all about'];
var quotesThirdPart = ['smile because it happened.', 'don\'t be like a body without a soul.', 'stay on the ground.', 'that will meet it.', 'you and still loves you'];

var braveFirstPart = ['Success is not final, ', 'Fear cuts, ', 'Expose yourself to your deepest fear; ', 'Scared is what you\'re feeling,  ', 'Courage, '];
var braveSecondPart = [' failure is not fatal: it is the courage to continue ', ' deeper than ', ' after that, fear has no power, ', ' Brave is ', 'may find that he has only taken ', 'someone who knows '];
var braveThirdPart = [' that counts.', 'the fight', 'You are free.', ' your dream that comes true.', ' ,but doesn\t stop'];

var choice = 0;

function random_int_number() {
    "use strict";
    var fragment = null,
        int_fragment = null;
    
    function getRandom() {
        return Math.random();
    }
    fragment = getRandom();
    fragment = fragment * quotesFirstPart.length;
    
    function get_random_integer(fragment) {
        return Math.floor(fragment);
    }
    int_fragment = get_random_integer(fragment);
    
    return int_fragment;
}


function buildQuote() {
            var index_one = random_int_number(),
                index_two = random_int_number(),
                index_three = random_int_number(),
                quote = quotesFirstPart[index_one] + quotesSecondPart[index_two] + quotesThirdPart[index_three];
            return quote;
}

function buildBraveQuote(){
    var index_one = random_int_number(),
                index_two = random_int_number(),
                index_three = random_int_number(),
                quote = braveFirstPart[index_one] +braveSecondPart[index_two] + braveThirdPart[index_three];
            return quote;
}

// memorandum per dopo: ricorda che hai due funzioni di build, quindi nella funzione di sotto stai pensando di utilizzare uno switch, selezionando il valore del menu

function menuChoice(clicked) {
    choice=clicked;
}


function printMoreQuote() {
    var get_id = document.getElementById('numberOfQuote');
    var result = get_id.options[get_id.selectedIndex].value;
    
    
    for(i=0; i<5; i++){
        var x = document.getElementsByClassName("myText");
        cancel='';
        x[i].innerHTML =cancel;
    }
    
    switch(choice){
        case 0:
        for(i=0; i<result; i++){
        var x = document.getElementsByClassName("myText");
        quote=buildQuote();
        x[i].innerHTML = quote;
        }
            break;
        case 1:
        for(i=0; i<result; i++){
            var x = document.getElementsByClassName("myText");
            quote=buildBraveQuote();
            x[i].innerHTML = quote;
        }
            break;
    }
}


function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
