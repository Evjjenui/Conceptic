(function() {
  var initCarousel, initFancyBox, initMenu, initUi;

  initCarousel = function() {
    $('.view-reviews').slick({
      responsive: [
        {
          breakpoint: 8000,
          settings: "unslick"
        },
        {
          breakpoint: 5121,
          settings: {
            dots: true,
            arrows: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.offers-slider, #hookah-scroll').slick({
      responsive: [
        {
          breakpoint: 8000,
          settings: "unslick"
        },
        {
          breakpoint: 767,
          settings: {
            dots: true,
            arrows: false,
            // infinite: true
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.reviews-slider').slick({
      responsive: [
        {
          breakpoint: 8000,
          settings: {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.image-slides').slick({
      responsive: [
        {
          breakpoint: 8000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.prev-slides'
          }
        },
        {
          breakpoint: 640,
          settings: "unslick"
        }
      ]
    });
    $('.prev-slides').slick({
      responsive: [
        {
          breakpoint: 8000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.image-slides',
            dots: true,
            focusOnSelect: true,
            dots: false,
            arrows: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
    return $('.section_accessorie .content-wrap').slick({
      responsive: [
        {
          breakpoint: 8000,
          settings: 'unslick'
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  };

  initMenu = function() {
    return $('.menu-btn').on('click', function() {
      return $('body').toggleClass('opened');
    });
  };

  initFancyBox = function() {
    $(".section_offers__gallery .offers-item a").fancybox({
      arrows: true,
      infobar: false,
      toolbar: false,
      transitionEffect: "fade",
      thumbs: {
        autoStart: true,
        axis: 'x'
      }
    });
    if (window.innerWidth < 640) {
      return $(".section_offers__gallery .offers-item a").on('click', function() {
        return $.fancybox.destroy();
      });
    }
  };

  initUi = function() {
    $('.play-button').on('click', function() {
      return $('.video').get(0).pause();
    });
    $('select').select2({
      minimumResultsForSearch: -1
    });
    $('.coupon-show').on('click', function() {
      $(this).hide();
      return $('.cart-controls_coupon').show();
    });
    $('.specifications > span').on('click', function() {
      return $('.specifications ol').slideToggle();
    });
    return $('.spinner').spinner({
      min: 1,
      max: 10000
    }).val(1);
  };

  $(function() {
    initUi();
    initMenu();
    initFancyBox();
    return initCarousel();
  });

}).call(this);
