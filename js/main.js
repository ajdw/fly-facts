
function getAFlyFact(){

	// flyFactArray grabs our entire facts array outside of our function
	var flyFactArray = facts;
	var randomFact = flyFactArray[Math.floor(Math.random() * flyFactArray.length)];
	var factText = randomFact.fact;

	var factOutput = document.getElementById('fly-fact');
	factOutput.innerHTML='<p>' + factText + '</p>';

	if (factOutput.className == '') { /* for the first click, add class immediately */
      factOutput.className = 'typewriter';
    } else { /* for second and subequent clicks, first remove class and add after timeout */
      factOutput.className = '';
      window.setTimeout(function() {
        factOutput.className = 'typewriter';
      }, 100);
  }

}

// Our fly facts array
var facts = [

{
	fact: 'The fly thrives on eating crap all the time, which is pretty disgusting in my taste. ',
	audio: 'audio/fly-fact1.mp3'
},
// 
{
	fact: 'Jeff Goldblum starred as a fly in the 1987 movie The Fly',
	audio: 'audio/fly-fact2.mp3'
},
// 
{
	fact: 'The fly blah blah blah this is another fact about the fly',
	audio: 'audio/fly-fact3.mp3'
},
// 
{
	fact: 'Flies vomit on their food before they eat it up',
	audio: 'audio/fly-fact4.mp3'
}

]