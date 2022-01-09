//Let's write some js
{
    var NumButtons = document.querySelectorAll(".drum").length;
    var w = "tom-1.mp3";
    var a = "tom-2.mp3";
    var s = "tom-3.mp3";
    var d = "tom-4.mp3";
    var j = "crash.mp3";
    var k = "kick-bass.mp3";
    var l = "snare.mp3";
}

function soundPlayer() {
    var audio = new Audio("sounds/" + eval(this.innerText));
    audio.play();
}

for (var i = 0; i < NumButtons; i++) {
    var drumElement = document.querySelectorAll(".drum")[i];
    drumElement.addEventListener("keydown", (event) => {
        var name = event.key;
        name.toLowerCase();
        var audio = new Audio("sounds/" + eval(name));
        audio.play();
    });
    drumElement.addEventListener("click", soundPlayer)
}