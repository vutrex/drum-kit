//check clicks
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        addAnimations(buttonInnerHtml);
        
    })
}
//check key pressed
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimations(event.key);
});

//makessound
function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;    
        case "j":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;

            default:console.log(finnerHtml);
    }
}
function addAnimations(currentKey){
    var actionPara=document.querySelector("."+currentKey);
    actionPara.classList.add("pressed");
    setTimeout(function(){
        actionPara.classList.remove("pressed");
    },100);

}