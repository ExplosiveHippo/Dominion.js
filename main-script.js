////////////////////////////////////
/////// Creating Card Class ////////
////////////////////////////////////


function Card(name, actions, buys, cost, worth, points, cards, image, smallImage, remaining, type, special) {
    this.name = name; //Card name
    this.actions = actions; //How many actions the card gives you
    this.buys = buys; //How many more buys it gives you
    this.cost = cost; //The cost to buy the card
    this.worth = worth; //How many + treasure it gives you
    this.points = points; //How many victory points its worth
    this.cards = cards; //How many cards you can draw
    this.image = image; //card image
    this.smallImage = smallImage; //small image for the top cards (where you buy)
    this.remaining = remaining; // How many remain in deck
    this.type = type; // Type of card (treasure, victory, action)
    this.special = special; //Any special abilities
}




//////////////////////////////////////
////// Instances of Card objects /////
//////////////////////////////////////


//Treasures
/////////////////////// Name, Actions, Buys, Cost, Worth, Points, Cards, Images, remaining, type, special
var copper = new Card('Copper', 0, 0, 0, 1, 0, 0, 'CardImages/copper.jpg', 'CardImages/small/copper.png', 30, 'treasure','');
var silver = new Card('Silver', 0, 0, 3, 2, 0, 0, 'CardImages/silver.jpg', 'CardImages/small/silver.png', 20, 'treasure','');
var gold = new Card('Gold', 0, 0, 6, 3, 0, 0, 'CardImages/gold.jpg', 'CardImages/small/gold.png', 15, 'treasure','');

//Victory Points
var estate = new Card('Estate', 0, 0, 2, 0, 1, 0, 'CardImages/estate.jpg', 'CardImages/small/estate.png', 30, 'victory','');
var Duchy = new Card('Duchy', 0, 0, 5, 0, 3, 0, 'CardImages/duchy.jpg', 'CardImages/small/duchy.png', 10, 'victory','');
var province = new Card('Province', 0, 0, 8, 0, 6, 0, 'CardImages/province.jpg', 'CardImages/small/province.png', 8, 'victory','');

//Action Cards
/////////////////////// Name, Actions, Buys, Cost, Worth, Points, Cards, Images, remaining, type, special
var chancellor = new Card('Chancellor', 0, 0, 3, 2, 0, 0, 'CardImages/chancellor.jpg', 'CardImages/small/chancellor.png', 10, 'action','');
var councilroom = new Card('Council Room', 0, 1, 5, 0, 0, 4, 'CardImages/councilroom.jpg', 'CardImages/small/councilroom.png', 10, 'action','');
var festival = new Card('Festival', 2, 1, 5, 2, 0, 0, 'CardImages/festival.jpg', 'CardImages/small/festival.png', 10, 'action','');
var grandmarket = new Card('Grand Market', 1, 1, 6, 2, 0, 1, 'CardImages/grandmarket.jpg', 'CardImages/small/grandmarket.png', 10, 'action','');
var laboratory = new Card('Laboratory', 2, 0, 5, 0, 0, 2, 'CardImages/laboratory.jpg', 'CardImages/small/laboratory.png', 10, 'action','');
var market = new Card('Market', 1, 1, 5, 1, 0, 1, 'CardImages/market.jpg', 'CardImages/small/market.png', 10, 'action','');
var smithy = new Card('Smithy', 0, 0, 4, 0, 0, 3, 'CardImages/smithy.jpg', 'CardImages/small/smithy.png', 10, 'action','');
var village = new Card('Village', 2, 0, 3, 0, 0, 1, 'CardImages/village.jpg', 'CardImages/small/village.png', 10, 'action','');
var woodcutter = new Card('Wood Cutter', 0, 1, 3, 2, 0, 0, 'CardImages/woodcutter.jpg', 'CardImages/small/woodcutter.png', 10, 'action','');
var workersvillage = new Card('Workers Village', 2, 1, 4, 0, 0, 1, 'CardImages/workersvillage.jpg', 'CardImages/small/workersvillage.png', 10, 'action','');
var oasis = new Card('Oasis', 1, 0, 5, 1, 0, 1, 'CardImages/oasis.jpg', 'CardImages/small/oasis.png', 10, 'action','');
var margrave = new Card('Margrave', 0, 1, 5, 0, 0, 3, 'CardImages/margrave.jpg', 'CardImages/small/margrave.png', 10, 'action','');
var bazaar = new Card('Bazaar', 2, 0, 5, 1, 0, 1, 'CardImages/bazaar.jpg', 'CardImages/small/bazaar.png', 10, 'action','');
var cache = new Card('Cache', 0, 0, 5, 3, 0, 0, 'CardImages/cache.jpg', 'CardImages/small/cache.png', 10, 'treasure','When you buy this card you also gain 2 coppers');
var garden = new Card('Garden', 0, 0, 4, 0, 0, 0, 'CardImages/garden.jpg', 'CardImages/small/garden.png', 10, 'victory','Worth 1 victory point for every 10 cards in your hand');


//Create deck (All cards bought go in this array)
var deck = []; //what we are drawing from

var discard = []; // Players discard pile (bought cards go in here)

//Array to hold current 5 cards in hard
var hand = [];


////////////////////////////////////////////////////
		       // AI Variables  //
////////////////////////////////////////////////////

var AIdeck = [];

var AIdiscard = [];

var AIhand = [];

var AIbuyableCards = []; //This array will be populated with cards the AI can buy and then one card will be selected from it.

var AIplayableCards = [] // This array will be populated with cards from the AI's hand that are action cards

var AIactions = 1;

var AIbuys = 1;

var AItotalTreasure = 0;

var AIfinalScore = 0;

var turn = 0; // This just keeps track of the turn for the console.

var AIfinalScore = 0;

////////////////////// END AI VARIABLES /////////////



var actionCards = [chancellor, councilroom, smithy, village, oasis, margrave, garden, cache, bazaar, festival, laboratory, market, grandmarket];

actionCards = randomizeActions(actionCards);

actionCards.push(copper, silver, gold, estate, Duchy, province);

var actions = 1;
var buys = 1;

var totalTreasure = 0; //Default value for totalTreasure. Will be updated

var finalScore = 0; //Will hold the final Score

window.onload = createDeck();
window.onload = initAI();




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////// START INITIALIZING FUNCTIONS (GAME SETUP) /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////
/////////////// START TIMER FUNCTIONS ///////////////////////
/////////////////////////////////////////////////////////////

/* FOUND MOST OF THIS TIMER CODE AT forum.codecall.net*/

//CALL CREATE TIMER ON LOAD. PASS IT OUR TIMER ID AND TIME IN SECONDS (10 MINUTES)


var Timer;
var TotalSeconds;


function CreateTimer(TimerID, Time) {
    Timer = document.getElementById(TimerID);
    TotalSeconds = Time;
    window.setTimeout("Tick()", 1000); //CALL TICK EVERY SECOND
    UpdateTimer();
}

function Tick() {
    //WHEN TIMER RUNS OUT TELL THEM TIMES UP AND DISPLAY SCORE
    if (TotalSeconds <= 0) {
        finalScore = calcScore();
        var AIfinalScore = calcAIScore();
        console.log("AI final score is: " +AIfinalScore);

        var winloss = document.getElementById('winloss');

        //Check to see who won and print appropriate message
        if(finalScore > AIfinalScore){
	        winloss.innerHTML = "You Win!";
        }else if(finalScore == AIfinalScore){
	        winloss.innerHTML = "You tied the AI!";
        }else{
	        winloss.innerHTML = "Sorry, AI won!";
        }

        var playerScore = document.getElementById('playerscore');
        playerScore.innerHTML = finalScore;

        var AIscore = document.getElementById('aiscore');
        AIscore.innerHTML = AIfinalScore;


        var scoreHidden = document.getElementById('scorehidden');
        scoreHidden.value = finalScore;

        $("#addscorebtn").click(function () {
            var name = $("#name-field").val();
            addScore(finalScore, name);
        });

        document.getElementById('score').style.visibility = 'visible';

        // Remove all the buy buttons
        for (var i = 0; i < actionCards.length; i++) {
            document.getElementsByClassName('buybtn')[i].style.visibility = "hidden"; // Then set the buybtn to hidden
        }

        //Remove all the play buttons
        for (var i = 0; i < hand.length; i++) {
            if (hand[i].type == 'action') {
                $('.playbtn').css("visibility", "hidden");
            }

        }
        //document.getElementsByClassName('buybtn').style.visibility="hidden";

        return;
    }

    //DECREASE TIME BY 1 SEC.
    TotalSeconds -= 1;
    UpdateTimer(); //UPDATE THE TIMER DIV
    window.setTimeout("Tick()", 1000);
}


// most of this is to format the timer like : 00:00:00
function UpdateTimer() {
    var Seconds = TotalSeconds;

    var Days = Math.floor(Seconds / 86400);
    Seconds -= Days * 86400;

    var Hours = Math.floor(Seconds / 3600);
    Seconds -= Hours * (3600);

    var Minutes = Math.floor(Seconds / 60);
    Seconds -= Minutes * (60);


    var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)

    //Update timer
    Timer.innerHTML = TimeStr + " Left";
}

//Adds a 0 to the timer elements to make it appear as a 60 second timer
function LeadingZero(Time) {

    return (Time < 10) ? "0" + Time : +Time;

}



///////////////////////////////////////////////////
//////////// CREATE ACTION CARDS //////////////////
///////////////////////////////////////////////////

function createActions() {
    for (var i = 0; i < actionCards.length; i++) {
        var container = document.createElement('div');
        container.setAttribute('class', 'singleActionCardDiv');
        var card = new Image();

        //Create the coin icon and append the cost of the card to it
        var costP = document.createElement('p');
        costP.setAttribute('class', 'costValue');
        var costText = document.createTextNode(actionCards[i].cost);
        costP.appendChild(costText);
        container.appendChild(costP);

        // The small image src (will show large image when clicked)
        card.src = actionCards[i].smallImage;



        var buyCard = new Image();
        buyCard.setAttribute('class', 'buybtn')
        buyCard.src = 'images/buy-btn.png';
        buyCard.style.visibility = 'hidden';
        container.appendChild(buyCard);


        // If they have a buy then when they click on a buy button then that card object is passed to purchaseCard (which will add it to discard array among other things)
        if (buys > 0) {
            buyCard.addEventListener('click', function () {
                purchaseCard(this);
            }.bind(actionCards[i]), false);
        }

        //This function allows the user to click on an image and get info about the card
        card.addEventListener('click', function () {
            setImage(this);
        }.bind(actionCards[i]), false);

        container.appendChild(card);
        document.getElementById('action-cards').appendChild(container);

    }

}


function setImage(currentCard) {
    if (currentCard.type == 'action') {
        alert(currentCard.name + '\n +' + currentCard.cards + ' Cards\n +' + currentCard.actions + " Actions\n +" + currentCard.worth + " Extra Treasure\n +" + currentCard.buys + " Buys\n\n" + currentCard.special);
    } else if (currentCard.type == 'treasure') {
        alert(currentCard.name + '\n' + currentCard.worth + " Treasure\n\n" + currentCard.special);
    } else if (currentCard.name == 'Garden') {
        alert(currentCard.name + '\n\n' +  currentCard.special);
    }else{
	    alert(currentCard.name + '\n' + currentCard.points + " Victory Points\n\n" + currentCard.special);
    }
}




//////////////////////////////////////////////////////////////
////// Create initial deck with 7 coppers and 3 estates //////
//////////////////////////////////////////////////////////////

function createDeck() {

    // Event listener for start button. When they click it hide the welcome window and start the timer
    $("#startbtn").click(function () {
        $('#welcome').css("visibility", "hidden");
        CreateTimer("timer", 600);
    });

    //Event listener to trigger AJAX call and return the scoreboard
    $("#scoreboardbtn").click(function () {
        var url = 'scoreboard.php';
        $.post(url, {}, function (data) {
            $('#welcome').html(data).show();
        });
    });

    $("#endturn").click(function () {
        clearHand();
    });


    //Put the initial copper and estates into the deck
    for (var c = 0; c < 7; c++) {
        deck.push(copper);
    }

    for (var e = 0; e < 3; e++) {
        deck.push(estate);
    }

    // Call Function to create the action cards (also leads to our buy buttons being created.)
    createActions();

    //Take starting hand and shuffle it up
    deck = Shuffle(deck); //Initial shuffle

    //Staring hand drawn
    drawFive(deck);
}



//////////////////////////////////////////////
/////// Function to shuffle our deck /////////
//////////////////////////////////////////////


//Just a randomizer function. Found on csstricks (can't link the url in comments. I'll include it on submit)
function Shuffle(deck) {
    for (var j, x, i = deck.length; i; j = parseInt(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
    return deck;

}


function randomizeActions(actionCards){
	for (var j, x, i = actionCards.length; i; j = parseInt(Math.random() * i), x = actionCards[--i], actionCards[i] = actionCards[j], actionCards[j] = x);
	actionCards = actionCards.slice(0,10);
    return actionCards;
}



////////////////////////////////////////////
/////////// DRAW 5 CARDS INTO HAND /////////
////////////////////////////////////////////

//This function handles all the object manipulation (behind the scenes stuff)

function drawFive(deck) {
    actions = 1; //Always can play at least one action
    buys = 1; //Always can buy at least once

    //If the deck is lover than 5 then shuffle in the discard cards to rebuild our deck
    if (deck.length < 5) {
        deck = Shuffle(discard);
    }

    // get 5 cards from our deck
    for (var i = 0; i < 5; i++) {
        hand[i] = deck.shift();
    }

    // Call display hand and pass it our hand array...also tell it that we are at the init stage (only show 5 cards)
    displayHand(hand, 'init');
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////// END INITIALIZING FUNCTIONS (GAME SETUP) ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// This function handles the actual display of the hands using the objects we got from drawFive.
// accepts the hand array as well as a "when" marker.
function displayHand(hand, when) {

    // if we are currently at the beginning of the turn...
    if (when == 'init') {
        hand.length = 5; //draw 5

        // else we just drew additional cards into our hand so show all of them.
    } else {
        hand.length = hand.length;
    }

    //Whipe out our current hand
    document.getElementById('game-hand').innerHTML = '';

    // Need an array for each of these to make sure that we are matching the correct card to the elements contained within
    var parent = Array();
    var container = Array();
    var card = Array();
    var playCard = Array();


    // For each card in our hand....
    for (var i = 0; i < hand.length; i++) {

        container[i] = document.createElement('div');
        container[i].setAttribute('class', 'singleHandCard');
        var cardIndex = container[i].setAttribute('id', 'card' + i); // +1 adds a unique id to each card
        document.getElementById('game-hand').appendChild(container[i]); // attach our container to the game-hand div

        //create each card in our hand
        card[i] = new Image();
        card[i].src = hand[i].image;

        card[i].addEventListener('click', function () {
            setImage(this);
        }.bind(hand[i]), false);


        //create play card items (our button to play a card)
        //We add the button to each card and set it to hidden at fist
        playCard[i] = new Image();
        playCard[i].setAttribute('class', 'playbtn')
        playCard[i].src = 'images/play-btn.png';
        playCard[i].style.visibility = 'hidden';

        //if their hand is an action card...
        if (hand[i].type == "action") {
            if (actions > 0) { // and they have at least one action to play....
                playCard[i].style.visibility = 'visible'; // set the play button to visible
            }
        }

        //Add the playcard button to the container
        container[i].appendChild(playCard[i]);

        // Just assigns the parent to the button so we can remove the card later (the parent will be the container)
        parent[i] = playCard[i].parentNode;

        container[i].appendChild(card[i]); // Add our current card object to the container

        //Function to add event listeners to the play button
        cardClick(playCard[i], parent[i], hand[i]);
    }

    calculateTreasure(hand); // This function will add up all the treasure cards we have in our hands and then call a function to set up buttons on action cards (buybtns)
}




function cardClick(playButton, parent, card) {

    if (actions > 0) {
        playButton.addEventListener('click', function () {

            //Pass the current Playcard, the parent of that card, and the hand array
            playAction(parent, card);

        }.bind(hand), false);
    }
}


////////////////////////////////////////////
////////// ADD UP ALL TREASURES ////////////
////////////////////////////////////////////

// This function only runs on the initial hand load. If they play a + treasure card it just adds to the global totalTreasure variable and then will call setupBuy
function calculateTreasure(hand) {
    totalTreasure = 0; // Just set totalTreasures back to zero...we will be adding everything up again

    // for each card in our hand
    for (var i = 0; i < hand.length; i++) {
        // If it's a treasure card
        if (hand[i].type == 'treasure') {
            totalTreasure += hand[i].worth; //Add it's worth to our totalTreasure variable
            updateTrackers();
        }
    }
    setupBuy();

}



//////////////////////////////////////////////
/////////////// BUY A CARD ///////////////////
//////////////////////////////////////////////
function setupBuy() {
    if (buys > 0) { // IF they have atleast one by left

        // check each action card
        for (var i = 0; i < actionCards.length; i++) {
            // If the current card cost less or equal to the amount of treasures you have in your hand
            if (actionCards[i].cost <= totalTreasure) {
                document.getElementsByClassName('buybtn')[i].style.visibility = "visible"; // Then set the buybtn to visible
            }
        }
    }
}



function purchaseCard(cardObj) {

    //They have purchased a card...so subtract buys by one
    buys--;
    updateTrackers();


    if(cardObj.name == 'Cache'){
        	for(var i= 0; i < 3; i++){
	        	discard.push(copper);
        	}
        }

    discard.push(cardObj); // Push the card to the discard pile

    if (buys >= 1) { //if they still have buys left then calculate how much treasure we have left

        // Reduce their total treasure by the price of the card they just bought
        totalTreasure -= cardObj.cost;
        updateTrackers();

        for (var i = 0; i < actionCards.length; i++) { // set all the buy btns to hidden...that way we can regenrate the appropriate ones
            document.getElementsByClassName('buybtn')[i].style.visibility = "hidden";
        }
        setupBuy();

    } else if (buys < 1) { // If they are out of buys then discard hand and draw 5 new cards
        clearHand();
    }
}



// This function clears out of current hand and calls DrawFive to get a new hand
function clearHand() {

    for (var i = 0; i < actionCards.length; i++) { // set all the buy btns to hidden......that way we can regenrate the appropriate ones
        document.getElementsByClassName('buybtn')[i].style.visibility = "hidden";
    }

    for (var i = 0; i < hand.length; i++) { // Push every card in our hand to the discard array
        discard.push(hand[i]);
    }

    // Hand is cleared...draw 5 more cards (turn is over)......WHAT DOES DECK EQUAL AT THIS POINT?
    drawFive(deck);

    // After we finished our turn tell the AI function to trigger
    drawFiveAI(AIdeck);
}




//////////////////////////////////////////////
////////// PLAY AN ACTION CARD ///////////////
//////////////////////////////////////////////

function playAction(parent, actionCard) {

    if (actions > 0) { //If they are able to play any actions .. this is checked before this function is even called. Good idea to check again though.

        discard.push(actionCard); //push the card to the discard array

        // Find the action card in our hand array
        var index = hand.indexOf(actionCard);
        //Remove it from the hand array
        hand.splice(index, 1);

        parent.innerHTML = ''; //remove it from the page

        if (actionCard.actions > 0) { // If the card gives them actions then apply them to our tracking variable
            actions += actionCard.actions;
        } else {
            //playCard[i].style.visibility = 'visible'; // set the play button to visible
        }

        if (actionCard.buys > 0) { // If the card gives them more buys then apply them to our tracking variable
            buys += actionCard.buys;
        }

        // If their card gives them additional treasures to spend.
        if (actionCard.worth > 0) {
            totalTreasure += actionCard.worth; // Update the total treasures
            //updateTrackers(); // Update our tracker to reflect how much they now have
            setupBuy(); // update action cards to reflect which ones they can now buy
        }

        // If their card allows them to draw more cards...
        if (actionCard.cards > 0) {
            var numCards = actionCard.cards;
            drawAdditional(numCards); //Call this function and pass it how many cards they should draw.
        }

        //Reduce availible actions by 1 (the action they just spent)
        actions--;

        // Update tracker to reflect their current "resources"
        updateTrackers();

        //If they have used up their last action
        if (actions < 1) {
            for (var i = 0; i < hand.length; i++) { // check each card in hand
                if (hand[i].type == "action") { //If the card is an action card
                    $('.playbtn').css("visibility", "hidden"); // Remove the play button
                }
            }
        }
    }
}




function drawAdditional(numCards) {

    // If we don't have enough cards in the deck to draw..
    if (deck.length < numCards) {
        deck = Shuffle(discard); // Shuffle the discard pile into the deck
    }

    for (var i = 0; i < numCards; i++) {
        hand[hand.length] = deck.shift();
         if(hand[hand.length -1].type == 'treasure'){
	        totalTreasure += hand[hand.length - 1].worth;
	        updateTrackers();
        }
        //calculateTreasure(hand);
    }

    displayHand(hand, 'draw');
}



//////////////////////////////////////////////
////////// CALCULATE SCORE AT END ////////////
//////////////////////////////////////////////


// This is called at the end of the game only.

function calcScore() {

	// This keeps track of how many cards we have total to calculate points for gardens
	var count = 0;
	var gardens = Array();

    // We add up all the points currently in our hand
    for (var h = 0; h < hand.length; h++) {
        if (hand[h].points > 0) {
            finalScore += hand[h].points;
        }
        if(hand[h].name == 'garden'){
	        gardens.push(hand[h]);
        }
        count++;
    }

    // We add up all the points in our discard pile
    for (var di = 0; di < discard.length; di++) {
        if (discard[di].points > 0) {
            finalScore += discard[di].points;
        }
        if(discard[di].name == 'garden'){
	        gardens.push(discard[di]);
        }
        count++;
    }

    // Finally add up all the points in our deck
    for (var de = 0; de < deck.length; de++) {
        if (deck[de].points > 0) {
            finalScore += deck[de].points;
        }
        if(deck[de].name == 'garden'){
	        gardens.push(deck[de]);
        }
        count++;
    }

    if(gardens.length > 0){
    	var gardenScore = count / 10;
	    for (var g = 0; g < gardens.length; g++){
		    finalScore += gardenScore;
		}
    }

    // All cards that have victory points are added up so just return the sum
    return finalScore;
}





// This is called when they click the add to scorebord button
// Using an AJAX call here to process take in the score...add it to XML and then we return a string which will be outputted in the screen
function addScore(score, name) {
    var url = 'scoreboard.php'; //PHP file that is doing the processing
    $.post(url, {
        Score: score,
        Name: name
    }, function (data) { // Score and Name are our variables we are sending....data variable is what is returned from the PHP
        $('#score').html(data).show(); //We output what was returned from PHP to the score div (our scoreboard).
    });
}


function updateTrackers() {
    $("#action-tracker").html('Actions: ' + actions).show();
    $("#buy-tracker").html('Buys: ' + buys).show();
    $("#treasure-tracker").html('Treasure: ' + totalTreasure).show();

    //checkEnd();
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// BEGIN AI FUNCTIONS //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Called onload
function initAI(){

	//Put the initial copper and estates into the deck
    for (var c = 0; c < 7; c++) {
        AIdeck.push(copper);
    }

    for (var e = 0; e < 3; e++) {
        AIdeck.push(estate);
    }

     //Take starting hand and shuffle it up
    AIdeck = AIShuffle(AIdeck); //Initial shuffle

}

// Called from initAI();
function AIShuffle(AIdeck) {
    for (var j, x, i = AIdeck.length; i; j = parseInt(Math.random() * i), x = AIdeck[--i], AIdeck[i] = AIdeck[j], AIdeck[j] = x);
    return AIdeck;

}


// Called after player finishes their turn
function drawFiveAI(AIdeck){
	turn++;
	AItotalTreasure = 0;



	console.log("--------- AI turn #" + turn + "---------");

	AIactions = 1; //Always can play at least one action
    AIbuys = 1; //Always can buy at least once

    //If the deck is lover than 5 then shuffle in the discard cards to rebuild our deck
    if (AIdeck.length < 5) {
        AIdeck = AIShuffle(AIdiscard);
    }

    // get 5 cards from our deck
    for (var i = 0; i < 5; i++) {
        AIhand[i] = AIdeck.shift();
        console.log("AI card"+ i +"is a "+ AIhand[i].name);
    }
    //Get initial treasure
    calculateAITreasure(AIhand);

    determineAIActions(AIhand);

}

function determineAIActions(AIhand){
	// If they have at least 1 action..
	if(AIactions >= 1){
		//Go through each card in our hand...
		for(var i = 0; i < AIhand.length; i++){
			// If it's an action card push it ot our AIplayableCards array
			if(AIhand[i].type == 'action'){
				AIplayableCards.push(AIhand[i]);
			}
		}

		// If there were any action cards
		if(AIplayableCards.length > 0){
			// randomize our action card array
			AIplayableCards = randomAIBuy(AIplayableCards);
			// Pick the first one out of the randomized array
			AIcardPlay = AIplayableCards.shift();

			console.log("AI will play a: " + AIcardPlay.name);

			//Play the action card
			AIplayAction(AIcardPlay);

		}else{ // There were no action cards. Calculate treasures for buy
			console.log("AI has no more action cards in their hand");
			determineAIBuy();
		}
	}else{ // They are out of actions. Calculate treasures for buy
		console.log("AI is out of actions!");
		determineAIBuy();
	}
}



function AIplayAction(actionCard) {
    if (AIactions > 0) { //If they are able to play any actions .. this is checked before this function is even called. Good idea to check again though.

        AIdiscard.push(actionCard); //push the card to the discard array

        // Find the action card in our hand array
        var index = AIhand.indexOf(actionCard);
        //Remove it from the hand array
        AIhand.splice(index, 1);


        if (actionCard.actions > 0) { // If the card gives them actions then apply them to our tracking variable
            AIactions += actionCard.actions;
            console.log("AI gets +"+actionCard.actions+" Actions");
        }

        if (actionCard.buys > 0) { // If the card gives them more buys then apply them to our tracking variable
            AIbuys += actionCard.buys;
            console.log("AI gets +"+actionCard.buys+" Buys");
        }

        // If their card gives them additional treasures to spend.
        if (actionCard.worth > 0) {
            AItotalTreasure += actionCard.worth; // Update the total treasures
            console.log("AI gets +"+actionCard.worth+" Treasure");
            console.log("AI now has "+AItotalTreasure+ " total treasure");
        }

        // If their card allows them to draw more cards...
        if (actionCard.cards > 0) {
            var numCards = actionCard.cards;
            console.log("AI gets to draw +"+actionCard.cards+" Cards");
            AIdrawAdditional(numCards); //Call this function and pass it how many cards they should draw.
        }



        //Reduce availible actions by 1 (the action they just spent)
        AIactions--;

        determineAIActions(AIhand);

    }
}


function AIdrawAdditional(numCards) {
    // If we don't have enough cards in the deck to draw..
    if (AIdeck.length < numCards) {
        AIdeck = Shuffle(AIdiscard); // Shuffle the discard pile into the deck
    }

    for (var i = 0; i < numCards; i++) {

        AIhand[AIhand.length] = AIdeck.shift();
        if(AIhand[AIhand.length -1].type == 'treasure'){
	        AItotalTreasure += AIhand[AIhand.length - 1].worth;
        }
        console.log("AI drew a: "+ AIhand[AIhand.length - 1].name);
    }
}


// Called from drawFive only
function calculateAITreasure(AIhand){
	AItotalTreasure = 0; // Just set totalTreasures back to zero...we will be adding everything up again

    // for each card in our hand
    for (var i = 0; i < AIhand.length; i++) {
        // If it's a treasure card
        if (AIhand[i].type == 'treasure') {
            AItotalTreasure += AIhand[i].worth; //Add it's worth to our totalTreasure variable
        }
    }

    console.log("AI is starting with: "+ AItotalTreasure+ " total treasures");

}


function determineAIBuy(){
	// clear our buyable card array
	AIbuyableCards.length = 0;


	if(totalTreasure < 9){ // This is because if they have say 15 treasure the range will be for a card that is between 13 and 15..which is impossible

		var range = AItotalTreasure - 2; // This is to only have the AI buy a card that is at least 2 less than their total treasure (not buying a 2 card when they have 6)
		for(var i = 0; i < actionCards.length; i++){
			if(actionCards[i].name != 'Estate' && actionCards[i].name != 'Copper'){ // Don't buy estates and coppers because it's dumb, SILLY AI!

				if(actionCards[i].cost >= range && actionCards[i].cost <= AItotalTreasure){
					AIbuyableCards.push(actionCards[i]);
				}
			}

		}
	}else{
		for(var i = 0; i < actionCards.length; i++){
			if(actionCards[i].name != 'Estate' && actionCards[i].name != 'Copper'){ // Don't buy estates and coppers because it's dumb, SILLY AI!

				if(actionCards[i].cost <= AItotalTreasure){
					AIbuyableCards.push(actionCards[i]);
				}
			}
		}
	}



	if(AIbuyableCards.length < 1){ // if there are no card they can buy
		console.log("The AI has decided not to buy a card this round");
		AIclearHand(); // Just end our turn
	}else{
		AIbuyableCards = randomAIBuy(AIbuyableCards);
		AIcardBuy = AIbuyableCards.shift();

		console.log("AI now has: "+ AItotalTreasure+ " total treasures");
		console.log("AI will buy a: " + AIcardBuy.name);
		AIpurchaseCard(AIcardBuy);
	}

}





function randomAIBuy(AIbuyableCards){
	for (var j, x, i = AIbuyableCards.length; i; j = parseInt(Math.random() * i), x = AIbuyableCards[--i], AIbuyableCards[i] = AIbuyableCards[j], AIbuyableCards[j] = x);
    return AIbuyableCards;
}





function AIpurchaseCard(AIcardObj) {
    //They have purchased a card...so subtract buys by one
    AIbuys--;


    if(AIcardObj.name == 'Cache'){ // Cache card purchase also gives you 2 coppers
        	for(var i= 0; i < 3; i++){
	        	AIdiscard.push(copper);
        	}
    }

    AIdiscard.push(AIcardObj); // Push the card to the discard pile

    // Reduce their total treasure by the price of the card they just bought
    AItotalTreasure -= AIcardObj.cost;


    if (AIbuys >= 1 && AItotalTreasure > 3) { //if they still have buys left and have enough to buy a useful card


        determineAIBuy();

        if(AItotalTreasure > 0){
	       console.log("AI has another buy!");
        }


    } else{ // If they are out of buys then discard hand and draw 5 new cards
        AIclearHand();
    }
}




// This function clears out of current hand and calls DrawFive to get a new hand
function AIclearHand() {
	console.log("AI has finished their turn");
    for (var i = 0; i < AIhand.length; i++) { // Push every card in our hand to the discard array
        AIdiscard.push(AIhand[i]);
    }
}


function calcAIScore(){
	// This keeps track of how many cards we have total to calculate points for gardens
	var count = 0;
	var gardens = Array(); // Will hold all garden cards

    // We add up all the points currently in our hand
    for (var h = 0; h < AIhand.length; h++) {
        if (AIhand[h].points > 0) {
            AIfinalScore += AIhand[h].points;
        }
        // Just checks if its a garden and puts it in garden array...same for below
        if(AIhand[h].name == 'garden'){
	        gardens.push(AIhand[h]);
        }
        count++;
    }

    // We add up all the points in our discard pile
    for (var di = 0; di < AIdiscard.length; di++) {
        if (AIdiscard[di].points > 0) {
            AIfinalScore += AIdiscard[di].points;
        }
        if(AIdiscard[di].name == 'garden'){
	        gardens.push(AIdiscard[di]);
        }
        count++;
    }

    // Finally add up all the points in our deck
    for (var de = 0; de < deck.length; de++) {
        if (AIdeck[de].points > 0) {
            AIfinalScore += AIdeck[de].points;
        }
        if(AIdeck[de].name == 'garden'){
	        gardens.push(AIdeck[de]);
        }
        count++;
    }


    // If they had any garden cards
    if(gardens.length > 0){
    	var gardenScore = count / 10; // Garden score is equal to the total amount of gards divided by 10 (each garden is worth 1 point for every 10 cards you have)
	    for (var g = 0; g < gardens.length; g++){
		  	AIfinalScore += gardenScore; // For each garden in the hand add the gardenScore to our total score
		}
    }

    // All cards that have victory points are added up so just return the sum
    return AIfinalScore;
}




