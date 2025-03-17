
for(var n=0; n<document.querySelectorAll("button").length ;n++){
document.querySelectorAll("button")[n].addEventListener("click", function(){ 
    
    var buttonPressed=this.innerHTML;
    switchStatement(buttonPressed);
    buttonAnimation(buttonPressed);
 });
}

document.addEventListener("keydown", function(event){ 
    
    switchStatement(event.key);
    buttonAnimation(event.key);
});

function switchStatement(n) {
    switch (n) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(n) {
    
    var activeButton=document.querySelector("."+n);
    activeButton.classList.add("pressed"); //fade out

    setTimeout(function(){ activeButton.classList.remove("pressed"); },100);
}