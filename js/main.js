
function getAFlyFact(){

	// flyFactArray grabs our entire facts array outside of our function
	var flyFactArray = facts;
	// randomFact uses Math.floor, Math.random and the length of our array to grab a random fact
	var randomFact = flyFactArray[Math.floor(Math.random() * flyFactArray.length)];
	// factOutput refereneces our DOM element with the Id of 'fly-fact'
	var factOutput = document.getElementById('fly-fact');
	var flyPic = document.getElementById('fly-pic');

	if (factOutput.className == '' && flyPic.className == '') { /* for the first click, add class immediately */
      factOutput.className = 'typewriter';
      flyPic.className = 'animated shake';
    } else { /* for second and subequent clicks, first remove class and add after timeout */
      factOutput.className = '';
      flyPic.className = '';
      window.setTimeout(function() {
        factOutput.className = 'typewriter';
        flyPic.className = 'animated shake';
      }, 100);
  }

  	factOutput.innerHTML = randomFact.fact;

}

// Our fly facts array
var facts = [

{
	fact: 'The fly thrives on eating crap all the time, which is pretty disgusting in my taste. ',
	audio: 'audio/fly-fact1.mp3'
},
// 
{
	fact: 'Jeff Goldblum starred as a fly in the 1987 movie The Fly.',
	audio: 'audio/fly-fact2.mp3'
},
// 
{
	fact: 'The common house fly has a lifespan of up to 28 days.',
	audio: 'audio/fly-fact3.mp3'
},
// 
{
	fact: 'Flies vomit on their food before they eat it up.',
	audio: 'audio/fly-fact4.mp3'
}

]