# EduSpectrum Web Development Workshop Assignment

## Rules :

1. There will be a total of 5 small assignments of 10 marks each and one project of 50 marks.
2. You need to host your website on github and submit only the link of your website.
3. Plagiarism will result in loss of marks for all parties involved. 
4. You will receive a certificate only if you score more than 40% marks.
5. The last date to submit assignments is 15th January, 2017. 
6. You need to submit only one base github url.
7. For example your base url is mak1910.github.io then it should have the following page :
	* mak1910.github.io/assignment1
	* mak1910.github.io/assignment2
	* mak1910.github.io/assignment3
	* mak1910.github.io/assignment4and5
	* mak1910.github.io/project
8. All naming conventions used in this document are case-sensitive. Do not change mak1910.github.io/assignment1 to mak1910.github.io/Assignment1 or mak1910.github.io/assignment_1.
9. There will be about a week's gap between declaring the results and giving out the certificates. During this period you will be allowed to discuss with us if you believe you were unfairly marked. 

### Assignment 1 : 

Build an HTML page that meets the following requirements. (3+4+3)
1. h2 tag as heading having text 'My Profile' which should be center aligned.
2. Below this add an image of yourself of width '200px' and the image should be linked to your Facebook profile.
3. The image should be followed by an 'ordered list' that lists your achievements ( atleast 3 ).

### Assignment 2 : 

Build an HTML page that meets the following requirements. (5+5)
1. The first div should contain a form similar to the facebook signup form as shown in this figure.
2. The second div should contain a table as shown in the figure attached. Take note of the widths.

### Assignment 3 : 

Beautify the page that you had made in Assignment 1. You may or may not, add background images, modify text size & font, add paddings and margins, use an external library add animations etc. (10).

### Assignment 4 & 5 : 

Build a gallery using bootstrap that will show a list of 10 images. This page should be responsive. Make sure you don't use very large images as it unnecessary increases the size of the page. The theme of the gallery is upto you. On hovering over images, a small description should be shown on top of the image. For this assignment 10 marks are for correctly using the css library that you choose, 5 marks for animations and 5 marks for the overall design and appearance of the page.


### Project : 

Build a web app that lets people save notes. Each note contains a title and some content. The main page will have two columns, the title and the time at which the note was created. This web app should support the following features : Add new notes, Edit old notes, Delete old notes, Sort notes by newest first or oldest first. ( 10 marks for each + 10 marks for design ).

__Sample code using JQuery to interact with the backend.__

* Authenticating the app
```javascript
	var obj = {
		email 	: 'abc@xyz.com',
		rollNo 	: '14AB10001'
	}
	$.post( "http://www.eduspectrum.com/api/authenticate.php", obj, function( data ) {
		data = JSON.parse(data);		// A string is returned which we convert to an object.
		console.log(data);				// To view console, right click and choose inspect element option. 
		var sessionId = data.sessionId; 
	});
```
* Getting all posts 
```javascript
	var obj = {
		sessionId : 'abcabcabcabcabca',
		rollNo 	  : '14AB10001'
	}
	$.post( "http://www.eduspectrum.com/api/getAll.php", obj, function( data ) {
		var posts = JSON.parse(data);
		for(var i=0; i < posts.length; i++) {
			console.log(posts[i].title);
			console.log(posts[i].description);
			console.log(posts[i].createdAt);
		}
	});
```
* Create new post
```javascript
	var post = {
		sessionId 	: 'abcabcabcabcabca',
		rollNo 	  	: '14AB10001',
		title 		: 'Reminder',
		description : 'Buy vegetables on the way home'
	}
	$.post( "http://www.eduspectrum.com/api/create.php", post, function(data) {
		var postData = JSON.parse(data);
		console.log(postData.title);			// Reminder
		console.log(postData.description);		// Buy vegetables on the way home
		console.log(postData.createdAt);		// Unix timestamp
	})
```
* Delete Post
```javascript
	var post = {
		sessionId 	: 'abcabcabcabcabca',
		rollNo		: '14AB10001',
		createdAt 	: '1481086391'
	}
	$.post( "http://www.eduspectrum.com/api/delete.php", post, function(data) {
		console.log(data);
	})
```