$(() => {
    const HOME_LINK = $("#home-link");
    const ABOUT_LINK = $("#about-link");  
    const CONTENT_CONTAINER = $("#content-container");
    const THEME_TOGGLE = $("#theme-toggle");
    const BODY = $("body");
    const SUN_ICON = $("#sun-icon");
    const MOON_ICON = $("#moon-icon");
    
    const root = document.documentElement;
    root.classList.add('js', 'js2', 'js3', 'js4', 'js5', 'js6', 'js7');

    const boxTop = (el) => $(el).offset().top;
    const windowHeight = $(window).height();
    const offset = windowHeight - (windowHeight / 30);
    const ANIMATIONS = [
        { selector: ".anime", initClass: "anime-init" },
        { selector: ".anime2", initClass: "anime-init2" },
        { selector: ".anime3", initClass: "anime-init3" },
        { selector: ".anime4", initClass: "anime-init4" },
        { selector: ".anime5", initClass: "anime-init5" },
        { selector: ".anime6", initClass: "anime-init6" },
        { selector: ".anime7", initClass: "anime-init7" }
    ];
    let index = 0;


    const updateText = () => {
        const TEXT_ELEMENT = $('.text-paragraph-reader');
        const TEXT_READER = 'IA e Contabilidade Mudando Seu Futuro';
        TEXT_ELEMENT.text(TEXT_READER.substring(0, index + 1));
        index++;
          
        if (index < TEXT_READER.length) {
            setTimeout(updateText, 175); 
        }
    }

 const texts = $(".text");

 
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
                setTimeout(updateText, 500); 
                document.onmousemove = ev => {
                    const MOVING = $(".moving")
                    const positionX = (window.innerWidth / -90 - ev.x) / -70;
                    const positionY = -ev.y / 100;
                    MOVING.css("transform", `translate(${positionX}px, ${positionY}px)`);

                }
                
            })
            .fail(function() {
                console.error("Erro ao carregar o conteúdo");
                CONTENT_CONTAINER.html("<p>Erro ao carregar o conteúdo.</p>");
            });
    };

    const initialization = () => {
        loadContent('home.html'); 
        setTimeout(updateText, 500);
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
        
        accordion();
        animeScroll();
        $(window).on('scroll', animeScroll);
    };

    initialization();
});
