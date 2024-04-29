
var vlHoraTrabalhada = parseFloat(prompt("Digite o valor da sua hora trabalhada:"));

var horasTrabalhadasMes = parseFloat(prompt("Digite quantas horas você trabalhou no mês:"));

var salarioBruto = vlHoraTrabalhada * horasTrabalhadasMes;

var impostorenda = salarioBruto * 0.11;
var inss = salarioBruto * 0.08;
var sindicato = (salarioBruto * 0.05);
var totalDescontos = impostorenda + inss + sindicato;
var salarioLiquido = salarioBruto - impostorenda - inss - sindicato;


console.log(` Salario bruto R$: ${salarioBruto.toFixed(2)}`)
console.log(`INSS R$ ${inss.toFixed(2)}`)
console.log(`Sindicato: R$ ${sindicato.toFixed(2)}`)
console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`)
console.log(`O total de descontos foi R$ ${totalDescontos.toFixed(2)}`);
