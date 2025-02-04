let totalGeral;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valorw
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade > 0) {
        //calcular o preço, o nosso subtotal
        let preco = quantidade * valorUnitario;

        //adicionar no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
            </section>`;


        //adicionar o valor total
        totalGeral = totalGeral + preco;

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$${totalGeral}`;
        document.getElementById('quantidade').value = 0;
    } else {
        alert('Quantidade inválida, tente novamente.')
    }
    
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}