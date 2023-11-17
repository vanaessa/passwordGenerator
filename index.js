const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let result1el = document.getElementById("firstResult")
let result2el = document.getElementById("secondResult")


function generatePassword(){
    result1el.textContent = " "
    result2el.textContent = " "
    let lenghtChosen = document.getElementById("input").value
        for(let i=0; i<lenghtChosen; i++){
            let randomCharacter1 = characters[Math.floor(Math.random()*characters.length)]
            let randomCharacter2 = characters[Math.floor(Math.random()*characters.length)]
            result1el.textContent += randomCharacter1
            result2el.textContent += randomCharacter2
            }
}
