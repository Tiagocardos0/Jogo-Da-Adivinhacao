const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const inputNumber = document.querySelector("#num")
const btnClic = document.querySelector("#btnClic")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let contNum = 1


// função quando houver o click
function toCliclk (event) {
    event.preventDefault()
    numberCheck()
    noNumber()
    if (Number(inputNumber.value) == randomNumber ) {
        toggleScreen()
        screen2.querySelector("h1").innerText = `Você acertou em ${contNum} tentativas.`
        
    }
        

    inputNumber.value = ""
    contNum++
    
}
// verifica se o valor do umput esta vazio
function noNumber () {
    if (inputNumber.value == '') {
        alert('Insira um número para adivinhar! ')
    }
}
// verifica se o valor do input é menor que 0 ou maior que 10
function numberCheck () {
    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 ) {
        alert('Insira um Número de 0 a 10')
    }
}
// quando a tecla enter for pressionada resetar
function pressKey (tecla) {
    if(tecla.key == 'Enter' && screen1.classList.contains('hide')){
        resetGame()
    }
}
// alterna as screens
function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
// faz o reset
function resetGame () {
    toggleScreen()
    contNum = 1
    randomNumber = Math.round(Math.random() * 10)
}
// eventos 
btnClic.addEventListener('click', toCliclk)
btnReset.addEventListener('click', resetGame)
document.addEventListener('keypress', pressKey)