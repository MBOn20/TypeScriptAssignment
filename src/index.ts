const Jumper: HTMLElement|any = document.getElementById("Jumper");
const block: HTMLElement|any = document.getElementById("block");
let darkmode = localStorage.getItem("darkmode");
const darkModechange: HTMLElement|any = document.querySelector("#darkModeButton");
//const body: HTMLElement|any = document.querySelector("body");
function change(farbe: string){
    if(farbe == "red"){
        Jumper.style.background= "red"
        } else if(farbe == "blue"){
            Jumper.style.background= "blue"
        } else if(farbe == "black"){
            Jumper.style.background= "black"
        }
    }
   


//let background = getComputedStyle(farbe).getPropertyValue("Background");

//console.log(background)
//Jumper.style.color = farbe.value;
//Jumper.setAttribute("background-color",background)
let m : number = 0;
let i : number = 0;

//Darkmode
const darkChange=()=>{

    document.body.classList.add("darkmode"); 
        console.log("Dark")
        localStorage.setItem("darkmode", "dark")
}

const bright=()=>{

    document.body.classList.remove("darkmode"); 
        console.log("Hell")
        localStorage.setItem("darkmode", "hell")
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
 function changeJumper(){

 }
function start(){
    console.log("starrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt")
    if(m==0){
        console.log("LEVEL 1 started")
        levelone();
    }
    else if(m==1){
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
        if(m==0 && i == 2){
            alert("Level 1 compilted")
            m=1;
            i=0;
            block.classList.remove("animationblock");
            console.log("CheckLevel2 funktioniert" +i)
        }
            else if(m==1 && i == 4){
                    alert("You win!")
                    m=0;
                    i=0;
                    block.classList.remove("animationblock2");
                    console.log("CheckLevel2 funktioniert" +i)
        
            }
    
},10);

//LEVEL2
function levelTwo(){
    if(block.classList != "animationblock2") {
        block.classList.add("animationblock2"); 
        console.log("LEVEL 2222 started and animation2222 ist added")  ;       
    }};

//score (hängt ab 9)
const checkscore = setInterval(function(): void{ 
            const blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            const score: HTMLElement|any = document.getElementById("score");
        if(blockLeft == 0){
             ++i;
            console.log(i);
            score.innerText ="Score: " + i;
}}, 10);

//Jumpbutton
function jump(): void{
    const audio = new Audio("../src/sound/blue.mp3")
    audio.play()
    if(Jumper.classList != "animationJump") {
        Jumper.classList.add("animationJump");       
    }{
    setTimeout(function(): void{
        Jumper.classList.remove("animationJump");} ,400);
    }
}

//Verlornen
const checkLose = setInterval(function(): void{ 
        const JumperTop : number = parseInt(window.getComputedStyle(Jumper).getPropertyValue("top"));
        const blockLeft : number = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && JumperTop >= 130){
        block.style.animationJump = "none";
        alert("Oh noo! You lose! Do you want to play again?");
        window.location.reload();
    }

}, 10);



//SLIDER
/*const carouselSlide:Element|any = document.querySelector(".carousel-slide")
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
        counter=  5;
        carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";

    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter)
    carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
});



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