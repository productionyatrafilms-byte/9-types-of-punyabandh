document.addEventListener('DOMContentLoaded', function () {
    var swiperWrapper = document.getElementById('swiperWrapper');
    var textPanel = document.getElementById('textPanel');

    earnSlidesData.forEach(function (slide, index) {
        var swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';
        swiperSlide.innerHTML =
            '<video class="slide-video" src="' + slide.video + '" preload="none" muted loop playsinline></video>';
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

    // summary popup (opened by Next on the last slide)
    var summaryModal = document.getElementById('summaryModal');
    var summaryText = document.getElementById('summaryText');
    summaryText.innerHTML =
        '<span class="english">' + earnSummary.content + '</span>' +
        '<span class="hindi">' + earnSummary.contenthi + '</span>' +
        '<span class="gujrati">' + earnSummary.contentgj + '</span>';

    function openSummary() {
        summaryModal.classList.add('is-open');
        summaryModal.setAttribute('aria-hidden', 'false');
    }

    function closeSummary() {
        summaryModal.classList.remove('is-open');
        summaryModal.setAttribute('aria-hidden', 'true');
    }

    document.getElementById('summaryClose').addEventListener('click', closeSummary);
    document.getElementById('summaryBackdrop').addEventListener('click', closeSummary);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeSummary(); }
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

    var earnSwiper = new Swiper('.earnSwiper', {
        slidesPerView: 1,
        speed: 400,
        effect: 'slide',
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
            init: function () {
                syncSlideVideos(this);
            },
            slideChange: function () {
                setActiveText(this.activeIndex);
                syncSlideVideos(this);
                closeSummary();
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

    // on the last slide Next stays enabled (see .earn-page .btn-next in define.css) and
    // opens the summary popup instead of sliding. Capture phase so isEnd is read BEFORE
    // Swiper's own click handler advances to the last slide on the click that gets us there.
    var btnNext = document.querySelector('.btn-next');
    btnNext.addEventListener('click', function () {
        if (earnSwiper.isEnd) { openSummary(); }
    }, true);
    // Next is a div (see earn.html), so give it the keyboard behaviour a button has
    btnNext.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btnNext.click();
        }
    });

    var sliderWrapper = document.querySelector('.slider-wrapper');
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            sliderWrapper.classList.add('is-entered');
        });
    });
});
