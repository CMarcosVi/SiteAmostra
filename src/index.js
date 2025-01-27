$(() => {
    const HOME_LINK = $("#home-link");
    const ABAOUT_LINK = $("#about-link");
    const CONTENT_CONTAINER = $("#content-container");
    const THEME_TOGGLE = $("#theme-toggle");
    const BODY = $("body");
    const SUN_ICON = $("#sun-icon");
    const MOON_ICON = $("#moon-icon");

    THEME_TOGGLE.on("click", function () {
        BODY.toggleClass("dark light");

        if (BODY.hasClass("dark")) {
            THEME_TOGGLE.css({"backgroundColor": "#fff"})
            SUN_ICON.hide();  
            MOON_ICON.show(); 
        } else {
            THEME_TOGGLE.css({"backgroundColor": "#000"})
            MOON_ICON.hide(); 
            SUN_ICON.show();  
        }
    });
    function loadContent(page) {
        $.get(`pages/${page}`)
            .done(function (html) {
                CONTENT_CONTAINER.html(html);
            })
            .fail(function () {
                console.error("Erro ao carregar o conteúdo");
                CONTENT_CONTAINER.html("<p>Erro ao carregar o conteúdo.</p>");
            });
    }
    loadContent('home.html');

    HOME_LINK.on("click", function (event) {
        HOME_LINK.addClass("active");
        ABAOUT_LINK.removeClass("active");
        event.preventDefault();
        loadContent('home.html');  
    });
    ABAOUT_LINK.on("click", function (event) {
        ABAOUT_LINK.addClass("active");
        HOME_LINK.removeClass("active");
        event.preventDefault();
        loadContent('about.html');
    });
});
