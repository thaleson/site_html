  // Adiciona um evento de clique aos botões de pagamento
  document.getElementById('pix-button').addEventListener('click', function() {
    processarPagamento('pix✅');
});

document.getElementById('cartao-button').addEventListener('click', function() {
    processarPagamento('cartao✅');
});

document.getElementById('avista-button').addEventListener('click', function() {
    processarPagamento('avista✅');
});

function processarPagamento(metodo) {
    alert('Pagamento efetuado com sucesso via ' + metodo.toUpperCase());
}