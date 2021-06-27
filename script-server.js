function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//you know what the function getRandomInt does

var datadir = "https://raw.githubusercontent.com/gitrats07/clickmedata/main/"

function clearThing() {
	document.getElementById("pid").innerHTML = " "
	document.getElementById("imgid").src = ""
}

//string datadir is also required in every imgid source
//function clearThing is required in every case of function showThing

function showThing() {
	num = getRandomInt(10);
	console.log(num);
	switch (num) {
		case 0:
			clearThing();
			document.getElementById("pid").innerHTML = "yeah it's 0"
			break;
			
		case 1:
			clearThing();
			document.getElementById("imgid").src = datadir + "data/clickme/1/1.png"
			document.getElementById("pid").innerHTML = "Mark Zuckerberg's Image"
			break;
			
		case 2:
			clearThing();
			document.getElementById("imgid").src = datadir + "data/clickme/2/2.jpg"
			break;
			
		default:
			clearThing();
			document.getElementById("pid").innerHTML = "default_text"
			break;
	}
}