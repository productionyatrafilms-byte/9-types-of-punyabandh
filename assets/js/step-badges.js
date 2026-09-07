document.addEventListener('DOMContentLoaded', function () {
    var badges = document.querySelectorAll('.step-badge');
    var topicAudio = new Audio('./assets/audio/topic.mp3');

    badges.forEach(function (badge) {
        badge.addEventListener('click', function (e) {
            if (badge.classList.contains('is-expanded')) {
                // already expanded — play the click sound, then navigate
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
                return;
            }
            e.preventDefault();
            badges.forEach(function (other) {
                other.classList.remove('is-expanded');
            });
            badge.classList.add('is-expanded');
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.step-badge')) {
            badges.forEach(function (badge) {
                badge.classList.remove('is-expanded');
            });
        }
    });
});
