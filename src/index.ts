import {block, character, darkmode, darkModechange, darkslategrey, getValues, jumper, jumpevent, startevent, teal, turquoise,} from "./DomUnits";
import { change } from "./colorChange";
import { refresh } from "./refresh";
import { levelcounter, startInterval } from "./interval";




window.addEventListener("load", refresh);
window.addEventListener("load", startInterval);

turquoise.addEventListener('click',function(){change("turquoise")});
teal.addEventListener('click',function(){change("teal")});
darkslategrey.addEventListener('click',function(){change("darkslategrey")});

//Farbauswahl 
   /* if(farbe == "teal"){
        jumper.style.background= "teal";
        localStorage.setItem("characterColor", "teal")
        } else if(farbe == "turquoise"){
            jumper.style.background= "turquoise";
            localStorage.setItem("characterColor", "turquoise")
        } else if(farbe == "darkslategrey"){
            jumper.style.background= "darkslategrey";
            localStorage.setItem("characterColor", "darkslategrey")
        }*/
    

  
//------

    getValues.addEventListener("click", setCharacter);
//Eingabeüberprüfung und Character setzen
function setCharacter(){
    let jumpername = (<HTMLInputElement>document.getElementById("inputfield-name")).value;
    let quote = (<HTMLInputElement>document.getElementById("inputfield-quote")).value;
    localStorage.setItem("characterName", jumpername);
    localStorage.setItem("characterQuote", quote);

    console.log(quote + jumpername + "setCharacter funktionier");

   if(jumpername != "" && quote != ""){
        character.innerText ="Hallo " + jumpername +'\n'+ '\n' + " Dein aktueller Spruch lautet:" + '\n' + quote;
        console.log(quote + jumpername + "setCharacter if 1 geht");
    }
            else if(jumpername == "" && quote == ""){
            character.innerText ="Bitte gib zu erst deinen Namen und deinen Spruch ein";
            console.log(quote + jumpername + "setCharacter if 2 geht");
            }
                else if(quote == ""){
                character.innerText ="Hallo " + jumpername +'\n'+ '\n' + " Dir fällt kein guter Spruch ein?" + '\n' + "Wie wäre es mit: " + '\n' + "Never give up!";
                console.log(quote + jumpername + "setCharacter if 3 geht");
                }                
                    else if(jumpername == ""){
                         character.innerText ="Bitte gib noch den Namen ein ";
                         console.log(quote + jumpername + "setCharacter if 4 geht");
                    }
    (<HTMLInputElement>document.getElementById("inputfield-quote")).value ="";
    (<HTMLInputElement>document.getElementById("inputfield-name")).value ="";         
}

//------  

//Darkmode beim clicken
const darkChange=()=>{

    document.body.classList.add("darkmode"); 
        console.log("Dark");
        localStorage.setItem("darkmode", "dark");
}

const bright=()=>{

    document.body.classList.remove("darkmode"); 
        console.log("Bright");
        localStorage.setItem("darkmode", "bright");
}

darkModechange.addEventListener("click", () =>  {
    
    if(darkmode !== "dark"){
        darkChange();
    }
   else {
        bright();
   }
});

//Startbutton

startevent.addEventListener("click", start);
function start(){
            
            
            console.log("Game started");

        if(levelcounter==0){
            console.log("LEVEL 1 started")
            level("animationblock");
        }
        else if(levelcounter==1){
            console.log("LEVEL 2 started");
            level("animationblock2");
        }
       
};

function level(animation: string){
    block.classList.add(animation);
}
//LEVEL2
/*function levelTwo(){
    if(block.classList != "animationblock2") {
        block.classList.add("animationblock2"); 
        console.log("LEVEL 2 started and animation2 is added")  ;       
    }};*/
//LEVEL1
 /*function levelOne() {
    if(block.classList != "animationblock") {
        block.classList.add("animationblock");
        console.log("LEVEL 1 started and animation is added")  
    }
};*/



//Kontrolle LEVEL2




//Jumpbutton

jumpevent.addEventListener("click", jump);
function jump(): void{
    const jumpsound = new Audio("../src/sound/Jumpsound.wav")
        jumpsound.play();
        jumper.classList.add("animationJump");  
        {setTimeout(function(): void {
            jumper.classList.remove("animationJump");},400);
        }         
}



