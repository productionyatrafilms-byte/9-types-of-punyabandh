document.addEventListener('DOMContentLoaded', function () {
    var btnEnter = document.getElementById('btnEnter');
    var btnBack = document.getElementById('btnBack');
    var mainContainer = document.getElementById('mainContainer');
    var popAudio = new Audio('./assets/audio/pop.mp3');
    var enterAudio = new Audio('./assets/audio/transition/5.mp3');
    var topicAudio = new Audio('./assets/audio/topic.mp3');

    btnEnter.addEventListener('click', function () {
        enterAudio.currentTime = 0;
        enterAudio.play().catch(function () {});
        mainContainer.classList.add('settled');
    });

    btnBack.addEventListener('click', function (e) {
        e.preventDefault();
        popAudio.currentTime = 0;
        popAudio.play().catch(function () {});
        mainContainer.classList.remove('settled');
    });

    var pills = document.querySelectorAll('.pill');
    pills.forEach(function (pill) {
        pill.addEventListener('click', function (e) {
            var href = pill.getAttribute('href');
            if (!href || href === '#') {
                return;
            }
            e.preventDefault();

            var navigated = false;
            var go = function () {
                if (navigated) { return; }
                navigated = true;
                window.location.href = href;
            };

            topicAudio.currentTime = 0;
            topicAudio.addEventListener('ended', go, { once: true });

            var playPromise = topicAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(go);
            }

            setTimeout(go, 600);
        });
    });
});
