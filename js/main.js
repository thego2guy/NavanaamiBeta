(function($) {
  "use strict";
    
    
/*----------------------------
   Preloader
------------------------------ */
 
    
$(".preloader").fadeOut(500);
    
  
    
/*--------------------------
    Scroll Sticky
---------------------------- */
  var windows = $(window);
  var Header = $(".main-header");  
  if (Header.length) {
    var navOffset = Header.offset().top;
    windows.on('scroll', function() {
      var scroll = windows.scrollTop();
      if (scroll > navOffset) {
        $(".main-header").addClass('sticky');
      }
      else {
        $(".main-header").removeClass('sticky');
      }
    });
  }
  var documentElem = $(document), navAppear = $('.main-header'), lastScrollTop=0;
  documentElem.on('scroll', function() {
    var currentScrollTop = $(this).scrollTop();
    if(currentScrollTop > lastScrollTop) navAppear.addClass('nav-out');
    else navAppear.removeClass('nav-out');
    lastScrollTop = currentScrollTop;
  });
    
    
// niceSelect;
  $("select").niceSelect();
    

/*--------------------------
    Mobile Menu
---------------------------- */
    
  $("#my-mobile-menu").meanmenu({
    meanMenuContainer: ".my-mobile-menu",
    meanScreenWidth: "991"
  });

  // offcanvas menu
  $(".menu-icon").on("click", function () {
    $(".offcanvas-menu,.offcanvas-overly").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overly").on("click", function () {
    $(".offcanvas-menu,.offcanvas-overly").removeClass("active");
  });

    
    

  // slider
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function(e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
        
      prevArrow:
        '<button type="button" class="slick-prev"> <i class="lnr lnr-arrow-left"></i> prev </button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="lnr lnr-arrow-right"></i> Next</button>',
      arrows: false,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } },
        {
          breakpoint: 1201,
          settings: {
            arrows: false
          }
        }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();
    
// Single Project - Hyderabad
  $(".project-signle-slide").slick({
   
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
       dots: false,
    arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"> <i class="lnr lnr-chevron-left-circle"></i> </button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="lnr lnr-chevron-right-circle"></i></button>'
  });
    
    // Single Project - Bangalore
  $(".ongoing-bangalore").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
      rtl: true,
       dots: false,
    arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"> <i class="lnr lnr-chevron-left-circle"></i> </button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="lnr lnr-chevron-right-circle"></i></button>'
  });

    
    // Project Slides
  $(".project-slides").slick({
   
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"> <i class="lnr lnr-chevron-left-circle"></i> </button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="lnr lnr-chevron-right-circle"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
    
    // Single Testimonial 
  $(".testimonial-active").slick({
   
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
       dots: true,
      arrows: false
      
  });

  // service-active
  $(".service-active").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // case-active
  $(".case-active").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"> <i class="far fa-arrow-alt-circle-left"></i>  </button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i> </button>',
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // testimonial-active
  $(".testimonial-active").slick({
    dots: false,
//    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"> <i class="far fa-arrow-alt-circle-left"></i>  </button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i> </button>',
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // brand-active
  $(".brand-active").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,   
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"> <i class="far fa-arrow-alt-circle-left"></i>  </button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i> </button>',
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // magnificPopup
  $(".view-video,.video-view").magnificPopup({
    type: "iframe"
  });

  

  // counterUp

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // isotope
  $('.portfolio-active').imagesLoaded(function () {
      var $grid = $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        layoutMode: 'fitRows',
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
      })

      // filter items on button click
      $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
      //for menu active class
      $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });

  });



})(jQuery);
