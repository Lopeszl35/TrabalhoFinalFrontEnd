var form = document.querySelector('form');

var nomeBandaArtista = document.getElementById('bandaNome');
var generoMusical = document.getElementById('generoMusical');
var numIntegrantes = document.getElementById('numIntegrantes');
var biografia = document.getElementById('validationTextarea');
var siteBanda = document.getElementById('basic-url');

var regexLetras = /^[a-zA-Z\s]+$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarForm();
});

nomeBandaArtista.addEventListener("blur", () => {
    validarNome();
})

function validarNome() {
    if (!regexLetras.test(nomeBandaArtista.value)) {
        nomeBandaArtista.classList.add('is-invalid');
    } else {
        nomeBandaArtista.classList.add('is-valid');
    }
}

function validarForm() {
    validarNome();

    // Adiciona a classe was-validated ao formulário
   
}
