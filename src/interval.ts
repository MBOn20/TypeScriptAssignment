import { block, jumper, } from "./DomUnits";
export let levelcounter : number = 0;
let scorecounter : number = 0;

export function startInterval(){ setInterval(function(): void{
    checkLevel();
    checkLose();
    checkScore();
           
     },10);}

//Verloren
function checkLose(){  
    const jumperTop : number = parseInt(window.getComputedStyle(jumper).getPropertyValue("top"));
    const blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft < 20 && blockLeft > 0 && jumperTop >= 130){ /*FC-teilweise*/
            block.classList.remove("animationblock2");
            block.classList.remove("animationblock");
             alert("Oh noo! You lose! Do you want to play again?");
             window.location.reload();
        }
    };

    
function checkLevel(){ 
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
        };

//Score 
function checkScore(){
    const blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let score= document.getElementById("score") as HTMLElement;
if(blockLeft == 0){
scorecounter++;
console.log(scorecounter);
score.innerText ="Score: " + scorecounter;
}}