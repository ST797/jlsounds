document.addEventListener('keydown', function(event) {
    if(event.keyCode == 66) {
        myPlay();
    }
    else if(event.keyCode == 83) {
        myPlay1();
    }
    else if(event.keyCode == 87) {
        myPlay2();
    }
    else if(event.keyCode == 71) {
        myPlay3();
    }
    else if(event.keyCode == 70) {
        myPlay4();
    }
    else if(event.keyCode == 65) {
        myPlay5();
    }
});

function myPlay(){
    var audio = new Audio("batman.mp3");
    audio.play();
}

function myPlay1(){
    var audio = new Audio("superman.mp3");
    audio.play();
}

function myPlay2(){
    var audio = new Audio("ww.mp3");
    audio.play();
}

function myPlay3(){
    var audio = new Audio("gl.mp3");
    audio.play();
}

function myPlay4(){
    var audio = new Audio("flash.mp3");
    audio.play();
}
function myPlay5(){
    var audio = new Audio("aquaman.mp3");
    audio.play();
}
