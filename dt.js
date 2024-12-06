let agr = new Date()
let aniversario = new Date(2025, 05, 28, 23, 59, 59) 
const diferencaAgr = aniversario - agr


const segundos = Math.floor((diferencaAgr / 1000) % 60);
const minutos = Math.floor((diferencaAgr / (1000 * 60)) % 60);
const horas = Math.floor((diferencaAgr / (1000 * 60* 60)) % 60);
const dias = Math.floor((diferencaAgr / (1000 * 60*60*24)) % 60);
const mes = Math.floor((diferencaAgr / (1000 * 60*60*24*30)) % 60);



console.log(segundos)
console.log(minutos)
console.log(horas)
console.log(dias)
console.log(mes)

document.getElementById("minha-div").innerHTML = "Faltam " + mes + "m " + dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";