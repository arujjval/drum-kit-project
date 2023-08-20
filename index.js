
// DETECTING BUTTON PRESS

var drums=document.querySelectorAll(".set .drum");
for(var i=0;i<drums.length;i++){
    drums[i].addEventListener("click",function(){
        var curr=this.innerHTML;
        sound(curr);
        animation(curr);
    });    
}



// DETECTING KEYBOARD PRESS

document.addEventListener("keydown",function(event){
    sound(event.key)
    animation(event.key);
});



// SOUND OUTPUT FUNCTION

function sound(key){
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
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(this);
    }
}


//ANIMATON FUNCTION 

function animation(key){
    var currbtn=document.querySelector("."+key);
    currbtn.classList.add("pressed");
    setTimeout(removeanimation,150);
    function removeanimation(){
        currbtn.classList.remove("pressed");
    }
}
