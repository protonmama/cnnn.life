$(document).ready(function () {
    $(function () {
        const md = new MobileDetect(window.navigator.userAgent);
        let time = popupTimer.content.querySelector('span').innerText * 1000;
        let behaviour = popupBehaviour.content.querySelector('span').innerText;
        const deposit = $('#popup-deposit');

        if (md.phone() || md.tablet()) {
            if (time === 150000) {
                time = 90000;
            }

            deposit.hide();

            window.allowpop = true;

            let showWindow = function () {
                setTimeout(function () {
                    window.allowpop = false;
                    deposit.fadeIn(400);
                    setTimeout(function () {
                        window.allowpop = true;
                        showWindow();
                    }, time);
                }, time);
            };

            showWindow();

            $('.js-close-popup').on('click', function (e) {
                e.preventDefault();
                deposit.fadeOut(200);
                return false;
            });
        } else {
            deposit.hide();

            window.allowpop = true;

            document.addEventListener('mouseout', function (e) {
                if (e.clientY < 0 && behaviour != '2') {
                    showPopup();
                }
            });

            $('.js-close-popup').on('click', function (e) {
                e.preventDefault();
                deposit.fadeOut(200);
                return false;
            });
        }

        const pageName = window.location.pathname;
        if (pageName === '/lp45') {
            $('.popup__btn').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                deposit.fadeOut(100);
                $('html, body').animate(
                    {
                        scrollTop: window.$('#registration').offset().top,
                    },
                    750
                );
            });
        }

        window.addEventListener('scroll', function () {
            let clientHeight = document.documentElement.clientHeight;
            let documentHeight = document.documentElement.scrollHeight;
            let scrollTop = window.pageYOffset;

            if (documentHeight - clientHeight <= scrollTop) {
                if (behaviour === '2') {
                    //если доскролена, показываем попап при соотв.параметре
                    showPopup();
                }
            }
        });

        function showPopup() {
            if (window.allowpop) {
                window.allowpop = false;
                deposit.fadeIn(400);
                setTimeout(function () {
                    window.allowpop = true;
                }, time);
            }
        }
    });
});
