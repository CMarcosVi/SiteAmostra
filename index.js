// script.js
document.getElementById('home').addEventListener('click', function() {
    carregarConteudo('home.html');
});
document.getElementById('sobre').addEventListener('click', function() {
    carregarConteudo('sobre.html');
});
document.getElementById('contato').addEventListener('click', function() {
    carregarConteudo('contato.html');
});

function carregarConteudo(pagina) {
    const conteudo = document.getElementById('conteudo');

    // Carregar o conteúdo da página
    fetch(pagina)
        .then(response => response.text())
        .then(html => {
            conteudo.innerHTML = html;

            // Atualizar o histórico do navegador sem recarregar a página
            history.pushState({pagina: pagina}, '', pagina);
        })
        .catch(error => {
            conteudo.innerHTML = `<p>Erro ao carregar a página: ${error.message}</p>`;
        });
}

// Detectando navegação pelo botão voltar
window.onpopstate = function(event) {
    if (event.state) {
        carregarConteudo(event.state.pagina);
    }
};
