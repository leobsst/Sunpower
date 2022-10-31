function upload() {
    // recupére l'element input
    const input = document.querySelector( '.inputfile' );
    // recupére l'element label qui suis l'elemnt input
    let label = input.nextElementSibling;
    // recupère la valeur de l'element label pour la modifier
    let labelVal = label.innerHTML;
    // créer un evenement change qui écoute tous les changements qui la stock dans une variable e
    input.addEventListener( 'change', function(e) {
        // recupére le chemin du fichier
        let filename = e.explicitOriginalTarget.value
        // travaille la string pour la séparer en un array 
        let array1 = filename.split('\\')
        // recupère le nom du fichier 
        filename = array1[array1.length-1]
        // créer le string avec le symbole check
        checksign = "&#10003";
        // ajoute le symbole check au nom du fichier pour l'afficher
        filename =  (filename + " ") + checksign
        //affiche le nom du fichier sur le label
        label.innerHTML = filename
        checkValidity()
    })
}

function checkValidity() {
    const forms = document.querySelectorAll( '.check' );
    console.log(forms)
    let wrong = []
    forms.forEach(element => {
        console.log(element.checkValidity)
    });
}


//charge le code html du form pro
function load_pro() {
    $("#form-container").load('/includes/templates/pro-contact.html');
}
//charge le code html du form particulier
function load_lambda() {
    $("#form-container").load('/includes/templates/lambda-contact.html');
}
//charge le code html du form syndic
function load_syndic() {
    $("#form-container").load('/includes/templates/syndic-contact.html');
}