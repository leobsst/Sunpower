const targettext = document.querySelector('.title-content h2');
let wordIndex = 0;
let letterIndex = 0;

if (window.location.pathname === "/") {
    let array = ["Présentationㅤ"];
    Animletter(array);
}
if (window.location.pathname === "/ombrieres/" || window.location.pathname === "/ombrieres") {
    let array = ["Les ombrières solairesㅤ"];
    Animletter(array);
}
if (window.location.pathname === "/mentions-legales/" || window.location.pathname === "/mentions-legales") {
    let array = ["Politique de confidentialitéㅤ"];
    Animletter(array);
}
if (window.location.pathname === "/groupe/" || window.location.pathname === "/groupe" || window.location.pathname === "/groupe/#about-us" || window.location.pathname === "/groupe/#partners"|| window.location.pathname === "/groupe#about-us" || window.location.pathname === "/groupe#partners") {
    let array = ["Le groupeㅤ"];
    Animletter(array);
}
if (window.location.pathname === "/contact/" || window.location.pathname === "/contact") {
    let array = ["Nous contacterㅤ"];
    Animletter(array);
}

function Animletter(array) {
    const createLetter = () => {
        const letter = document.createElement('span');
        targettext.appendChild(letter);
      
        letter.textContent = array[wordIndex] [letterIndex];
      
        setTimeout(() => {
          letter.remove(); 
        }, 2000);
      }
      
      const loop = () => {
        setTimeout(() => {
          if(wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
          } else if(letterIndex < array[wordIndex].length){
            createLetter();
            letterIndex++;
            loop()
          }else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
              loop();
            }, 2800);
          }
        }, 60)
      }
      loop();
}