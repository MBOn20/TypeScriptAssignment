import { character, characterColor, characterName, characterQuote, darkmode, jumper } from "./DomUnits";

export function refresh(){
        console.log("bitte geh")
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
        //Characterfarbe beim Neuladen
    jumper.style.background = String(characterColor);
    //Darkmode beim Neuladen
    if(darkmode == "dark"){
        document.body.classList.add("darkmode"); 
        console.log("Dark");
       
    }
    else {
        document.body.classList.remove("darkmode"); 
        console.log("Bright");
       
    }
  
    }