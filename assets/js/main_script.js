
const text = `to save your savings`;
const textElement = document.querySelector(".animated-text");
const textSplit = text.trim();
const letters = textSplit.split("");
let counter = 0;

 
    
   function typeLetter() {
  if (counter < letters.length) {
    if(letters[counter] === " "){
        textElement.innerHTML += "<br>";
    }else{
    textElement.innerHTML += letters[counter];
    } 
    counter++;
    setTimeout(typeLetter, 150); 
  }
}

typeLetter(); // start animacji

