const jumper: HTMLElement|any = document.getElementById("jumper");
const block: HTMLElement|any = document.getElementById("block");
let darkmode = localStorage.getItem("darkmode");
let characterName = localStorage.getItem("characterName");
let characterQuote = localStorage.getItem("characterQuote");
let characterColor = localStorage.getItem("characterColor");
let character: HTMLElement|any = document.getElementById("character");
const darkModechange: HTMLElement|any = document.querySelector("#darkModeButton");
let levelcounter : number = 0;
let scorecounter : number = 0;


//Farbauswahl 
function change(farbe: string){
    if(farbe == "teal"){
        jumper.style.background= "teal";
        localStorage.setItem("characterColor", "teal")
        } else if(farbe == "turquoise"){
            jumper.style.background= "turquoise";
            localStorage.setItem("characterColor", "turquoise")
        } else if(farbe == "darkslategrey"){
            jumper.style.background= "darkslategrey";
            localStorage.setItem("characterColor", "darkslategrey")
        }
    }
   
   jumper.style.background = characterColor;
//------

//Character nach dem Neuladen setzen
   if(characterName == null && characterQuote == null || characterQuote == "" &&characterName == ""){
    character.innerText ="Fülle doch mal die Felder unten aus"; 
    console.log("Locals funktioniert");
    console.log(characterQuote)
    console.log(characterName)

         } else if(characterName !== null && characterName !== "" &&  characterQuote !== "" && characterQuote !== null) {
                console.log(characterName ,characterQuote)
                
                character.innerText ="Hallo " +  characterName + '\n' + "schön das du wieder da bist!" + '\n'+ '\n' + " Dein aktueller Spruch lautet:" + '\n' + characterQuote;
                    
            }else if(characterName == "" && characterQuote !== ""){
                         character.innerText ="Der Spruch war cool, fällt dur noch ein Name ein?"; 

                             }else if(characterName !== "" &&  characterQuote == ""){
                                 character.innerText ="Hallo " + characterName +'\n'+ '\n' + " Dir fällt immernoch kein guter Spruch ein?" + '\n' + "Wie wäre es mit: " + '\n' + "Be yourself!";
    } ;

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

//let background = getComputedStyle(farbe).getPropertyValue("Background");

//console.log(background)
//Jumper.style.color = farbe.value;
//Jumper.setAttribute("background-color",background)




//Darkmode beim clicken
const darkChange=()=>{

    document.body.classList.add("darkmode"); 
        console.log("Dark")
        localStorage.setItem("darkmode", "dark")
}

const bright=()=>{

    document.body.classList.remove("darkmode"); 
        console.log("Bright")
        localStorage.setItem("darkmode", "bright")
}

darkModechange.addEventListener("click", () =>  {
    darkmode=localStorage.getItem("darkmode");
    if(darkmode !== "dark"){
        darkChange();
    }
   else {
    bright();
   }
});

//Darkmode beim Neuladen
if(darkmode == "dark"){
    darkChange();
}
else {
bright();
}

/*function darkModeChange(){
    if(body != "darkmode") {
        document.body.classList.add("darkmode"); 
        console.log("DarKKKKKKKKKKKK")
} else{
        body.classList.remove("darkmode")
        console.log("HELLLLL")
}
}*/

//Startbutton
function start(){
    console.log("Game started")
    if(levelcounter==0){
        console.log("LEVEL 1 started")
        levelone();
    }
    else if(levelcounter==1){
        console.log("LEVEL 2 started");
        levelTwo(); }
    };

//LEVEL1
 function levelone() {
    if(block.classList != "animationblock") {
        block.classList.add("animationblock");
        console.log("LEVEL 1 started and animation is added")  
    }
};

//Kontrolle LEVEL2
const checkLevel = setInterval(function(): void{
        if(levelcounter==0 && scorecounter == 2){
            alert("Level 1 compilted")
            levelcounter=1;
            scorecounter=0;
            block.classList.remove("animationblock");
            console.log("CheckLevel1-win funktioniert " +scorecounter)
        }
            else if(levelcounter==1 && scorecounter == 4){
                    alert("You win!")
                    levelcounter=0;
                    scorecounter=0;
                    block.classList.remove("animationblock2");
                    console.log("CheckLevel2-win funktioniert" +scorecounter)
        
            }
    
},10);

//LEVEL2
function levelTwo(){
    if(block.classList != "animationblock2") {
        block.classList.add("animationblock2"); 
        console.log("LEVEL 2222 started and animation2 is added")  ;       
    }};

//score (hängt ab 9)
const checkscore = setInterval(function(): void{ 
            const blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            let score: HTMLElement|any = document.getElementById("score");
    if(blockLeft == 0){
        ++scorecounter;
        console.log(scorecounter);
        score.innerText ="Score: " + scorecounter;
}}, 10);

//Jumpbutton
function jump(): void{
    const audio = new Audio("../src/sound/blue.mp3")
    audio.play()
         if(jumper.classList != "animationJump") {
            jumper.classList.add("animationJump");       
            }{
                setTimeout(function(): void{
                jumper.classList.remove("animationJump");} ,400);
            }
}

//Verlornen
const checkLose = setInterval(function(): void{ 
        const JumperTop : number = parseInt(window.getComputedStyle(jumper).getPropertyValue("top"));
        const blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft < 20 && blockLeft > 0 && JumperTop >= 130){
                 block.style.animationJump = "none";
                 alert("Oh noo! You lose! Do you want to play again?");
                 window.location.reload();
            }

}, 10);



/*//SLIDER
const carouselSlide:Element|any = document.querySelector(".carousel-slide")
const carouselImages:HTMLImageElement|any = document.querySelector("img")
const lastone:HTMLElement|any = document.getElementById("lastClone")
const one:HTMLElement|any = document.getElementById("firstClone")
const nextBtn:Element|any = document.querySelector("#nextBtn");
const prevBtn:Element|any = document.querySelector("#prevBtn");
let counter:number = 0;
const size = 1600;




nextBtn.addEventListener("click", ()=> {
    if(counter >= 4){
        console.log("IF plpplpllllllllllllllllllllllllllllllllll GEHTTTT")
        counter=0;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

    } else{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter)
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
}});

prevBtn.addEventListener("click", ()=> {
    if(counter <= 0){
        console.log("IF 1 GEHTTTT")
        counter=  4;
        carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";

    } else{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter)
    carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
}});



/*function check(){
    console.log("IF908hgzjhzhujvbcfgjzvcfghzjh GEHTTTT")
    if(counter< -1){
        console.log("IF 1 GEHTTTT")
        carouselSlide.style.transition="none";
        counter= carouselImages.length -2;
        carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";

    }if(counter>5){
        console.log("IF 1 GEHTTTT")
        carouselSlide.style.transition="none";
        counter= carouselImages.length -counter;
        carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";

}
};*/