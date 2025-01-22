$(() => {
    const $homeLink = $("#home-link");
    const $aboutLink = $("#about-link");
    const $contentContainer = $("#content-container");
    const $themeToggle = $("#theme-toggle");
    const $body = $("body");
    const $sunIcon = $("#sun-icon");
    const $moonIcon = $("#moon-icon");

    // Alterna entre os temas (light e dark)
    $themeToggle.on("click", function () {
        $body.toggleClass("dark light");

        // Mostra o ícone apropriado ao alternar
        if ($body.hasClass("dark")) {
            $sunIcon.hide();  // Esconde o ícone do sol
            $moonIcon.show(); // Exibe o ícone da lua
        } else {
            $moonIcon.hide(); // Esconde o ícone da lua
            $sunIcon.show();  // Exibe o ícone do sol
        }
    });
    // Função para carregar o conteúdo HTML de um arquivo
    function loadContent(page) {
        $.get(`pages/${page}`)
            .done(function (html) {
                $contentContainer.html(html);  // Substitui o conteúdo no container
            })
            .fail(function () {
                console.error("Erro ao carregar o conteúdo");
                $contentContainer.html("<p>Erro ao carregar o conteúdo.</p>");
            });
    }

    // Carregar a página inicial por padrão
    loadContent('home.html');

    // Eventos de clique para alternar entre as páginas
    $homeLink.on("click", function (event) {
        event.preventDefault();
        loadContent('home.html');  // Carrega a página Home
    });

    $aboutLink.on("click", function (event) {
        event.preventDefault();
        loadContent('about.html');  // Carrega a página Sobre
    });
});
