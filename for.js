
function acaoBotao() {
    var numero, fatorial, contador
    fatorial = 1
    numero = prompt("Digite o número para calcular o fatorial")

for (contador = 1; contador <= numero; contador++) {
    fatorial = fatorial * contador 
    console.log(fatorial) 

}
document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}