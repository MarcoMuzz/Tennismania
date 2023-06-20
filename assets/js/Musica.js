var aud = document.getElementById("audio");


function playAud() {
    aud.play();
}

function pauseAud() {
    aud.pause();
}

function backmusic(){
	var audio = document.getElementById("backgroundmusic");
    var audioClass = audio.className;
    if(audioClass == 'fa fa-play'){
    	aud.play();
        audio.classList.remove('fa-play');
        audio.classList.add('fa-pause');
    }
    else{
    	aud.pause();
        audio.classList.add('fa-play');
        audio.classList.remove('fa-pause');
    }
}