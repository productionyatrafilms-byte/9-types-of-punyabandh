document.addEventListener('DOMContentLoaded', function () {
    var mainContainer = document.getElementById('mainContainer');
    var subpointMenu = document.getElementById('subpointMenu');
    var sidebarTrack = document.getElementById('sidebarTrack');
    var sidebarUp = document.getElementById('sidebarUp');
    var sidebarDown = document.getElementById('sidebarDown');
    var detailRibbon = document.getElementById('detailRibbon');
    var typesSwiperWrapper = document.getElementById('typesSwiperWrapper');
    var typesTextPanel = document.getElementById('typesTextPanel');
    var btnBackToMenu = document.getElementById('btnBackToMenu');
    var sliderWrapper = document.querySelector('.detail-section .slider-wrapper');
    var pranamLink = document.getElementById('pranamLink');

    var typesSwiper = null;

    var topicAudio = document.createElement('audio');
    topicAudio.src = './assets/audio/topic.mp3';
    var popAudio = document.createElement('audio');
    popAudio.src = './assets/audio/pop.mp3';
    var swiperAudio = document.createElement('audio');
    swiperAudio.src = './assets/audio/swiper.mp3';

    function playSound(audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.play().catch(function () {});
    }

    function langSpans(base, hi, gj) {
        return (
            '<span class="english">' + base + '</span>' +
            '<span class="hindi">' + hi + '</span>' +
            '<span class="gujrati">' + gj + '</span>'
        );
    }

    // custom.js applies the saved language before this script builds any of
    // its own content, so freshly-created elements always default to English
    // unless we re-apply the current language ourselves right after.
    function syncLang() {
        if (typeof val === 'function') {
            val(sessionStorage.getItem('lang') || 'English');
        }
    }

    // ---------- build the 9 radial menu pills ----------
    subpointsData.forEach(function (sp) {
        var pill = document.createElement('a');
        pill.href = '#';
        pill.className = 'subpoint-pill';
        pill.setAttribute('data-id', sp.id);
        pill.innerHTML = '<span class="subpoint-pill__text">' + langSpans(sp.title, sp.titlehi, sp.titlegj) + '</span>';
        pill.addEventListener('click', function (e) {
            e.preventDefault();
            playSound(topicAudio);
            leaveMenuThenOpen(sp.id);
        });
        subpointMenu.appendChild(pill);
    });

    // ---------- build the sidebar list ----------
    subpointsData.forEach(function (sp) {
        var item = document.createElement('a');
        item.href = '#';
        item.className = 'sidebar-item' + (sp.slides.length === 0 ? ' is-empty' : '');
        item.setAttribute('data-id', sp.id);
        item.innerHTML = '<span class="sidebar-item__text">' + langSpans(sp.title, sp.titlehi, sp.titlegj) + '</span>';
        item.addEventListener('click', function (e) {
            e.preventDefault();
            if (sp.slides.length === 0) {
                return;
            }
            playSound(topicAudio);
            openDetail(sp.id, 0);
        });
        sidebarTrack.appendChild(item);
    });

    syncLang();

    // ---------- sidebar: show 3 at a time, scroll with up/down.png ----------
    var sidebarScrollIndex = 0;
    var sidebarMaxIndex = subpointsData.length - 3;

    function updateSidebarScroll() {
        var items = sidebarTrack.querySelectorAll('.sidebar-item');
        var step = items.length > 1 ? (items[1].offsetTop - items[0].offsetTop) : 0;
        sidebarTrack.style.transform = 'translateY(-' + (sidebarScrollIndex * step) + 'px)';
        sidebarUp.disabled = sidebarScrollIndex <= 0;
        sidebarDown.disabled = sidebarScrollIndex >= sidebarMaxIndex;
    }

    sidebarUp.addEventListener('click', function () {
        sidebarScrollIndex = Math.max(0, sidebarScrollIndex - 1);
        updateSidebarScroll();
    });

    sidebarDown.addEventListener('click', function () {
        sidebarScrollIndex = Math.min(sidebarMaxIndex, sidebarScrollIndex + 1);
        updateSidebarScroll();
    });

    updateSidebarScroll();

    function scrollSidebarTo(id) {
        var index = subpointsData.map(function (sp) { return sp.id; }).indexOf(id);
        if (index === -1) { return; }
        sidebarScrollIndex = Math.min(sidebarMaxIndex, Math.max(0, index - 1));
        updateSidebarScroll();
    }

    function getSubpoint(id) {
        return subpointsData.filter(function (sp) { return sp.id === id; })[0];
    }

    // ---------- menu exit animation (1-4 left, 6-9 right, 5 down), then open detail ----------
    function leaveMenuThenOpen(id) {
        mainContainer.classList.add('menu-leaving');
        setTimeout(function () {
            mainContainer.classList.remove('menu-leaving');
            openDetail(id, 0);
        }, 1800);
    }

    function openDetail(id, startIndex) {
        var sp = getSubpoint(id);
        if (!sp) { return; }

        mainContainer.classList.add('state-detail');
        sliderWrapper.classList.remove('is-entered');

        // highlight active sidebar item and scroll it into the 3-item viewport
        sidebarTrack.querySelectorAll('.sidebar-item').forEach(function (item) {
            item.classList.toggle('is-active', Number(item.getAttribute('data-id')) === id);
        });
        scrollSidebarTo(id);

        detailRibbon.innerHTML = langSpans(sp.title, sp.titlehi, sp.titlegj);

        // destroy previous swiper instance
        if (typesSwiper) {
            typesSwiper.destroy(true, true);
            typesSwiper = null;
        }
        typesSwiperWrapper.innerHTML = '';
        typesTextPanel.innerHTML = '';

        if (sp.slides.length === 0) {
            typesSwiperWrapper.innerHTML =
                '<div class="swiper-slide"><div class="empty-state">' +
                    langSpans('Coming soon.', 'Coming soon.', 'Coming soon.') +
                '</div></div>';
            if (pranamLink) { pranamLink.classList.remove('is-visible'); }
            revealSlider();
            return;
        }

        sp.slides.forEach(function (slide, index) {
            var swiperSlide = document.createElement('div');
            swiperSlide.className = 'swiper-slide';
            swiperSlide.innerHTML =
                '<video class="slide-video" src="' + slide.video + '" autoplay muted loop playsinline></video>';
            typesSwiperWrapper.appendChild(swiperSlide);

            var textBox = document.createElement('div');
            textBox.className = 'text-box' + (index === startIndex ? ' is-active' : '');
            textBox.setAttribute('data-slide', index);
            textBox.innerHTML = '<p class="text-box__body">' + langSpans(slide.content, slide.contenthi, slide.contentgj) + '</p>';
            typesTextPanel.appendChild(textBox);
        });

        var textBoxes = typesTextPanel.querySelectorAll('.text-box');
        function setActiveText(index) {
            textBoxes.forEach(function (box) {
                box.classList.toggle('is-active', Number(box.getAttribute('data-slide')) === index);
            });
        }

        // Pranam link only replaces the next button on the very last slide
        // of the last subpoint (9. Namaskaar Punya).
        function updatePranamLink(swiperInstance) {
            if (!pranamLink) { return; }
            var showPranam = sp.id === 9 && swiperInstance.isEnd;
            pranamLink.classList.toggle('is-visible', showPranam);
        }

        typesSwiper = new Swiper('.typesSwiper', {
            slidesPerView: 1,
            speed: 400,
            effect: 'slide',
            initialSlide: startIndex,
            keyboard: { enabled: true, onlyInViewport: true },
            touchRatio: 1,
            resistance: true,
            resistanceRatio: 0.85,
            navigation: {
                nextEl: '.detail-section .btn-next',
                prevEl: '.detail-section .btn-prev',
            },
            on: {
                init: function () {
                    updatePranamLink(this);
                },
                slideChange: function () {
                    setActiveText(this.activeIndex);
                    updatePranamLink(this);
                },
            },
        });

        revealSlider();
    }

    function revealSlider() {
        syncLang();
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                sliderWrapper.classList.add('is-entered');
            });
        });
    }

    btnBackToMenu.addEventListener('click', function (e) {
        e.preventDefault();
        playSound(popAudio);
        mainContainer.classList.remove('state-detail');
        sliderWrapper.classList.remove('is-entered');
    });

    document.querySelectorAll('.detail-section .btn-next, .detail-section .btn-prev').forEach(function (btn) {
        btn.addEventListener('click', function () {
            playSound(swiperAudio);
        });
    });

    // ---------- intro -> menu reveal animation on load ----------
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            mainContainer.classList.add('menu-revealed');
        });
    });

    // ---------- deep-link: ?subpoint=9 jumps straight to that subpoint's last slide ----------
    // (used by the pranam page's back button, which returns to Namaskaar Punya)
    var deepLinkId = Number(new URLSearchParams(window.location.search).get('subpoint'));
    if (deepLinkId) {
        var deepLinkSp = getSubpoint(deepLinkId);
        if (deepLinkSp && deepLinkSp.slides.length > 0) {
            openDetail(deepLinkId, deepLinkSp.slides.length - 1);
        }
    }
});
