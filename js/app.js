function hello() {
	console.log("hello");
	var changeDiv = document.getElementById('divElement');
	changeDiv.innerHTML = "WAT";
	console.log(changeDiv);

}

function sofast(){
	var classElements = document.getElementByClass('pig')
	classElements[0].innerHTML = "bacon"
}

