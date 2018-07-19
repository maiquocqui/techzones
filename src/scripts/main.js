// ;
// function lazyloadAjax() {
//     $('.lazy').lazy({
//         //effect: "fadeIn",
//         //effectTime: 500,
//         //threshold: 100
//         effect: "fadeIn", effectspeed: 300, failure_limit: 999, threshold: 50
//     });
// }

;
var CarouselInit = {
    InitHomepage6Products: function() {
        if ($(window).width() > 1199) {
            $('#tabMainContent .slick-carousel').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
                arrows: true,
                swipeToSlide: false
            });
        }
    },
    InitHomepage4Products: function() {
        if ($(window).width() > 1199) {
            $('#tabByCatContent .slick-carousel').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 800,
                swipeToSlide: false,
                dots: false,
                arrows: true
            });
        }
    }
};

;
$(window).trigger("scroll");
$(window).trigger("resize");

function autoCutStr(prefix) {

    if (!prefix || prefix === undefined) {
        prefix = "autoCutStr_";
    }
    $('[class^="' + prefix + '"]').each(function() {
        if ($(this).length > 0) {
            var str = $(this).text();
            str = str.replace('<br/>', '');
            str = str.replace('<br>', '');
            $(this).html(str);
            var len = parseInt($(this).attr("class").substr($(this).attr("class").lastIndexOf("_") + 1));
            var length = str.length;
            if (length > len) {
                if (str.charAt(len) == ' ') {
                    str = str.substr(0, len);
                } else {
                    str = str.substr(0, len);
                    str = str.substr(0, str.lastIndexOf(" "));
                }
                $(this).html(str + "...");
            }
        }

    });
};

var wdH = 0,
    wdW = 0;

function winresize() {
    wdH = $(window).height();
    wdW = $(window).width();
}

;
$(document).ready(function() {
    'use strict';
    // lazyloadAjax();

    $('.productsearchbox input').keypress(function(e) {
        if (e.which == 13) {
            $('.productsearchbox button').click();
            return false;
        }
    });

    CarouselInit.InitHomepage6Products();
    CarouselInit.InitHomepage4Products();

    new WOW().init();
    // $('header').scrollToFixed({
    //     zIndex: 1000
    // });
    if ($(window).width() > 1199) {
        $('.product-header').scrollToFixed({
            zIndex: 1000,
            marginTop: 130,
        });
    }
    if ($(window).width() < 1200) {
        $('.product-header').scrollToFixed({
            zIndex: 1000,
            marginTop: 50,
        });
    }

    $('.compare-products-mobile .product-header td').each(function() {
        if ($('.compare-products-mobile .product-header td').length < 3) {
            $(this).addClass('odd');
        }
    });

    $('.btn-backpage').on('click', function() {
        history.back(-1);
        return false;
    });

    $('.buy-check').click(function() {
        $(this).toggleClass('active');
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 500) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    // var btnoff = $('.productlist').offset();
    // alert(btnoff.top);
    // $('[data-toggle="tooltip"]').tooltip();
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > ($('.productlist').offset().top - $('header').outerHeight())) {
            $('.btn-compare').addClass('fly-compare');
            // $('.btn-compare').attr('data-toggle', 'tooltip').attr('data-placement', 'left').attr('title', 'So sánh');
        } else {
            $('.btn-compare').removeClass('fly-compare');
            // $('.btn-compare').attr('data-toggle', '').attr('data-placement', '').attr('title', '');
        }
    });

    $('.up').on('click', function(event) {
        $('html, body').animate({ scrollTop: '0px' }, 300);
    });

    $(".login-facebook,.login-google").on('click', function() {
        var url = $(this).data('url');
        window.open(url, "popupWindow", "width=640,height=480,scrollbars=yes");
        return false;
    });

    $('.home-banner .banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        fade: true,
        speed: 500,
        arrows: false,
        dots: false
    });
    if ($(window).width() > 1199) {
        $('.home-product-slide, .newproduct-slide').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            speed: 800,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
            swipeToSlide: false
        });
    }

    $('.product-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        fade: true,
        speed: 800,
        arrows: true,
        dots: false
    });

    $('.mobile-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        fade: true,
        speed: 800,
        arrows: true,
        dots: true
    });
    if ($(window).width() > 1199) {
        $('.home-news .news-list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: false,
            speed: 800,
            dots: false,
            arrows: true
        });
    }

    $('.popup-link').fancybox({
        selector: '[data-fancybox="option"]',
    });

    $('.btn-showmenu').on('click', function() {
        $('.fullpage').addClass('open');
        $('.mobile-menu').addClass('open');
        $('.overlay').fadeIn(300);
        $('body').addClass('active');
    });

    $('.overlay').click(function() {
        $('.fullpage').removeClass('open');
        $('.mobile-menu').removeClass('open');
        $(this).fadeOut(300);
        $('body').removeClass('active');
    });

    // SEARCH
    $('.searchtoggle').click(function() {
        $('.mobile-search').addClass('open');
        $('body').css('overflow', 'hidden');
    });
    $('.btn-closesearch').click(function() {
        $('.mobile-search').removeClass('open');
        $('body').css('overflow', 'unset');
    });

    $('.btn-showdetail').click(function() {
        $(this).toggleClass('active');
        $(this).parent('.btnwrap').siblings('.mini-detail').fadeToggle(300);
    });
    // END SEARCH

    // SLICK SLIDE

    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        swipeToSlide: false,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.product-nav',
        responsive: [{
            breakpoint: 480,
            settings: {
                fade: false,
            }
        }]
    });

    $('.product-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: false,
        asNavFor: '.product-slide',
        dots: false,
        arrows: true,
        infinite: false,
        centerMode: false,
        focusOnSelect: true,
        swipe: true,
        swipeToSlide: true,
        vertical: true,
        verticalSwiping: true
    });

    $('.category-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: true,
        dots: true,
        speed: 500,
        asNavFor: '.category-slide'
    });

    $('.category-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        asNavFor: '.category-nav',
        arrows: true,
        dots: false,
        fade: true,
        speed: 800
    });

    if ($(window).width() > 1199) {
        $('.cart-lastview .lastview-list').slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            swipeToSlide: false,
            arrows: true,
            dots: false,
            speed: 500,
            infinite: false
        });

        $('.top-review .post-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: false,
            arrows: true,
            dots: false,
            speed: 500,
            infinite: false
        });
    }
    // END SLICK SLIDE
    // $('.btn-filterwrap').on('click', '.btn-changeview', function() {
    //     $(this).toggleClass('active');
    //     $('.productlist').find('article').toggleClass('change');
    // });


    $('.btn-filterwrap').on('click', '.btn-showfilter', function() {
        $('.option-group').addClass('open');
        $('body').css('overflow', 'hidden');
    });

    $('.btn-filterwrap').on('click', '.btn-showcate', function() {
        $('.category-group').addClass('open');
        $('body').css('overflow', 'hidden');
    });

    $('.btn-showsubfilter').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.subfilter').slideToggle(300);
    });

    $('.filter-wrap').on('click', '.btn-closefilter', function() {
        $('.option-group').removeClass('open');
        $('.category-group').removeClass('open');
        $('body').css('overflow', 'unset');
    });

    // if ($(window).width() < 1024) {
    $("body").on("click", '.filter-group .filter-name', function(e) {
        var _parent = $(this).parent();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            _parent.find('.filter-option').slideUp(300);
        } else {
            $('.filter-group .filter-name').removeClass('active');
            $('.filter-group .filter-option').slideUp();
            $(this).addClass('active');
            _parent.find('.filter-option').slideDown(300);
        }
    });


    if ($(window).width() > 1200) {
        $('.header-main .cart').on('click', '.cart-toggle', function() {
            $('.popup-addtocart').addClass('open');
        });
        $('.header-main .cart').on('click', '.btn-hidepopup', function() {
            $('.popup-addtocart').removeClass('open');
        });
    }


    // }

    // COMPARE SCRIPT
    $('.product-page').on('click', '.btn-compare', function() {
        $('.compare-panel').show();
    });

    $('.compare-panel').on('click', '.btn-minimize', function() {
        $(this).toggleClass('active');
        $('.compare-panel').toggleClass('hide');
    });

    $('.compare-panel').on('click', '.btn-closecompare', function() {
        $('.btn-compare').trigger('click');
    });

    $('.specifications .title a').click(function(e) {
        e.preventDefault();

        var icon = $(this).find('i');
        icon.toggleClass('active');
        if (icon.hasClass('active')) {
            icon.removeClass('fa-plus').addClass('fa-minus');
            $('.specifications tr[data-title="' + $(this).data('title') + '"]').removeClass('hidden');
        } else {
            icon.removeClass('fa-minus').addClass('fa-plus');
            $('.specifications tr[data-title="' + $(this).data('title') + '"]').addClass('hidden');
        }

        return false;
    });

    $('.suggest-group .suggest-title').click(function() {
        var _parent = $(this).parent();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            _parent.removeClass('open');
            _parent.find('.suggest-list').slideUp(300);
        } else {
            $('.suggest-group .suggest-title').removeClass('active');
            $('.suggest-group .suggest-list').slideUp();
            $(this).addClass('active');
            $('.suggest-group').removeClass('open');
            _parent.addClass('open');
            _parent.find('.suggest-list').slideDown(300);
        }
    });

    $('.btn-like').click(function() {
        $(this).toggleClass('active');
    });

    if ($(window).width() < 1200) {
        // $('.btn-addtocart').click(function() {
        //     $('.option-popup').addClass('open');
        //     $('.overlay-popup').fadeIn(300);
        // });
        $('.btn-viewdetail').click(function() {
            $('.description-popup').addClass('open');
            $('.overlay-popup').fadeIn(300);
            $('body').addClass('noscroll');
        });
        $('.trigger-navinfo1').on('click', function() {
            $('#detail-info a#nav-info').addClass('active');
            $("#detail-content #tab-info").addClass("active");
        });
        $('.trigger-navinfo2').on('click', function() {
            $('#nav-info2').trigger('click');
        });

        $('.btn-closepanel').click(function() {
            $('.popup-panel').removeClass('open');
            $("#detail-info a").removeClass("active");
            $("#detail-content .tab-pane").removeClass("active");
            $('.overlay-popup').fadeOut(300);
        });
        $('.overlay-popup').click(function() {
            $('.popup-panel').removeClass('open');
            $('.popup-addtocart').removeClass('open');
            $(this).fadeOut(300);
        });

        $("#detail-info a#nav-info2").click(function() {
            var isActive = $(this).hasClass("active");
            $("#detail-info a").removeClass("active");
            var id = $(this).attr("href");
            if (!isActive) {
                $(this).addClass("active");
            } else {
                var obj = $(this).siblings("a");
                obj.addClass("active");
                id = obj.attr("href");
            }

            $("#detail-content .tab-pane").removeClass("active");
            $(id).addClass("active");
        });

        $('#detail-info a[href^="#"]').on('click', function() {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 60
            }, 0);
            return false;
        });
        // ADD TO CART SCRIPT        
        $('.mobile-header .cart').on('click', '.cart-toggle', function() {
            $('.popup-addtocart').addClass('open');
            $('.overlay-popup').fadeIn(300);
        });
        $('.mobile-header .cart').on('click', '.btn-hidepopup', function() {
            $('.popup-addtocart').removeClass('open');
            $('.overlay-popup').fadeOut(300);
        });
        // END ADD TO CART
    }

    $('.tragop-table .btn-wrap a[href^="#"]').on('click', function() {
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 150
        }, 500);
        return false;
    });

    // PRODUCT PAGE SCRIPT
    if ($(window).width() > 1000) {
        if ($('.product-suggest').length) {
            $('.product-suggest').appendTo('.rightcol-wrap');
            $('.product-gift').insertBefore('.product-suggest');
            $('.product-box').insertBefore('.product-suggest');
        } else if ($('.product-gift').length) {
            $('.product-gift').appendTo('.rightcol-wrap');
            $('.product-box').insertBefore('.product-gift');
        } else if ($('.product-box').length) {
            $('.product-box').appendTo('.rightcol-wrap');
        }
    }
    if ($(window).width() > 1199) {
        $('.product-gift').insertBefore('.product-support');
        if ($('.product-gift').length) {
            $('.product-box').insertBefore('.product-gift');
        } else {
            $('.product-box').insertBefore('.product-support');
        }
        $('.product-footer').insertAfter('.product-support');
        $('.product-showcompare').insertAfter('.product-support');
        $('.product-video').insertAfter('.description-wrap');
        // $('.product-suggest').insertAfter('.product-description');
        if ($('.product-video').length) {
            $('.product-relative').insertAfter('.product-video');
        } else {
            $('.product-relative').insertAfter('.description-wrap');
        }
        $('.product-news').insertBefore('.product-footer');
        $('.btn-viewdetail').click(function() {
            $(this).hide();
            $('.product-description .content').css('max-height', 'unset');
        });
        $('.product-other-slide').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            // lazyLoad: 'ondemand',
            // lazyLoadBuffer: 0,
            // fade: true,
            // cssEase: 'linear',
            speed: 800,
            swipeToSlide: false,
            arrows: true,
            dots: false,
            infinite: false
        });

        $('.video-list-slide').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 800,
            swipeToSlide: false,
            centerMode: false,
            arrows: true,
            dots: false,
            infinite: true
        });

        $('.product-lastview-slide').slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            speed: 800,
            swipeToSlide: false,
            arrows: true,
            dots: false,
            centerMode: false,
            infinite: false
        });
    }

    if ($(window).width() >= 1200) {
        $("a.nav-link").on('click', function() {
            $(".tab-pane").hide();
            $($(this).attr("href")).show();
        });
    }

    if ($(window).width() >= 1200) {
        if ($('.product-info-content') <= 600) {
            $(this).parent().children('.btn-showmore').css('display', 'none');
        }
    }
    if ($(window).width() < 1200) {
        if ($('.product-info-content') <= 350) {
            $(this).parent().children('.btn-showmore').css('display', 'none');
        }
    }
    if ($(window).width() < 992) {
        if ($('.product-info-content') <= 300) {
            $(this).parent().children('.btn-showmore').css('display', 'none');
        }
    }
    if ($(window).width() < 544) {
        if ($('.product-info-content') <= 150) {
            $(this).parent().children('.btn-showmore').css('display', 'none');
        }
    }
    if ($(window).width() >= 992) {
        $('.btn-showmore').click(function() {
            $(this).hide();
            $(this).parent().children('.product-info-content').addClass('open');
            return false;
        });
    }
    if ($(window).width() < 992) {
        $('.btn-showmore').click(function() {
            $(this).prev('.product-info-popup').addClass('open');
            $('html').css('overflow', 'hidden');
            return false;
        });
    }
    $('.btn-closeinfo').click(function() {
        $('.product-info-popup').removeClass('open');
        $('html').css('overflow', 'auto');
    });

    if ($('.compare-products').length) {
        if ($(window).width() < 1000) {
            $('.toggle-diff').appendTo('.back-link');
        }
    }

    // CART PAGE SCRIPT
    $('.removenotice').click(function() {
        $('.cartnotice').slideToggle(300);
    });

    $('#btn-ttmh').click(function() {
        $(this).parent().siblings('.form-wrap').slideToggle(300);
    });
    $('#btn-xuathd').click(function() {
        $('.bill-form').slideToggle(300);
    });

    $('#ship1').click(function() {
        $('#ship1-popup').show(300);
        $('#ship2-popup').hide(300);
    });
    $('#ship2').click(function() {
        $('#ship2-popup').show(300);
        $('#ship1-popup').hide(300);
    });



    $('.cart-payment .payment-method').click(function() {
        $('.cart-payment .payment-method').removeClass('.active');
        $('.cart-payment .payment-method .method-content').slideUp(300);
        $(this).addClass('active');
        $(this).find('.method-content').slideDown(300);
    });

    // $('.payment-list li a').click(function() {
    //     $('.payment-list li a').find('input').prop('checked', false);
    //     $(this).find('input').prop('checked', true);
    // });

    $('.payment-list li').on("click", "a", function() {
        $('.payment-list li').find('input').prop('checked', false);
        $(this).find('input').prop('checked', true);
    });

    $('.btn-spin').click(function() {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        var newVal = 0;
        if ($button.text() == '+') {
            newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);

        if (!$button.parent().hasClass("notadd")) AjaxCart.updatecart();
        return false;
    });

    if ($(window).width() > 1000) {
        var _prdCateBottom = $('.block-prdFilterCateWrap').html();
        var _prdFilterBottom = $('.block-prdFilterWrap').html();
        $('.prd-filterBottom').html(_prdFilterBottom);
        $('.prd-filterCateBottom').html(_prdCateBottom);
    }

    if ($('.popup-tragop').length)
        $('.popup-tragop').appendTo("main");

    $('.repaid-order-btn').click(function() {
        $(this).remove();
        $('.popup-tragop').addClass('active');
        return false;
    });

    $('.video-popup-link').click(function() {
        $('.popup-tragop')
            .html('<div class="bank-list" style="padding:0"><iframe width="400" height="350" frameborder="0" allowfullscreen="" src="' + $(this).attr('href') + '"></iframe ><div class="text-center order-info mt-2 mb-2"><a href="#" class="close-popup-button userpanel-cancel-btn">Đóng</a></div></div>')
            .addClass('active');
        return false;
    });

    $('body').on('click', '.close-popup-button', function() {
        $('.popup-tragop').empty().removeClass('active');
        return false;
    });

    if ($('.userpanel-body').length) {
        $('.userpanel-body').each(function() {
            var upBodyHeight = $(this).innerHeight();
            console.log(upBodyHeight);
            if (upBodyHeight > 240) {
                $(this).find('.userpanel-viewmore').addClass('active');
                $(this).addClass('collapsed');
            }
        });
        $('.userpanel-viewmore a').click(function() {
            $(this).parent().parent().removeClass('collapsed');
            $(this).parent().remove();
            return false;
        });
    }

});

;
$(document).ajaxSuccess(function() {
    lazyloadAjax();
    if ($(window).width() > 1200) {
        $('.fbpost-list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 800,
            dots: false,
            arrows: true
        });
    }
    if ($(window).width() > 1000) {
        var _prdCateBottom = $('.block-prdFilterCateWrap').html();
        var _prdFilterBottom = $('.block-prdFilterWrap').html();
        $('.prd-filterBottom').html(_prdFilterBottom);
        $('.prd-filterCateBottom').html(_prdCateBottom);
    }
});

//# sourceMappingURL=main.js.map