console.log('First JavaScript module.');

/* Three main selection Methods
 * getElementById -> gives a particular element
 * getElementsByClassName -> gives an Array of elements
 * getElementsByTagName -> gives an Array of elements
 */

// Modifying the heading and sub-heading
document.getElementsByClassName('mainHeading')[0].innerHTML = 'Web Development Workshop';
document.getElementById('mainSubHeading').innerHTML = 'Session 5';

// Adding a left margin to the paragraph
document.getElementsByTagName('p')[0].style['margin-left'] = '10px';

// Adding an image to a document after the rest of the page has loaded
setTimeout(function() {
	var myImage = document.getElementById('pokemonAsh');
	myImage.src = './../Session 1/images/Ash.png';
	myImage.style['max-width'] = '200px';
}, 100);

// Nested selectors
document.getElementById('nested').setAttribute('style', 'margin-top: 50px');
console.log(document.getElementById('nested').getElementsByTagName('p'));

// Tasks
var counter = 0;
var tasks = [];
tasks.push(function() {
	var myElement = document.getElementsByTagName('h1')[0];
	var color = 0;
	var id = setInterval(function() {
		myElement.style.color = 'rgb(0,0,' + color + ')';
		color += 10;
		if(color > 255) {
			clearInterval(id);
		}
	}, 1);
})
tasks.push(function() {
	document.getElementById('toggleHidden').style.display = '';
})

// Execute tasks sequentially
var runNextTask = function() {
	tasks[counter]();
	counter++;
}
var myButton = document.getElementById('myButton');
myButton.onclick = runNextTask;

// Button effects
myButton.onmouseover = function() {
	myButton.className = 'btn btn-warning';
}
myButton.onmouseout = function() {
	myButton.className = 'btn btn-success';
}

// Form validation 
var validateUserName = function() {
	this.value = this.value.toLowerCase();
}

var validateEmailId = function() {
	var data = this.value;
	if((data.indexOf('@') > 0)&&(data.substring(data.length-4, data.length) == '.com')&&((data.indexOf('.') - data.indexOf('@')) > 1)) {
		validInput(this);
	} else {
		invalidInput(this);
	}
}

var invalidInput = function(element) {
	console.log('Invalid Input');
	element.style.color = 'red';
}

var validInput = function(element) {
	console.log('Valid Input');
	element.style.color = 'green';
}

var enteringInput = function() {
	console.log('Entering Input');
	this.style.color = 'black';
}

document.getElementById('userName').onchange = validateUserName;
document.getElementById('emailId').onchange = validateEmailId;
document.getElementById('emailId').onfocus = enteringInput;

// Display toggle
document.getElementById('toggleHidden').style.display = 'none';

// document.cookie = 'This is the last workshop.'
console.log(document.cookie);