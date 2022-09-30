function carregar() {
    inicio = document.querySelector("input#peso").focus();
}

function calcular() {
    let peso = Number(document.querySelector("input#peso").value);
    let altura = Number(document.querySelector("input#altura").value / 100); 
    let imc = peso / altura ** 2;
    let diagnostico = "";
    let res = document.querySelector("div#res");

    if (imc < 18.5) {
        diagnostico = "Abaixo do peso";
    }else if (imc <= 24.9) {
        diagnostico = "Peso normal";
    }else if (imc <= 29.9) {
        diagnostico = "Sobrepeso";
    }else if (imc <= 34.9) {
        diagnostico = "Obesidade grau 1";
    }else if (imc <= 39.9) {
        diagnostico = "Obesidade grau 2";
    } else {
        diagnostico = "Obesidade grau 3";
    }

    res.innerHTML = `<p class="resultado"> Seu IMC é <b>${imc.toFixed(2).replace(".", ",")}</b>.<p class="resultado">Diagnóstico: <b>${diagnostico}</b>`;
}

function limpar() {
    document.querySelector("input#peso").value = "";
    document.querySelector("input#altura").value = "";
    document.querySelector("div#res").innerHTML = "";
    carregar();
}

