var theLeftSide;
var theRightSide;
var numberOfFaces = 5;

function generateFaces() {
	for(var i = 0; i < numberOfFaces; ++i){
		var img = document.createElement("img");
		img.src = 'http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png';
		
		img.style.top = Math.floor(Math.random() * 400);
		img.style.left = Math.floor(Math.random() * 400);
		theLeftSide.appendChild(img);
	}
	
	var leftSideImages = theLeftSide.cloneNode(true);
	
	leftSideImages.removeChild(leftSideImages.lastChild);
	
	theRightSide.appendChild(leftSideImages);
	
	theLeftSide.lastChild.onclick = function(event){
		removeFaces();
		
		event.stopPropagation();
		numberOfFaces += 3;
		generateFaces();
	};
}

function removeFaces() {
	while(theLeftSide.firstChild){
		theLeftSide.removeChild(theLeftSide.firstChild);
	}
	while(theRightSide.firstChild){
		theRightSide.removeChild(theRightSide.firstChild);
	}
}


window.onload = function () {
	theLeftSide = document.getElementById("leftSide");
	theRightSide = document.getElementById("rightSide");
	var theBody = document.body;
	
	theBody.onclick = function gameOver() {
		alert("game over!");
		theBody.onclick = null;
		theLeftSide.lastChild.onclick = null;
	};
	
	generateFaces();
};