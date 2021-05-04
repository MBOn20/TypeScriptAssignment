import { jumper } from "./DomUnits";

export function change(farbe: string){
    jumper.style.background= farbe;
    localStorage.setItem("characterColor", farbe);}