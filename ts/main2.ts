document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // スマホメニュー
    // ========================================
    // ハンバーガーメニューのクリックイベント
    // 解説は、「中級編：ストアサイト（インテリア）」参照
    document.getElementsByClassName('toggle_btn')[0].addEventListener('click', () => {
        if(!(document.getElementById('header')?.className.split(' ')[0] === 'open')) {
            document.getElementById('header')?.classList.add('open');
        } else {
            document.getElementById('header')?.classList.remove('open');
        }
    }, false);

    // #maskのエリアをクリックした時にメニューを閉じる
    document.getElementById('mask')?.addEventListener('click', () => {
        document.getElementById('header')?.classList.remove('open');
    }, false);

    // リンクをクリックした時にメニューを閉じる
    console.log(document.querySelectorAll('#navi a'));
    Array.from(document.querySelectorAll('#navi a')).map((elem) => {
        elem.addEventListener('click', () => {
            document.getElementById('header')?.classList.remove('open');
        }, false);
    });

    // ========================================
    // スムーススクロール
    // ========================================
    // ページ内リンクのイベント
    console.log(document.querySelectorAll('a[href^="#"]'));
    Array.from(document.querySelectorAll('a[href^="#"]') as NodeListOf<HTMLElement>).map((elem) => {
        elem.addEventListener('click', () => {
            // リンクを取得
            const href: string = elem.getAttribute('href') ?? '';
            // console.log(href);
            // ジャンプ先のid名をセット
            const target: HTMLElement | null = document.getElementById(href.replace('#', ''));
            // トップからジャンプ先の要素までの距離を取得
            // console.log(target);
            const position: number = target?.getBoundingClientRect().top === undefined ? 0 : window.pageYOffset + target.getBoundingClientRect().top;
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
    window.addEventListener('scroll', () => {
        // fadeinクラスに対して順に処理を行う
        Array.from(document.getElementsByClassName('fadein') as HTMLCollectionOf<HTMLElement>).map((elem) => {
            // スクロールした距離
            const scroll: number = window.scrollY;
            console.log(scroll);    // 0
            // fadeinクラスの要素までの距離
            const target: number = elem.getBoundingClientRect().top === undefined ? 0 : window.pageYOffset + elem.getBoundingClientRect().top;
            console.log(target);    // 1200
            // 画面の高さ
            const windowHeight: number = document.documentElement.clientHeight;
            console.log(windowHeight);  // 625
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                elem.style.opacity = '1';
                elem.style.transform = 'translateY(0)';
            }
        }, false);
    }, false);
}, false);