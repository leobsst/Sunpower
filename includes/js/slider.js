document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
      arrows : false,
      pagination: false,
    } );
    splide.mount();
  } );



const nbPage = document.querySelectorAll("#custom1");
const nbIcon = document.querySelectorAll("#icon");



console.log(nbIcon)
const targetIcon1 = nbIcon[0];
const targetIcon2 = nbIcon[1];
const targetIcon3 = nbIcon[2];

const targetNode1 = nbPage[0];
const targetNode2 = nbPage[1];
const targetNode3 = nbPage[2];

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  
  for (const mutation of mutationList) {
    if (mutation.type === 'attributes') {

      // console.log(state)
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode1, config);
// observer.observe(targetNode2, config);
// observer.observe(targetNode3, config);


