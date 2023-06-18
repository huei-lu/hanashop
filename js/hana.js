/* Please ❤ this if you like it! */
$(function () {
    "use strict";

    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            }
            else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });

    //Animation

    $(document).ready(function () {
        $('#menubar').removeClass('menubar');
    });

    //Menu On Hover

    $('#menubar').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

    //Switch light/dark

    // $("#switch").on('click', function () {
    //     if ($("body").hasClass("dark")) {
    //         $("body").removeClass("dark");
    //         $("#switch").removeClass("switched");
    //     }
    //     else {
    //         $("body").addClass("dark");
    //         $("#switch").addClass("switched");
    //     }
    // });
    //換圖輪播
    /* When your mouse cursor enter the background, the fading won't pause and keep playing */
    $('.carousel').carousel({
        pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
    });

    $('.gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 100)
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn();
        }
        else {
            $('.gotop').fadeOut();
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#topbar').fadeOut();
        }
        else {
            $('#topbar').fadeIn();
        }
    });

    // 啟用JQUERY SMOOVE
    $('.smoove').smoove(/*options，此處可以填選擇，請看smoove的option，不需要就’()‘即可*/{
        offset: '30%',
    });

    $('.smoove_1').smoove(/*options，此處可以填選擇，請看smoove的option，不需要就’()‘即可*/{
        offset: '30%',
        opacity: '0'
        // afterMove: function () {
        //     $('.smoove_1').css('opacity', 70); // 将元素透明度设置为0.7
        // }
    });

    // $('#gallery a').hover(
    //     function () {
    //         $(this).css('opacity', 1);
    //     },
    //     function () {
    //         $(this).css('opacity', 0.7); // 鼠标离开时恢复为0.7
    //     },
    //     function () {
    //         $(this).css('opacity', 1);
    //     }
    // );
    // 讓shuffle旋轉
    $('.shuffle_a').click(function (e) {
        e.preventDefault(); // 防止超連結的預設行為

        $('.shuffleme').toggleClass('rotate');
    });
});

$(document).ready(function () {


    var quotes = $(".shuffle");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1500)
            .delay(1000)
            .fadeOut(1500, showNextQuote);
    }

    showNextQuote();

});

// 讓花花到指定位置後旋轉
$(window).scroll(function () {
    var h = $(window).height() - 600;
    if ($(this).scrollTop() > h) {
        $('#gray').css("animation-name", "rotation");
        $('#white').css("animation-name", "rotation");
        $('#moving_2').css("animation-name", "moving_2");
        $('#moving_1').css("animation-name", "moving_1");
        $('#deepgray_1').css("animation-name", "rotation2");
        $('#moving_3').css("animation-name", "moving_3");
        $('#deepgray_2').css("animation-name", "rotation2");
        $('#white_2').css("animation-name", "rotation3");
        $('#gray_2').css("animation-name", "rotation3");
        $('#moving_4').css("animation-name", "moving_4");
        $('#deepgray2_1').css("animation-name", "rotation3");
        $('#moving_5').css("animation-name", "moving_5");
        $('#moving_6').css("animation-name", "moving_6");
        $('#deepgray2_2').css("animation-name", "rotation4");
    }
});

// $(window).scroll(function () {
//     var h = $(window).height() - 600;
//     if ($(this).scrollTop() > h) {

//     }
// });