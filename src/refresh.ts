import { body, character, characterColor, characterName, characterQuote, darkmode, jumper } from "./DomUnits";

export function refresh(){
       
        characterrefresh();
        colorChangeRefresh();
        darkmodeRefresh();
   
    }
    //Character nach dem Neuladen setzen
    function characterrefresh(){if(characterName == null && characterQuote == null || characterQuote == "" &&characterName == ""){
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
        };}

         //Characterfarbe beim Neuladen
   function colorChangeRefresh(){ 
       jumper.style.background = String(characterColor);
    }
   //Darkmode beim Neuladen   
function darkmodeRefresh(){   
    
    body.style.background= darkmode as string;
}

    /*if(darkmode== "black"){
    body.style.background= "black";
localStorage.setItem("darkmode", "black");
  
}
else {
body.style.background= "white";
localStorage.setItem("darkmode", "white");

}*/