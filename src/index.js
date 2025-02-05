$(() => {
    const HOME_LINK = $("#home-link");
    const ABOUT_LINK = $("#about-link");  
    const CONTENT_CONTAINER = $("#content-container");
    const THEME_TOGGLE = $("#theme-toggle");
    const BODY = $("body");
    const SUN_ICON = $("#sun-icon");
    const MOON_ICON = $("#moon-icon");
    const ANIMATIONS = [
        { selector: ".anime", initClass: "anime-init" },
        { selector: ".anime2", initClass: "anime-init2" },
        { selector: ".anime3", initClass: "anime-init3" },
        { selector: ".anime4", initClass: "anime-init4" },
        { selector: ".anime5", initClass: "anime-init5" },
        { selector: ".anime6", initClass: "anime-init6" },
        { selector: ".anime7", initClass: "anime-init7" }
    ];

    const root = document.documentElement;
    root.classList.add('js', 'js2', 'js3', 'js4', 'js5', 'js6', 'js7');

    const boxTop = (el) => $(el).offset().top;
    const windowHeight = $(window).height();
    const offset = windowHeight - (windowHeight / 30);

    const animeScroll = () => {
        const documentTop = $(document).scrollTop();
        ANIMATIONS.forEach(function(animation) {
            const $target = $(animation.selector);
            $target.each(function() {
                if (documentTop > boxTop(this) - offset) {
                    $(this).addClass(animation.initClass);
                } else {
                    $(this).removeClass(animation.initClass);
                }
            });
        });
    };

    const accordion = () => {
        $(".accordion").each(function() {
            $(this).on("click", () => {
                $(this).toggleClass("active");
                const panel = $(this).next(".panel");
                if (panel.css("max-height") !== "0px") {
                    panel.css("max-height", "0");
                } else {
                    panel.css("max-height", panel.prop("scrollHeight") + "px");
                }
                const icon = $(this).find(".accordion-icon");
                icon.toggleClass("rotated");
            });
        });
    }

    const loadContent = (page) => {
        return $.get(`pages/${page}`)
            .done(function(html) {
                CONTENT_CONTAINER.html(html);
                accordion(); 
            })
            .fail(function() {
                console.error("Erro ao carregar o conteúdo");
                CONTENT_CONTAINER.html("<p>Erro ao carregar o conteúdo.</p>");
            });
    };

    const initialization = () => {
        loadContent('home.html'); 

        THEME_TOGGLE.on("click", () => {
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

        HOME_LINK.on("click", function(event) {
            HOME_LINK.addClass("active");
            ABOUT_LINK.removeClass("active");
            event.preventDefault();
            loadContent('home.html'); 
        });

        ABOUT_LINK.on("click", function(event) {
            ABOUT_LINK.addClass("active");
            HOME_LINK.removeClass("active");
            event.preventDefault();
            loadContent('about.html');
        });
        $(document).ready(function() {
            accordion();
        });
        animeScroll();
        $(window).on('scroll', animeScroll);
    };

    initialization();
});
