/*-----------------------------------------------------------------------------------

    Theme Name: Fabrex - Multipurpose Business and Admin Template
    Description: Multipurpose Business and Admin Template
    Author: Chitrakoot Web
    Version: 3.3

    /* ----------------------------------

    JS Active Code Index

        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Dropdown career
        07. Category Toggle
        08. Resize function
        09. FullScreenHeight function
        10. ScreenFixedHeight function
        11. FullScreenHeight and screenHeight with resize function
        12. Chart
        13. Sliders
        14. Tabs
        15. CountUp
        16. Countdown
        17. Datepicker
        18. Isotop

    ---------------------------------- */

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logoinner = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            var logowhite = $(".navbar-brand.logowhite img");
            var logowhitedark = $(".navbar-brand.logowhite-dark img");
            var logo2 = $(".navbar-brand.logo2 img");
            var logo4 = $(".navbar-brand.logo4 img");
            var logo5 = $(".navbar-brand.logo5 img");
            var logo6 = $(".navbar-brand.logo6 img");
            var logo7 = $(".navbar-brand.logo7 img");
            var logo8 = $(".navbar-brand.logo8 img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logoinner.attr('src', '../img/logos/logo-inner.png');
                logodefault.attr('src', '../img/logos/logo.png');
                logowhite.attr('src', '../img/logos/logo-white.png');
                logowhitedark.attr('src', '../img/logos/logo-white.png');
                logo2.attr('src', '../img/logos/logo-2-light.png');
                logo4.attr('src', '../img/logos/logo-4.png');
                logo5.attr('src', '../img/logos/logo-5-light.png');
                logo6.attr('src', '../img/logos/logo-6.png');
                logo7.attr('src', '../img/logos/logo-7.png');
                logo8.attr('src', '../img/logos/logo-8.png');
            }
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logoinner.attr('src', '../img/logos/logo.png');
                logodefault.attr('src', '../img/logos/logo.png');
                logowhite.attr('src', '../img/logos/logo-white.png');
                logowhitedark.attr('src', '../img/logos/logo-dark.png');
                logo2.attr('src', '../img/logos/logo-2-dark.png');
                logo4.attr('src', '../img/logos/logo-4.png');
                logo5.attr('src', '../img/logos/logo-5-dark.png');
                logo6.attr('src', '../img/logos/logo-6.png');
                logo7.attr('src', '../img/logos/logo-7.png');
                logo8.attr('src', '../img/logos/logo-8.png');
            }
        });

        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /*------------------------------------
            05. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

       $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
        });

        /*------------------------------------
            06. Dropdown career
        --------------------------------------*/

        $('.select-departments').on('click', function () {
            if ( $('.select-departments .dropdown').hasClass('current') ) {
                $('.select-departments .dropdown').removeClass('current');
            } else {
                $('.select-departments .dropdown').removeClass('current');
                $('.select-departments .dropdown').addClass('current');
            }
        });

        /*------------------------------------
            07. Category Toggle
        --------------------------------------*/

        var resizeTimer;
        $window.on('resize', function (e) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if ($window.width() > 991) {
                    $('.categories .shop-category').show();
                } else {
                    $('.categories .shop-category').hide();
                }
            }, 250);
        });

        //Category toggle on mobile devices
        $('.collapse-sm').on('click', function () {
            $('.categories .shop-category').slideToggle();
            if ( $(this).hasClass('current') ) {
                $(this).removeClass('current');
            } else {
                $(this).removeClass('current');
                $(this).addClass('current');
            }
        });

        //Copy to clipboard
        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };

        $('.source-modal').magnificPopup({
                type: 'inline',
                mainClass: 'mfp-fade',
                removalDelay: 160
        });


        /*------------------------------------
            08. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            09. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            10. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            11. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

    // === when document ready === //
    $(document).ready(function() {

        /*------------------------------------
            12. Chart
        --------------------------------------*/

          // chart default
          if ($("#chBar").length !== 0) {
              var chBar = document.getElementById("chBar");
              var chartData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    data: [350, 365, 425, 475, 525, 575, 625, 675, 725, 775, 825, 875, ],
                    backgroundColor: ['rgba(28, 51, 65,0.8)', 'rgba(0, 135, 115,0.8)', 'rgba(107, 185, 131,0.8)', 'rgba(242, 201, 117,0.8)', 'rgba(237, 99, 83,0.8)', 'rgba(242, 190, 84,0.8)', 'rgba(240, 217, 207,0.8)', 'rgba(135, 174, 180,0.8)', 'rgba(21, 62, 92,0.8)', 'rgba(237, 85, 96,0.8)', 'rgba(201, 223, 241,0.8)', 'rgba(240, 217, 207,0.9)'],
                }, ]
              };
              if (chBar) {
                new Chart(chBar, {
                    type: 'bar',
                    data: chartData,
                    options: {
                        scales: {
                            xAxes: [{
                                barPercentage: 0.5,
                                categoryPercentage: 1
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        }
                    }
                });
              }
        }

          // pie chart
          if ($("#myPieChart").length !== 0) {
            var ctx = document.getElementById('myPieChart').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'pie',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green"],
                    datasets: [{
                        data: [10, 15, 20, 30],
                        backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)','rgba(75, 192, 192, 0.8)'],
                    }],
                }
            });
        }

        /*------------------------------------
            14. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        // Child Tab
        if ($(".childverticaltab").length !== 0) {
            $('.childverticaltab').easyResponsiveTabs({
                type: 'vertical',
                width: 'auto',
                fit: true,
                tabidentify: 'ver_1', // The tab groups identifier
                activetab_bg: '#fff', // background color for active tabs in this group
                inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
                active_border_color: '#c1c1c1', // border color for active tabs heads in this group
                active_content_border_color: '#c1c1c1' // border color for active tabs contect in this group so that it matches the tab head border
            });
        }

        //Vertical Tab
        if ($(".verticaltab").length !== 0) {
            $('.verticaltab').easyResponsiveTabs({
                type: 'vertical', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                closed: 'accordion', // Start closed if in accordion view
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo2');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            15. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            16. Countdown
        --------------------------------------*/

        if ($(".countdown").length !== 0) {
            var tpj = jQuery;
            var countdown;
            tpj(document).ready(function() {
                if (tpj(".countdown").countdown == undefined) {
                    revslider_showDoubleJqueryError(".countdown");
                } else {
                    countdown = tpj(".countdown").show().countdown({
                        date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
                        format: "on"
                    });
                }
            });
        }

        /*------------------------------------
            17. Datepicker
        --------------------------------------*/

        if ($(".datepicker").length !== 0) {
            $('.datepicker').datepicker({
                format: 'mm/dd/yyyy',
                startDate: '-3d'
            })
        }

    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            18. Isotop
        --------------------------------------*/

        // magnificPopup with slider
        $('.single-img').magnificPopup({
            delegate: '.popimg',
            type: 'image'
        });

        // isotope with magnificPopup
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        var $gallery = $('.gallery').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({
                filter: filterValue
            });
        });

        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        // stellar
        $window.stellar();

    });

})(jQuery);
