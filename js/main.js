"use strict";
/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function () {
    // ========================================
    // スマホメニュー
    // ========================================
    // ハンバーガーメニューのクリックイベント
    // 解説は、「中級編：ストアサイト（インテリア）」参照
    $('.toggle_btn').on('click', function () {
        if (!$('#header').hasClass('open')) {
            $('#header').addClass('open');
        }
        else {
            $('#header').removeClass('open');
        }
    });
    // #maskのエリアをクリックした時にメニューを閉じる
    $('#mask').on('click', function () {
        $('#header').removeClass('open');
    });
    // リンクをクリックした時にメニューを閉じる
    $('#navi a').on('click', function () {
        $('#header').removeClass('open');
    });
    // ========================================
    // スムーススクロール
    // ========================================
    // ページ内リンクのイベント
    $('a[href^="#"]').click(function () {
        // リンクを取得
        var href = $(this).attr("href");
        // ジャンプ先のid名をセット
        var target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        var position = target.offset().top;
        // animateでスムーススクロールを行う
        // 600はスクロール速度で単位はミリ秒
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });
    // ========================================
    // PICK UP スライダー
    // ========================================
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/
    $('.slick-area').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        // レスポンシブ対応
        responsive: [
            {
                // 768pxで表示切替
                breakpoint: 768,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });
    // ========================================
    // スクロール時の画像フェード表示
    // ========================================
    // スクロール時のイベント
    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $('.fadein').each(function () {
            // スクロールした距離
            var scroll = $(window).scrollTop();
            console.log(scroll); // 0
            // fadeinクラスの要素までの距離
            var target = $(this).offset().top;
            console.log(target); // 1200
            // 画面の高さ
            var windowHeight = $(window).height();
            console.log(windowHeight); // 625
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
});
