alert("Welcome to our java script project ^_<")

	// function myFunction() {
	// 	var indexBtoon = document.getElementsByClassName("indexBtnn");
	// 	var b;
	// 	for (b = 0; b < indexBtoon.length; b++) {
	// 		indexBtoon[b].style.color = "Blue";
	// 	}
	// }


	var img1 = document.getElementsByClassName("img1");
	img1[0].addEventListener("mouseover",function () {
		img1[0].style.transform="rotate(80deg)";
	})
	img1[0].addEventListener("mouseout",function () {
		img1[0].style.transform="rotate(0deg)";
	})
	var img1 = document.getElementsByClassName("img1");
	img1[1].addEventListener("mouseover",function () {
		img1[1].style.transform="rotate(-80deg)";
	})
	img1[1].addEventListener("mouseout",function () {
		img1[1].style.transform="rotate(0deg)";
	})
	img1[2].addEventListener("mouseover",function () {
		img1[2].style.transform="rotate(50deg)";
	})
	img1[2].addEventListener("mouseout",function () {
		img1[2].style.transform="rotate(0deg)";
	})
	img1[3].addEventListener("mouseover",function () {
		img1[3].style.transform="rotate(-50deg)";
	})
	img1[3].addEventListener("mouseout",function () {
		img1[3].style.transform="rotate(0deg)";
	})

	var indexHead = document.getElementsByTagName('h2');
	indexHead[0].addEventListener("mouseout", function () {
		indexHead[0].style.color = "#FFFF00";
	});
	indexHead[0].addEventListener("mousemove", function () {
		indexHead[0].style.color = "black";
		indexHead[0].style.cursor = "pointer"
	});
	indexHead[1].addEventListener("mouseout", function () {
		indexHead[1].style.color = "#FFFF00";
	});
	indexHead[1].addEventListener("mousemove", function () {
		indexHead[1].style.color = "black";
		indexHead[1].style.cursor = "pointer"

	});
	indexHead[2].addEventListener("mouseout", function () {
		indexHead[2].style.color = "#FFFF00";
	});
	indexHead[2].addEventListener("mousemove", function () {
		indexHead[2].style.color = "black";
		indexHead[2].style.cursor = "pointer"

	});
	indexHead[3].addEventListener("mouseout", function () {
		indexHead[3].style.color = "#FFFF00";
	});
	indexHead[3].addEventListener("mousemove", function () {
		indexHead[3].style.color = "black";
		indexHead[3].style.cursor = "pointer"

	});

	var indexF = document.getElementById("indexPar");
	indexF.onmousemove = function () {
		document.getElementById("indexPar").style.color = "#CBA2Ce";


	}
	var indexH = document.getElementById("indexPaar");
	indexH.onmousemove = function () {
		document.getElementById("indexPaar").style.color = "#ADD8E6";


	}
	var indexK = document.getElementById("indexPaaar");
	indexK.onmousemove = function () {
		document.getElementById("indexPaaar").style.color = "#ffc58f";


	}
	var indexL = document.getElementById("indexPaaaar");
	indexL.onmousemove = function () {
		document.getElementById("indexPaaaar").style.color = "#8ffffd";


		var element = document.getElementById('home');
		element.addEventListener("mouseover", function () {
			element.innerHTML = "Hello kids";
		});
		element.addEventListener("mouseout", function () {
			element.innerHTML = " Home";
		});

	}