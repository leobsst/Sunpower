const targettext = document.querySelector('.idx_rgt_sct_p');
let array = ["venir", "voir", "découvrir"];
let wordIndex = 0;
let letterIndex = 0;

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