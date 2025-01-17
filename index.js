document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const contentContainer = document.getElementById("content-container");

    // Função para carregar o conteúdo HTML de um arquivo
    function loadContent(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o conteúdo');
                }
                return response.text();
            })
            .then(html => {
                contentContainer.innerHTML = html;  // Substitui o conteúdo no container
            })
            .catch(error => {
                console.error(error);
                contentContainer.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
            });
    }

    // Carregar a página inicial por padrão
    loadContent('home.html');

    // Eventos de clique para alternar entre as páginas
    homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        loadContent('home.html');  // Carrega a página Home
    });

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        loadContent('about.html');  // Carrega a página Sobre
    });
});
