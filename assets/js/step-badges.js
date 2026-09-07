document.addEventListener('DOMContentLoaded', function () {
    var badges = document.querySelectorAll('.step-badge');
    var topicAudio = new Audio('./assets/audio/topic.mp3');

    badges.forEach(function (badge) {
        badge.addEventListener('mouseenter', function () {
            badge.classList.add('is-expanded');
        });

        badge.addEventListener('mouseleave', function () {
            badge.classList.remove('is-expanded');
        });

        badge.addEventListener('click', function (e) {
            var href = badge.getAttribute('href');
            if (!href || href === '#') { return; }
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
