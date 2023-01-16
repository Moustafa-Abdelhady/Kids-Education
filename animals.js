var img = document.getElementById('hel');
img.addEventListener("mouseover", function () {
	img.src = "./Pictures/hello.jpg";
});
img.addEventListener("mouseout", function () {
	img.src = "./Pictures/animals.png";
});
var video1 = document.getElementById('video1');
var video3 = document.getElementById('video3');
video1.onended = function () {
	video3.play();
	video1.style.opacity = 0;
}
video3.onended = function () {
	video3.style.opacity = 0;
	window.setTimeout(imgTransition, 1000);
}
var element = document.getElementById('letter');
element.addEventListener("mouseover", function () {
	element.innerHTML = "Hello kids";
});
element.addEventListener("mouseout", function () {
	element.innerHTML = "Animals";
});
document.getElementById("Lsound1").addEventListener('click', function () {
	if(Lsound.paused){
		document.getElementById('Lsound').play();
	}else{
		document.getElementById('Lsound').pause();
	}
})
document.getElementById("Tsound1").addEventListener('click', function () {
	if(Tsound.paused){
		document.getElementById('Tsound').play();
	}else{
		document.getElementById('Tsound').pause();
	}
})
document.getElementById("Dsound1").addEventListener('click', function () {
	if(Dsound.paused){
		document.getElementById('Dsound').play();
	}else{
		document.getElementById('Dsound').pause();
	}
})
document.getElementById("Zsound1").addEventListener('click', function () {
	if(Zsound.paused){
		document.getElementById('Zsound').play();
	}else{
		document.getElementById('Zsound').pause();
	}
})
document.getElementById("Hsound1").addEventListener('click', function () {
	if(Hsound.paused){
		document.getElementById('Hsound').play();
	}else{
		document.getElementById('Hsound').pause();
	}
})
document.getElementById("Gsound1").addEventListener('click', function () {
	if(Gsound.paused){
		document.getElementById('Gsound').play();
	}else{
		document.getElementById('Gsound').pause();
	}
})
document.getElementById("ELsound1").addEventListener('click', function () {
	if(ELsound.paused){
		document.getElementById('ELsound').play();
	}else{
		document.getElementById('ELsound').pause();
	}
})
document.getElementById("Dosound1").addEventListener('click', function () {
	if(Dosound.paused){
		document.getElementById('Dosound').play();
	}else{
		document.getElementById('Dosound').pause();
	}
})
document.getElementById("Csound1").addEventListener('click', function () {
	if(Csound.paused){
		document.getElementById('Csound').play();
	}else{
		document.getElementById('Csound').pause();
	}
})
document.getElementById("Msound1").addEventListener('click', function () {
	if(Msound.paused){
		document.getElementById('Msound').play();
	}else{
		document.getElementById('Msound').pause();
	}
})
document.getElementById("COsound1").addEventListener('click', function () {
	if(COsound.paused){
		document.getElementById('COsound').play();
	}else{
		document.getElementById('COsound').pause();
	}
})
document.getElementById("SHsound1").addEventListener('click', function () {
	if(SHsound.paused){
		document.getElementById('SHsound').play();
	}else{
		document.getElementById('SHsound').pause();
	}
})
document.getElementById("Busound1").addEventListener('click', function () {
	if(Busound.paused){
		document.getElementById('Busound').play();
	}else{
		document.getElementById('Busound').pause();
	}
})