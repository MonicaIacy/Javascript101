function acaoBotao() {
var sairLoop, valor1, valor2

do {
    valor1 = prompt("Digite o primeiro valor")
    valor2 = prompt("Digite o segundo número")
    document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2))
    sairLoop = prompt("Deseja sair? S/N")
    mahani = sairLoop.toUpperCase();

} while (mahani == "N");
}