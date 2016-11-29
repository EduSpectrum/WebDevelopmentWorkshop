# Edu Spectrum Web Development Workshop Assignment

Rules :
- There will be a total of 5 small assignments of 10 marks each and one project of 50 marks.
- You need to host your website on github and submit only the link of your website.
- The last date to submit assignments is 15th of January 2017.

Assignment 1 : Build an HTML page that meets the following requirements. (3+4+3)
- '<h2>' tag as heading having test 'My Profile' which should be center aligned.
- Below this add an image of yourself of width '200px' and the image should be linked to your Facebook profile.
- The image should be followed by an ordered list that lists your achievements ( atleast 3 ).

Assignment 2 : Build an HTML page that meets the following requirements. (5+5)
- The first div should contain a form similar to the facebook signup form as shown in this figure.
- The second div should contain a table as shown in the figure attached. Take note of the widths.

Assignment 3 : Beautify the page that you had made in Assignment 1. You may or may not, add background images, modify text size & font, add paddings and margins, use an external library add animations etc. (10).

Assignment 4 & 5 : Build a gallery using bootstrap that will show a list of 10 images. This page should be responsive. Make sure you don't use very large images as it unnecessary increases the size of the page. The theme of the gallery is upto you. On hovering over images, a small description should be shown on top of the image. For this assignment 10 marks are for correctly using the css library that you choose, 5 marks for animations and 5 marks for the overall design and appearance of the page.


Project : Build a web app that lets people save notes. Each note contains a title and some content. The main page will have two columns, the title and the time at which the note was created. This web app should support the following features : Add new notes, Edit old notes, Delete old notes, Sort notes by newest first or oldest first. ( 10 marks for each + 10 marks for design ).

// How to interact with backend functionality for the project.

1. Authenticating the app

var obj = {
	email 	: 'quotemridul@gmail.com',
	rollNo 	: '14MT10024'
};
$.post( "http://www.eduspectrum.com/api/authenticate.php", obj, function( data ) {
	// To view your sessionId
	console.log(data.sessionId);
});

// Here data is an object that contains a sessionId.

2. Getting all posts 

var obj = {
	sessionId : 'YourSessionId obtained earlier'
}
$.post( "http://www.eduspectrum.com/api/getAll.php", obj, function( data ) {
	var newObj = JSON.parse(data);
	for(var i=0; i < newObj.length; i++) {
		console.log(newObj[i]);
	}
});

// The data returned is an array of objects. Each object contains a title, a description and a createdAt field. 

3. Create Post
var post = {
	sessionId : 'YourSessionId obtained earlier',
	title : 'Post Title',
	description : 'Description of the post.'
}
$.post( "http://www.eduspectrum.com/api/create.php", post, function(data) {
	console.log(data);
})

// Here data is the object. It will contain a description, a title and a createdAt field. You do not need to send in this data. It will be added by the server and returned to you. You need to manage displaying this data though.

4. Delete Post
var post = {
	sessionId : 'YourSessionId obtained earlier',
	title : 'Post Title',
	description : 'Description of the post.'
	createdAt : 'The created at time.'
}
$.post( "http://www.eduspectrum.com/api/delete.php", post, function(data) {
	console.log(data);
})

// If data == true post was deleted successfully otherwise there was some error. 

# How and when to submit

- The last date to submit assignments is 15th January, 2017. 
- You need to submit only one base github url.
- For example your base url is mak1910.github.io then it should have the following page :
	- mak1910.github.io/assignment1
	- mak1910.github.io/assignment2
	- mak1910.github.io/assignment3
	- mak1910.github.io/assignment4and5
	- mak1910.github.io/project
- The eduspectrum api that you need for this assignment will be up and running by the end of this week. We will notify you when its ready.
- We welcome doubts, you can either message me, Sumeet, Yash or Sumugan or post in this group. With doubts, please keep your query and short, and whenever possible attach the part of the code that you are having trouble with. Do not send your whole code, copy and paste the part which you have a problem with.
- All naming conventions used in this document are case-sensitive. Do not change mak1910.github.io/assignment1 to mak1910.github.io/Assignment1 or mak1910.github.io/assignment_1.