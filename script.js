/* funkce pro zvětšení fotky do popup okna */
/* parametr (id) předá funkci při jejím volání id fotky která se má zvětšit */
function zvetsitFotografii(id){
    /* zde se definuje název souboru - dané fotky */
    var idfotky = "img/" + id + ".jpg";
    /* zobrazení rozmazání */
    document.getElementById("rozmazani").style.display = "block";
    /* zobrazení popup okna se zvětšenou fotkou */
    document.getElementById("zobrazeniFotografie").style.display = "block";
    /* vycentrování popup okna na prostředek displeje */
    document.getElementById("zobrazeniFotografie").style.left = (window.innerWidth - document.getElementById("zobrazeniFotografie").offsetWidth)/2 + "px";
    /* nastavení zdroje zvětšené fotky zobrazované v popup okně */
    document.getElementById("zvetsena").src = idfotky;
}
/* funkce pro tlačitko "zavřít" */
function zavrit(){
    /* vypnutí elementu s rozmazáním */
    document.getElementById("rozmazani").style.display = "none";
    /* vypnutí zobrazení pro element popup okna */
    document.getElementById("zobrazeniFotografie").style.display = "none";
}