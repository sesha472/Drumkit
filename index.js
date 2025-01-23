
let drumslength=document.querySelectorAll(".drum").length;


 for(var i=0; i<drumslength; i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    
         let clickedbuttoninnertext=this.innerHTML;
         let clickedelement=this;
         console.log(clickedelement);
         console.log(clickedbuttoninnertext);
         

         makeanimation(clickedelement);
         makesound(clickedbuttoninnertext);
    });
 document.querySelectorAll(".drum")[i].addEventListener("keypress",function (event) {
       console.log(event.key);
       console.log(event);
       makesound(event.key+"");
       makeanimationkeypress(event.key);

       
 });

 }

  function makeanimationkeypress(classname){
     element=document.querySelector("."+classname);
     setTimeout(() => {
      element.classList.remove("pressed")
    }, 100);
      element.classList.add("pressed");
      console.log(element);
  }
  function makeanimation (element){
    setTimeout(() => {
      element.classList.remove("pressed")
    }, 100);
      element.classList.add("pressed");
      console.log(element);
  }

 
 function makesound(key){

  switch (key) {
    case "w":
          let audio1=new Audio('./sounds/tom-1.mp3')  
            audio1.play();
        break;
        case "a":
          let audio2=new Audio('./sounds/tom-2.mp3');
          audio2.play()
        break;
        case "s":
          let audio3=new Audio('./sounds/tom-3.mp3')  
         audio3.play();
        break;
        case "d":
            let audio4=new Audio('./sounds/tom-4.mp3')  
            audio4.play();
          break;
          case "j":
            let audio5=new Audio('./sounds/crash.mp3')  
            audio5.play();
          break;
          case "k":
            let audio6=new Audio('./sounds/kick-bass.mp3')  
            audio6.play();
          break;
          case "l":
            let audio7=new Audio('./sounds/snare.mp3')  
            audio7.play();
          break;
   
    default:
        break;
   }
  
}