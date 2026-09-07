document.addEventListener('DOMContentLoaded', function () {
    var swiperWrapper = document.getElementById('swiperWrapper');
    var textPanel = document.getElementById('textPanel');

    earnSlidesData.forEach(function (slide, index) {
        var swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';
        swiperSlide.innerHTML =
            '<div class="photo-frame">' +
                '<video class="slide-video" src="' + slide.video + '" autoplay muted loop playsinline></video>' +
            '</div>';
        swiperWrapper.appendChild(swiperSlide);

        var textBox = document.createElement('div');
        textBox.className = 'text-box' + (slide.wide ? ' text-box--wide' : '') + (index === 0 ? ' is-active' : '');
        textBox.setAttribute('data-slide', index);

        var labelHtml = slide.title
            ? '<p class="text-box__label">' +
                  '<span class="english">' + slide.title + '</span>' +
                  '<span class="hindi">' + slide.titlehi + '</span>' +
                  '<span class="gujrati">' + slide.titlegj + '</span>' +
              '</p>'
            : '';

        textBox.innerHTML =
            labelHtml +
            '<p class="text-box__body">' +
                '<span class="english">' + slide.content + '</span>' +
                '<span class="hindi">' + slide.contenthi + '</span>' +
                '<span class="gujrati">' + slide.contentgj + '</span>' +
            '</p>';

        textPanel.appendChild(textBox);
    });

    // custom.js applies the saved language before this script builds its own
    // content, so the freshly-created spans above always default to English
    // unless we re-apply the current language ourselves right after.
    if (typeof val === 'function') {
        val(sessionStorage.getItem('lang') || 'English');
    }

    var textBoxes = document.querySelectorAll('.text-box');

    function setActiveText(index) {
        textBoxes.forEach(function (box) {
            box.classList.toggle('is-active', Number(box.getAttribute('data-slide')) === index);
        });
    }

    new Swiper('.earnSwiper', {
        slidesPerView: 1,
        speed: 400,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        touchRatio: 1,
        resistance: true,
        resistanceRatio: 0.85,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        on: {
            slideChange: function () {
                setActiveText(this.activeIndex);
            },
        },
    });

    var swiperAudio = new Audio('./assets/audio/swiper.mp3');
    document.querySelectorAll('.btn-next, .btn-prev').forEach(function (btn) {
        btn.addEventListener('click', function () {
            swiperAudio.currentTime = 0;
            swiperAudio.play().catch(function () {});
        });
    });

    var sliderWrapper = document.querySelector('.slider-wrapper');
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            sliderWrapper.classList.add('is-entered');
        });
    });
});
