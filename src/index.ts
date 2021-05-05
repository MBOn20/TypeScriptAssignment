import {block, body, character, darkModechange, darkslategrey, getValues, jumper, jumpevent, startevent, teal, turquoise,} from "./DomUnits";
import { change } from "./colorChange";
import { refresh } from "./refresh";
import { levelcounter, startInterval } from "./interval";

window.addEventListener("load", refresh);
window.addEventListener("load", startInterval);
turquoise.addEventListener('click',function(){change("turquoise")});
teal.addEventListener('click',function(){change("teal")});
darkslategrey.addEventListener('click',function(){change("darkslategrey")});
getValues.addEventListener("click", setCharacter);
startevent.addEventListener("click", start);
jumpevent.addEventListener("click", jump);

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



//Startbutton
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

//Jumpbutton


function jump(): void{
    const jumpsound = new Audio("../src/sound/Jumpsound.wav")
        jumpsound.play();
        jumper.classList.add("animationJump");  
        {setTimeout(function(): void {
            jumper.classList.remove("animationJump");},400);
        }         
}


 

  //Darkmode beim clicken
 /* const darkChange=()=>{

    document.body.classList.add("darkmode"); 
        console.log("Dark");
        localStorage.setItem("darkmode", "dark");
}

const bright=()=>{

    document.body.classList.remove("darkmode"); 
        console.log("Bright");
        localStorage.setItem("darkmode", "bright");
}*/

darkModechange.addEventListener("click", () =>  {
    
    if(body.style.background== "white"){
        darkmodenew("black");
    }
   else {
    darkmodenew("white");
   }
});

function darkmodenew(changein : string){
    body.style.background= changein;
    localStorage.setItem("darkmode", changein);
 }