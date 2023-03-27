let number1 = Number(prompt(`Digite o primeiro número`))
let number2 = Number(prompt(`Digite o segundo número`))
let evenOrOdd;
let iqualNumber;


if((number1 + number2) %2 == 0 ){
  evenOrOdd = "é par"
} else{
  evenOrOdd = "é impar"
}


if(number1 == number2){

  iqualNumber = " Iguais"
} else{
  iqualNumber = " Diferentes"
}

let operators = [{
  operação1: number1 + number2,
  operação2: number1 - number2,
  operação3: number1 * number2,
  operação4: number1 / number2,
  operação5: number1 % number2,
}]

let results = [];

for (let operacion of operators ){
  results.push( alert(`A soma dos dois números é: ${operacion.operação1}`))
  results.push( alert(`A subtração dos dois números é: ${operacion.operação2}`))
  results.push( alert(`A multiplicação dos dois números é: ${operacion.operação3}`))
  results.push( alert(`A divisão dos dois números é: ${operacion.operação4}`))
  results.push( alert(`O resto da divisão dos dois números é: ${operacion.operação5}`))
  results.push( alert(`A soma dos dois números digitados ${evenOrOdd}: ${operacion.operação1}`))
  results.push( alert(`Os números inseridos são: ${iqualNumber}`))
}



