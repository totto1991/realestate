// ナビゲーションをクリックしたら各セクションにスムーススクロールさせる
$('a[href^="#"]').click(function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    position = position - 50;
    $("html, body").animate({scrollTop:position}, 1000, "swing");
    return false;
});

// ナビゲーションの各メニューはホバー時に下線を表示させる
$(function() {
    $('a.nav-btn').hover (
        function() {
            $(this).css('text-decoration', 'underline');
        },
        function() {
            $(this).css('text-decoration', 'none');
        }
    );
});

// ヘッダーはABOUTエリアまでスクロールしたら背景色をつける（背景色は透過させない）
$(function() {
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