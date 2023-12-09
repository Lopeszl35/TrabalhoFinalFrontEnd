var form = document.querySelector('form');
var nomeBandaArtista = document.getElementById('bandaNome');
var generoMusical = document.getElementById('generoMusical');
var numIntegrantes = document.getElementById('numIntegrantes');
var biografia = document.getElementById('validationTextarea');
var siteBanda = document.getElementById('basic-url');
var estado = document.getElementById('validationCustom04');
var email = document.getElementById('exampleFormControlInput1');
var cpf = document.getElementById('cpf');
var telefone = document.getElementById('telefone');
var radio1 = document.getElementById('radio1');
var radio2 = document.getElementById('radio2');
var termosAceitos = document.getElementById('termosAceitos');
var termosRecusados = document.getElementById('termosRecusados');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validarForm();
});

nomeBandaArtista.addEventListener("blur", () => {
    validarNome();
})

generoMusical.addEventListener("blur", () => {
    validarGenero();
})

numIntegrantes.addEventListener("blur", () => {
    validarNumIntegrantes();
})

biografia.addEventListener("blur", () => {
    validarBiografia();
})

estado.addEventListener("blur", () => {
    validarEstado();
})

email.addEventListener("blur", () => {
    validarEmail();
})

cpf.addEventListener("blur", () => {
    validarCPF();
})

telefone.addEventListener("blur", () => {
    validarTelefone();
})

radio1.addEventListener("blur", () => {
    validarExperiencias();
})

radio2.addEventListener("blur", () => {
    validarExperiencias();
})

termosAceitos.addEventListener("blur", () => {
    validarTermos();
})

termosRecusados.addEventListener("blur", () => {
    validarTermos();
})

function validarNome() {
    var regexLetras = /^[a-zA-Z\s]+$/;
    if (!regexLetras.test(nomeBandaArtista.value)) {
        nomeBandaArtista.classList.add('is-invalid');
    } else {
        nomeBandaArtista.classList.remove('is-invalid');
        nomeBandaArtista.classList.add('is-valid');
    }
}

function validarGenero() {
    var regexLetras = /^[a-zA-Z\s]+$/;
    if (!regexLetras.test(generoMusical.value)) {
        generoMusical.classList.add('is-invalid');
    } else {
        generoMusical.classList.remove('is-invalid');
        generoMusical.classList.add('is-valid');
    }
}

function validarNumIntegrantes() {
    var regexNumeros = /^\d+$/;
    if (!regexNumeros.test(numIntegrantes.value)) {
        numIntegrantes.classList.add('is-invalid');
    } else {
        numIntegrantes.classList.remove('is-invalid');
        numIntegrantes.classList.add('is-valid');
    }
}

function validarBiografia() {
    // Verifica se há pelo menos 10 palavras na biografia
    var palavras = biografia.value.split(/\s+/).filter(function(word) {
        return word.length > 0;
    });
    if (palavras.length < 10) {
        biografia.classList.add('is-invalid');
    } else {
        biografia.classList.remove('is-invalid');
        biografia.classList.add('is-valid');
    }
}

function validarEstado() {
    if (estado.value === "") {
        estado.classList.add('is-invalid');
    } else {
        estado.classList.remove('is-invalid');
        estado.classList.add('is-valid');
    }
}

function validarEmail() {
    var regexEmail = /[a-zA-Z0-9._%+-]+@(outlook\.com|hotmail\.com|gmail\.com)/;
    if (!regexEmail.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}

function validarCPF() {
    var regexCPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
    if (!regexCPF.test(cpf.value)) {
        cpf.classList.add('is-invalid');
    } else {
        cpf.classList.remove('is-invalid');
        cpf.classList.add('is-valid');
    }
}

function validarTelefone() {
    // Adapte o padrão conforme necessário para aceitar diferentes formatos de telefone
    var regexTelefone = /\(\d{2}\) \d{5}-\d{4}/;
    if (!regexTelefone.test(telefone.value)) {
        telefone.classList.add('is-invalid');
    } else {
        telefone.classList.remove('is-invalid');
        telefone.classList.add('is-valid');
    }
}

function validarTermos() {
    if (!termosAceitos.checked && !termosRecusados.checked) {
        termosAceitos.classList.add('is-invalid');
        termosRecusados.classList.add('is-invalid');
    } else {
        termosAceitos.classList.remove('is-invalid');
        termosRecusados.classList.remove('is-invalid');
        termosAceitos.classList.add('is-valid');
        termosRecusados.classList.add('is-valid');
    }
}

function validarExperiencias() {
    if (!radio1.checked && !radio2.checked) {
        radio1.classList.add('is-invalid');
        radio2.classList.add('is-invalid');
    } else {
        radio1.classList.remove('is-invalid');
        radio2.classList.remove('is-invalid');
        radio1.classList.add('is-valid');
        radio2.classList.add('is-valid');
    }
}

function validarForm() {
    validarNome();
    validarGenero();
    validarNumIntegrantes();
    validarBiografia();
    validarEstado();
    validarEmail();
    validarCPF();
    validarTelefone();
    validarTermos();
    validarExperiencias();
}
