



function getAFlyFact(){
	alert('working');

	// flyFactArray grabs our entire facts array outside of our function
	var flyFactArray = facts;
	var randomFact = flyFactArray[Math.floor(Math.random() * flyFactArray.length)];
	var factText = randomFact.fact;

	var factOutput = document.getElementById('fly-fact');
	factOutput.innerHTML='<p>' + factText + '</p>';
}





// Our fly facts array
var facts = [

{
	fact: 'the fly, example ipsum whatever this is ',
	audio: 'audio/fly-fact1.mp3'
},
// 
{
	fact: 'the fly, example',
	audio: 'audio/fly-fact2.mp3'
},
// 
{
	fact: 'the fly, example',
	audio: 'audio/fly-fact3.mp3'
},
// 
{
	fact: 'the fly, example',
	audio: 'audio/fly-fact4.mp3'
}

]