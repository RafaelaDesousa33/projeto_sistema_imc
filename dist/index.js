"use strict";

//elementos
const peso_input = document.querySelector("#input_peso_user");
const altura_input = document.querySelector("#input_altura_user");
const resultado_numero_imc = document.querySelector("#container_info__result_result_imc__paragraph");
const resultado_faixa_peso = document.querySelector("#container_info__result_faixa_peso__paragraph");
const btn_calcular_imc = document.querySelector("#btn_calcular_imc");
//eventos
btn_calcular_imc.addEventListener("click", (e) => {
    // console.log(resultado_faixa_peso)
    // console.log(resultado_numero_imc)
    e.preventDefault();
    calcularIMC(peso_input, altura_input);
});
//funcoes
const calcularIMC = (peso, altura) => {
    if (!peso.value || !altura.value) {
        resultado_numero_imc.innerText = "Digite o peso e a altura!";
        resultado_faixa_peso.innerText = "";
        return;
    }
    const pesoInput_formato = peso.value.replace(",", ".");
    const alturaInput_formato = altura.value.replace(",", ".");
    let pesoInput_number = Number(pesoInput_formato);
    let altura_input_number = Number(alturaInput_formato);
    const imc = pesoInput_number / (altura_input_number * altura_input_number);
    let classificacao;
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        resultado_faixa_peso.style.color = "#82a4e2";
    }
    else if (imc < 25) {
        classificacao = "Peso Normal";
        resultado_faixa_peso.style.color = "#80da80";
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso";
        resultado_faixa_peso.style.color = "#e2c097";
    }
    else if (imc < 35) {
        classificacao = "Obesidade Grau I";
        resultado_faixa_peso.style.color = "#dd8282";
    }
    else if (imc < 40) {
        classificacao = "Obesidade Grau II";
        resultado_faixa_peso.style.color = "#D02090";
    }
    else {
        classificacao = "Obesidade Grau II";
        resultado_faixa_peso.style.color = "#e288c1";
    }
    resultado_numero_imc.innerText = imc.toFixed(1);
    resultado_faixa_peso.innerText = classificacao;
    console.log(pesoInput_formato);
    console.log(alturaInput_formato);
};
