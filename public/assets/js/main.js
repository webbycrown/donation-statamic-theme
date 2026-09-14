$(document).ready(function () {


    // start-menu bar
    //  Easy selector helper function
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    //  Easy event listener function
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }
    jQuery('.mobile-nav-toggle').click(function () {
        jQuery(this).toggleClass('nav-toggle-active');
        jQuery('.navbar').toggleClass('nav-menu-active');
    });

    // Easy on scroll event listener 
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    //  Mobile nav toggle
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    //  Scrool with ofset on links with a class name .scrollto
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)
    // End-menu bar


    // video clip popup
    function videoId(button) {
        var $videoUrl = button.attr("data-video");
        if ($videoUrl !== undefined) {
            var $videoUrl = $videoUrl.toString();
            var srcVideo;

            if ($videoUrl.indexOf("youtube") !== -1) {
                var et = $videoUrl.lastIndexOf("&");
                if (et !== -1) {
                    $videoUrl = $videoUrl.substring(0, et);
                }
                var embed = $videoUrl.indexOf("embed");
                if (embed !== -1) {
                    $videoUrl =
                        "https://www.youtube.com/watch?v=" +
                        $videoUrl.substring(embed + 6, embed + 17);
                }

                srcVideo =
                    "https://www.youtube.com/embed/" +
                    $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                    "?autoplay=1&mute=1&loop=1&playlist=" +
                    $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                    "";
            } else if ($videoUrl.indexOf("youtu") !== -1) {
                var et = $videoUrl.lastIndexOf("&");
                if (et !== -1) {
                    $videoUrl = $videoUrl.substring(0, et);
                }
                var embed = $videoUrl.indexOf("embed");
                if (embed !== -1) {
                    $videoUrl =
                        "https://youtu.be/" + $videoUrl.substring(embed + 6, embed + 17);
                }

                srcVideo =
                    "https://www.youtube.com/embed/" +
                    $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                    "?autoplay=1&mute=1&loop=1&playlist=" +
                    $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                    "";
            } else if ($videoUrl.indexOf("vimeo") !== -1) {
                srcVideo =
                    "https://player.vimeo.com/video/" +
                    $videoUrl
                        .substring($videoUrl.indexOf(".com") + 5, $videoUrl.length)
                        .replace("/", "") +
                    "?autoplay=1";
            } else if ($videoUrl.indexOf("mp4") !== -1) {
                return (
                    '<video loop playsinline autoplay><source src="' +
                    $videoUrl +
                    '" type="video/mp4"></video>'
                );
            } else if ($videoUrl.indexOf("m4v") !== -1) {
                return (
                    '<video loop playsinline autoplay><source src="' +
                    $videoUrl +
                    '" type="video/mp4"></video>'
                );
            } else {
                alert(
                    "The video assigned is not from Youtube, Vimeo or MP4, remember to enter the correct complete video link .\n - Youtube: https://www.youtube.com/watch?v=43ngkc2Ejgw\n - Vimeo: https://vimeo.com/111939668\n - MP4 https://server.com/file.mp4"
                );
                return false;
            }
            return (
                '<iframe src="' +
                srcVideo +
                '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            );
        } else {
            alert("No video assigned.");
            return false;
        }
    }

    $(".lets-play").click(function (e) {
        e.preventDefault();
        var $theVideo = videoId($(this));
        if ($theVideo) {
            $("body")
                .append(
                    '<div class="active" id="video-wrap"><span class="video-overlay"></span><div class="video-container">' +
                    $theVideo +
                    '</div><button class="close-video"></button></div>'
                )
                .addClass("active");
        }
    });

    $(document).on("click", ".close-video, .video-overlay", function () {
        $("#video-wrap").remove();
    });

    var swiper = new Swiper(".our-latest-news-section-container .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".our-latest-news-section-container .swiper-button-next",
            prevEl: ".our-latest-news-section-container .swiper-button-prev",
        },
        breakpoints: {
            "575": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "991": {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },
    });

    jQuery('.page').css('margin-bottom', '0');


    // Accordions
    $(document).ready(function () {
        let faqs = $(".faq_details");
        $(".faq_title").click(function () {
            if ($(this).hasClass("active")) {

            } else {
                faqs.slideUp();
                faqs.prev().removeClass("active");
                $(this).next().slideDown();
                $(this).addClass("active");
            }
            return false;
        });
    });

    // search-bar js

    jQuery("a.wc-search-icon").click(function () {
        jQuery(".wc_search_bar").addClass("search_open");
    });
    jQuery("a.wc-close-icon").click(function () {
        jQuery(".wc_search_bar").removeClass("search_open");
    });

    // latest blog slider js

    var swiper = new Swiper(".latest-blog .mySwiper", {
        spaceBetween: 27,
        slidesPerView: 3,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".latest-blog .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".latest-blog .swiper-button-next",
            prevEl: ".latest-blog .swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 640px
            0: {
                slidesPerView: 1,

            },
            576: {
                slidesPerView: 1,

            },
            // when window width is >= 480px
            767: {
                slidesPerView: 2,

            },
            991: {
                slidesPerView: 3,

            },
            // when window width is >= 320px
            1200: {
                slidesPerView: 3,

            },


        }
    });

    // testimonial swiper

    var swiper = new Swiper(".testimonial-section .mySwiper", {
        cssMode: true,
        navigation: {
            nextEl: ".testimonial-section .swiper-button-next",
            prevEl: ".testimonial-section .swiper-button-prev",
        },
    });

    //   latest blog three swiper

    var swiper = new Swiper(".latest-blog-three .mySwiper", {
        spaceBetween: 40,
        navigation: {
            nextEl: ".latest-blog-three .latest-blog-next-btn",
            prevEl: ".latest-blog-three .latest-blog-prev-btn",
        },
        breakpoints: {
            // when window width is >= 640px
            576: {
                slidesPerView: 2,

            }
        }
    });

    //   sponser-three swiper

    var swiper = new Swiper(".wc-sponser-three .mySwiper", {
        navigation: {
            nextEl: ".wc-sponser-three .swiper-button-next",
            prevEl: ".wc-sponser-three .swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            1200: {
                slidesPerView: 5,

            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,

            },
            // when window width is >= 640px
            576: {
                slidesPerView: 2,

            }
        }
    });



    //   testimonial-three swiper

    var swiper = new Swiper(".testimonial-three .mySwiper", {
        spaceBetween: 40,
        navigation: {
            nextEl: ".testimonial-three .swiper-button-next",
            prevEl: ".testimonial-three .swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 480px
            768: {
                slidesPerView: 2,

            },
            // when window width is >= 640px
            576: {
                slidesPerView: 1,

            }
        }
    });


    //   volunteers swiper

    var swiper = new Swiper(".volunteers .mySwiper", {
        spaceBetween: 40,
        navigation: {
            nextEl: ".volunteers .swiper-button-next",
            prevEl: ".volunteers .swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 480px
            768: {
                slidesPerView: 2,

            },
            // when window width is >= 640px
            576: {
                slidesPerView: 1,

            }
        }
    });


    //   faq swiper

    var swiper = new Swiper(".faq-testimonial .mySwiper", {
        spaceBetween: 40,
        navigation: {
            nextEl: ".faq-testimonial .swiper-button-next",
            prevEl: ".faq-testimonial .swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 480px
            768: {
                slidesPerView: 2,

            },
            // when window width is >= 640px
            576: {
                slidesPerView: 1,

            }
        }
    });

    // navbar-three js

    // $(".menu-toggle").click(function () {
    //     $(this).toggleClass("on");
        // $(".nav-list").slideToggle();
    // });


    $(".header-three .menu-toggle-three").click(function () {
        $(".header-three").addClass("active");
        $(".header-three .nav-list").slideDown();
    });
    $(".header-three .menu_three_close").click(function () {
        $(".header-three").removeClass("active");
        $(".header-three .nav-list").slideUp();
    });


    // career pop up

    $(document).ready(function() {
        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',
    
            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    });


    AOS.init({
        once: true,
        duration: 1000,
    });

});