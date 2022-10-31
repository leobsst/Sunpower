function upload() {
    const input = document.querySelector( '.inputfile' );
    let label = input.nextElementSibling;
    let labelVal = label.innerHTML;

    input.addEventListener( 'change', function(e) {
        let filename = e.explicitOriginalTarget.value
        let array1 = filename.split('\\')
        filename = array1[array1.length-1]
        checksign = "&#10003";
        filename = checksign + filename
        console.log(filename)
        label.innerHTML = filename

        if(filename ==! labelVal) {
            label.innerHTML = filename
        } else {
            labelVal = labelVal
        }
    })
}

function load_pro() {
    $("#form-container").load('/includes/templates/pro-contact.html');
}

function load_lambda() {
    $("#form-container").load('/includes/templates/lambda-contact.html');
}

function load_syndic() {
    $("#form-container").load('/includes/templates/syndic-contact.html');
}