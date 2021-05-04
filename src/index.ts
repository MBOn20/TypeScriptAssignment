import {block, character, darkmode, darkModechange, darkslategrey, getValues, jumper, jumpevent, startevent, teal, turquoise,} from "./DomUnits";
import { change } from "./colorChange";
import { refresh } from "./refresh";

let levelcounter : number = 0;
let scorecounter : number = 0;


window.addEventListener("load", refresh);
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
const checkLevel = setInterval(function(): void{
        if(levelcounter==0 && scorecounter == 5){
            const levelOneSound = new Audio("../src/sound/Levelonesound.wav");
            levelOneSound.play();
                levelcounter=1;
                scorecounter=0;
                    block.classList.remove("animationblock");
                     console.log("CheckLevel1-win funktioniert " +scorecounter)
                     alert("Level 1 compilted")
        }
        else if(levelcounter==1 && scorecounter == 4){
            const winSound = new Audio("../src/sound/Winsound.wav");
            winSound.play();
                levelcounter=0;
                scorecounter=0;
                    block.classList.remove("animationblock2");
                     console.log("CheckLevel2-win funktioniert" +scorecounter);
                     alert("You win!");
        }
    
},10);


//score (hängt ab 9)
const checkscore = setInterval(function(): void{ 
    const blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let score= document.getElementById("score") as HTMLElement;
if(blockLeft == 0){
++scorecounter;
console.log(scorecounter);
score.innerText ="Score: " + scorecounter;
}}, 10);


//Jumpbutton

jumpevent.addEventListener("click", jump);
function jump(): void{
    const jumpsound = new Audio("../src/sound/Jumpsound.wav")
        jumpsound.play()
        jumper.classList.add("animationJump");  
        {setTimeout(function(): void {
            jumper.classList.remove("animationJump");},400);
        }         
}

//Verloren
const checkLose = setInterval(function(): void{ 
    const JumperTop : number = parseInt(window.getComputedStyle(jumper).getPropertyValue("top"));
    const blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft < 20 && blockLeft > 0 && JumperTop >= 130){
            block.classList.remove("animationblock2");
            block.classList.remove("animationblock");
             alert("Oh noo! You lose! Do you want to play again?");
             window.location.reload();
        }

}, 10);



