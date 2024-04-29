var preco = prompt('Digite o preço do produto desejado:')

var descProduto = preco*0.10

var precoVista = preco - descProduto;

console.log(`O valor do produto à vista é de R$ ${precoVista.toFixed(2)}`)

