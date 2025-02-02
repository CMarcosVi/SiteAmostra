$(() => {
    const HOME_LINK = $("#home-link");
    const ABOUT_LINK = $("#about-link");  // Corrigido o nome da variável
    const CONTENT_CONTAINER = $("#content-container");
    const THEME_TOGGLE = $("#theme-toggle");
    const BODY = $("body");
    const SUN_ICON = $("#sun-icon");
    const MOON_ICON = $("#moon-icon");
    
    // Adicionando as classes no root de forma mais segura
    var root = document.documentElement;
    root.classList.add('js', 'js2', 'js3', 'js4', 'js5', 'js6');

    $(document).ready(function () {
        // Seleciona os novos alvos de animação
        var $targets = {
            anime: $('.anime'),
            anime2: $('.anime2'),
            anime3: $('.anime3'),
            anime4: $('.anime4'),
            anime5: $('.anime5'),
            anime6: $('.anime6')
        };

        var windowHeight = $(window).height();
        var offset = windowHeight - (windowHeight / 11);

        function boxTop(element) {
            return $(element).offset().top;
        }

        function animeScroll() {
            var documentTop = $(document).scrollTop();

            Object.keys($targets).forEach((key) => {
                var $target = $targets[key];
                $target.each(function () {
                    if (documentTop > boxTop(this) - offset) {
                        $(this).addClass(`anime-init${key.replace('anime', '')}`);
                    } else {
                        $(this).removeClass(`anime-init${key.replace('anime', '')}`);
                    }
                });
            });
        }

        animeScroll();  // Chama a função na carga inicial da página

        $(document).scroll(function () {
            animeScroll();  // Chama novamente sempre que o scroll é feito
        });
    });

    THEME_TOGGLE.on("click", function () {
        BODY.toggleClass("dark light");

        if (BODY.hasClass("dark")) {
            THEME_TOGGLE.css({"backgroundColor": "#fff"});
            SUN_ICON.hide();  
            MOON_ICON.show(); 
        } else {
            THEME_TOGGLE.css({"backgroundColor": "#000"});
            MOON_ICON.hide(); 
            SUN_ICON.show();  
        }
    });

    // Obtém todos os botões do acordeão
    var accordions = document.querySelectorAll('.accordion');

    // Adiciona um evento de clique a cada botão
    accordions.forEach(function(accordion) {
        accordion.addEventListener('click', function() {
            // Alterna o "active" na seção clicada
            this.classList.toggle('active');

            // Obtém o painel associado
            var panel = this.nextElementSibling;

            // Se o painel estiver visível, esconda-o; caso contrário, mostre-o
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
    });

    const loadContent = (page) => {
        $.get(`pages/${page}`)
            .done(function (html) {
                CONTENT_CONTAINER.html(html);
            })
            .fail(function () {
                console.error("Erro ao carregar o conteúdo");
                CONTENT_CONTAINER.html("<p>Erro ao carregar o conteúdo.</p>");
            });
    };
    loadContent('home.html');

    const initialization = () => {
        HOME_LINK.on("click", function (event) {
            HOME_LINK.addClass("active");
            ABOUT_LINK.removeClass("active");
            event.preventDefault();
            loadContent('home.html');  
        });
        ABOUT_LINK.on("click", function (event) {
            ABOUT_LINK.addClass("active");
            HOME_LINK.removeClass("active");
            event.preventDefault();
            loadContent('about.html');
        });
    };
    initialization();
});
