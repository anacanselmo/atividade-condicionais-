// estrutura de decisão if, else if e else

    // Revisão
    // o que é uma variável
    //Quais são os tipos de variáveis
    // comando de entrada e saída de dados
    
    console.log("olá mundo")
    let nome = prompt("digite seu nome")
    alert("seu nome é" .concat(nome))
    
    let num1 = 5
    let num2 = "5"

    let logico = num1 === num2

    console.log(logico)
    // tipo lógico


    //let maiorDeIdade = true

// if(maiorDeIdade){
//    console.log("Você é maior de idade");
//}
//else{
//    console.log("Você é menor de idade");
//}

let IdadeUsuario = Number(prompt("Digite a sua idade"));

if (idadeUsuario >= 18) {
     console.log("Você é maior de idade");
}
else{
     console.log("Você é menor de idade");
}


let saldo = Number(prompt("Digite seu saldo"));

if (valor > 0) {
    console.log("seu saldo é positivo");
}
else if (saldo === 0){
    console.log("saldo zerado");
}
else{
   console.log("Saldo negativo");
}



let UsuarioIdade = Number(prompt("Digite a sua idade"));

if(UsuarioIdade < 12) {
    console.log("é uma criança");
}
else if(UsuaruioIdade >= 12 && UsuarioIdade <18){
    console.log("é um adolescente");
}
else if (UsuarioIdade >= 18 && UsuarioIdade < 60){
    console.log("é um adulto");
}
else if(UsuarioIdade >= 60){
    console.log("é um idoso");
}