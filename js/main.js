// ナビゲーションをクリックしたら各セクションにスムーススクロールさせる
$('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    position = position - 80;
    $("html, body").animate({scrollTop:position}, 1000, "swing");
    return false;
});

// ヘッダーのナビゲーションの各メニューはホバー時に下線を表示させる
$(function() {
    $('a.header-nav-btn').hover (
        function() {
            $(this).css('text-decoration', 'underline');
        },
        function() {
            $(this).css('text-decoration', 'none');
        }
    );
});

// ヘッダーはABOUTエリアまでスクロールしたら背景色をつける（背景色は透過させない）
$(window).on('load', function() {
    const aboutTop = $('#about').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= aboutTop) {
            $('.header-inner').addClass('scrolled');
        } else {
            $('.header-inner').removeClass('scrolled');
        }
    });
});

// ハンバーガーメニュー
$("#hamburger-block").click(
    function() {
        $(".hamburger-menu").toggle(300)
        $(".hamburger").toggleClass("active")
    }
);

// ハンバーガーメニューが開いたときの各メニューはホバー時にフォントを白・背景を黒にする
$(function() {
    $('.hamburger-li-item').hover(
        function() {
            $(this).css({
                'color': '#FFF',
                'background-color': '#000'
            });
        },
        function() {
            $(this).css({
                'color': '',
                'background-color': ''
            });
        }
    );
});
// // リサイズ時に PC幅(768px以上)になったら .hamburger-menu を強制的に非表示 にする。
$(window).on('resize', function() {
    if ($(window).width() >= 768) {
        $(".hamburger-menu").hide();
        $(".hamburger").removeClass("active");
        }
});

// FV（ファーストビュー）の画像3枚を自動スライドさせる
$(function() {
    $("#slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    });
});

// WORKSの画像またはテキストをタップしたらモーダルで拡大画像を表示させる
$(".modal-open-01").click(
    function() {
        $(".modal-area-01").show()
    }
);
$(".modal-open-02").click(
    function() {
        $(".modal-area-02").show()
    }
);
$(".modal-open-03").click(
    function() {
        $(".modal-area-03").show()
    }
);
$(".modal-open-04").click(
    function() {
        $(".modal-area-04").show()
    }
);
// モーダル表示後の薄暗い背景をタップしても画像が非表示になる
$(".modal-close").click(
    function() {
        $(".modal-area-01").hide()
    }
);
$(".modal-close").click(
    function() {
        $(".modal-area-02").hide()
    }
);
$(".modal-close").click(
    function() {
        $(".modal-area-03").hide()
    }
);
$(".modal-close").click(
    function() {
        $(".modal-area-04").hide()
    }
);

// フッターのナビゲーションの各メニューはホバー時にフォントカラーを薄くする
$(function() {
    $('a.footer-nav-btn').hover (
        function() {
            $(this).css('color', '#666');
        },
        function() {
            $(this).css('color', '#000');
        }
    );
});

// トップへ戻るボタン
$(window).on('load', function() {
    var goTop = $("#back-to-top-btn");
    goTop.hide();

    var aboutTop = $("#about").offset().top;
    
    $(window).scroll(function() {
        if ($(this).scrollTop() >= aboutTop) {
            goTop.fadeIn(300);
        } else {
            goTop.fadeOut(300);
        }
    });
    
    goTop.click(function() {
        $("body, html").animate({scrollTop: 0}, 1000);
        return false;
    });
});

