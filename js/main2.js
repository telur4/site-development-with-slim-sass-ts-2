"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    // ========================================
    // スマホメニュー
    // ========================================
    // ハンバーガーメニューのクリックイベント
    // 解説は、「中級編：ストアサイト（インテリア）」参照
    document.getElementsByClassName('toggle_btn')[0].addEventListener('click', function () {
        var _a, _b, _c;
        if (!(((_a = document.getElementById('header')) === null || _a === void 0 ? void 0 : _a.className.split(' ')[0]) === 'open')) {
            (_b = document.getElementById('header')) === null || _b === void 0 ? void 0 : _b.classList.add('open');
        }
        else {
            (_c = document.getElementById('header')) === null || _c === void 0 ? void 0 : _c.classList.remove('open');
        }
    }, false);
    // #maskのエリアをクリックした時にメニューを閉じる
    (_a = document.getElementById('mask')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var _a;
        (_a = document.getElementById('header')) === null || _a === void 0 ? void 0 : _a.classList.remove('open');
    }, false);
    // リンクをクリックした時にメニューを閉じる
    console.log(document.querySelectorAll('#navi a'));
    Array.from(document.querySelectorAll('#navi a')).map(function (elem) {
        elem.addEventListener('click', function () {
            var _a;
            (_a = document.getElementById('header')) === null || _a === void 0 ? void 0 : _a.classList.remove('open');
        }, false);
    });
    // ========================================
    // スムーススクロール
    // ========================================
    // ページ内リンクのイベント
    console.log(document.querySelectorAll('a[href^="#"]'));
    Array.from(document.querySelectorAll('a[href^="#"]')).map(function (elem) {
        elem.addEventListener('click', function () {
            var _a;
            // リンクを取得
            var href = (_a = elem.getAttribute('href')) !== null && _a !== void 0 ? _a : '';
            // console.log(href);
            // ジャンプ先のid名をセット
            var target = document.getElementById(href.replace('#', ''));
            // トップからジャンプ先の要素までの距離を取得
            // console.log(target);
            var position = (target === null || target === void 0 ? void 0 : target.getBoundingClientRect().top) === undefined ? 0 : window.pageYOffset + target.getBoundingClientRect().top;
            // console.log(position);
            window.scroll({
                top: position,
                behavior: "smooth"
            });
            return false;
        }, false);
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
    window.addEventListener('scroll', function () {
        // fadeinクラスに対して順に処理を行う
        Array.from(document.getElementsByClassName('fadein')).map(function (elem) {
            // スクロールした距離
            var scroll = window.scrollY;
            console.log(scroll); // 0
            // fadeinクラスの要素までの距離
            var target = elem.getBoundingClientRect().top === undefined ? 0 : window.pageYOffset + elem.getBoundingClientRect().top;
            console.log(target); // 1200
            // 画面の高さ
            var windowHeight = document.documentElement.clientHeight;
            console.log(windowHeight); // 625
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                elem.style.opacity = '1';
                elem.style.transform = 'translateY(0)';
            }
        }, false);
    }, false);
}, false);
