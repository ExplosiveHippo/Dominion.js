<?php

//Access our XML file
$scoreboard = new domDocument();
$scoreboard->load('scoreboard.xml');



function sanitize($val) {
	$val = trim($val); // removes white space around the value
	$val = strip_tags($val); //strips html tags
	$val = htmlentities($val);	//removes html entites (like copywrite symbols)
	$val = stripslashes($val); //Remove slashes
	return $val;//return the name
}


//Only create the elements if our score and name are set (if they aren't they are just viewing the scoreboard)
if(isset($_POST['Score']) && isset($_POST['Name'])){

	$score = $_POST['Score']; //Score = what we send in
	$name = $_POST['Name'];	//Name = what we send it
	
	$name = sanitize($name); // Sanitize the name variable since the user inputed it (security..and to prevent them from making their name look different)
	
	
	// If they didn't add a name then create a random playerID for them
	if($name == ''){
		$name = 'Player'.rand(0,5000);
	}

	$root=$scoreboard->documentElement; // Just getting the root of our XML file (<scoreboard>)
	
	$entry = $scoreboard->createElement('entry'); // Create an entry elements (this is what holds the name and score)
	
	$userScore = $scoreboard->createElement('score',$score); // Create a score element and set the value to the score that was passed in
	
	$userName = $scoreboard->createElement('name',$name);	// Create a name element and set the value to the name that was passed in (already sanitized)
	
	$entry->appendChild($userName); //Add the name and score to the entry element
	$entry->appendChild($userScore);
	
	
	$entries = $root->getElementsByTagName('entry'); // get all the entries from the XML
	
	// This block below will sort our XML from highest to lowest
	
		
	// If there are no entries right now (blank scoreboard)..
	if ($entries->length == 0){ 
	    $root->appendChild($entry); // Simply add it to the root
	    $scoreboard->save('scoreboard.xml'); //save our file
	}
	
	// We have some entries already
	else{
		// for each entry in our XML....
	    for ($i = 0; $i < $entries->length; $i++){
	    	//If the score is greater than the current iterated score...
	        if ($score > $entries->item($i)->getElementsByTagName('score')->item(0)->nodeValue){
	        	// Then insert it before the current iterated element
	            $root->insertBefore($entry, $entries->item($i));
	            break; //Leave for loop
	        }
	    }
	    
	    //if the new score is lower than all the rest
	    if ($i == $entries->length){
	        $root->appendChild($entry); // Just append it to the root
	    }
	    
	    // We've done everthing we need to...save the file
	    $scoreboard->save('scoreboard.xml');
	}
}




//This block below is to create a table from the data in our XML file and then return it to the AJAX call


// Get all entries
$scores = $scoreboard->getElementsByTagName('entry');

//Start building our string we will
$string = '<h2>Top 10 Scores</h2>';

$string .= '<table id="score-table" cellspacing="10"><tbody><tr><th align="left">User</th><th align="left">Score</th></tr>';

$index = 0;
foreach($scores as $score){
	if($index < 10){ // Limit the results to only the top 10;
		$getScore = $score->getElementsByTagName('score')->item(0)->nodeValue;
		$getPlayer = $score->getElementsByTagName('name')->item(0)->nodeValue;
		$string.="<tr><td>$getPlayer</td><td>$getScore</td></tr>";
		$index++;
	}
}

$string.='</tbody></table>';


//If Name and Score were set (meaning they are entering a value in the scoreboard...then display the new game button
if(isset($_POST['Name']) && isset($_POST['Score'])){
	$string.="<a href='project1.html'><img src='images/ngbtn.png' id='newgamebtnscore' /></a>";
}else{
	// else they are just viewing the scoreboard so allow them to start a game
	$string.="<a href='project1.html'><img src='images/backbtn.png' id='backbtn' /></a>";
}


echo $string;

?>