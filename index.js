// document.querySelector(".w").addEventListener("click", handleClick);
// document.querySelector(".a").addEventListener("click", handleClick);
// document.querySelector(".s").addEventListener("click", handleClick);
// document.querySelector(".d").addEventListener("click", handleClick);
// document.querySelector(".j").addEventListener("click", handleClick);
// document.querySelector(".k").addEventListener("click", handleClick);
// document.querySelector(".l").addEventListener("click", handleClick);
var numberofDrumButtons = document.querySelectorAll(".drum").length;


for (var i=0; i<numberofDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        audioKey(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    // document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event){
    document.addEventListener("keydown", function(event){
        var boardKey = event.key;
        audioKey(boardKey);
        buttonAnimation(boardKey);
    });
    
    // document.querySelectorAll(".drum")[i].addEventListener("click", audio.play);
}
// function handleClick(){
//     var buttonInnerHTML = this.innerHTML;

// }

function audioKey(key){
    switch(key){
        case "w": 
            var audio = new Audio("./sounds/crash.mp3");    
            audio.play()
            break;
        case "a": 
            var audio = new Audio("./sounds/kick-bass.mp3");    
            audio.play()
            break;
        case "s": 
            var audio = new Audio("./sounds/snare.mp3");    
            audio.play()
            break;
        case "d": 
            var audio = new Audio("./sounds/tom-1.mp3");    
            audio.play()
            break;
        case "j": 
            var audio = new Audio("./sounds/tom-2.mp3");    
            audio.play()
            break;
        case "k": 
            var audio = new Audio("./sounds/tom-3.mp3");    
            audio.play()
            break;
        case "l": 
            var audio = new Audio("./sounds/tom-4.mp3");    
            audio.play()
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100); 
    // activeButton.classList.remove("pressed");
}