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
            topicAudio.currentTime = 0;
            topicAudio.play().catch(function () {});
            mainContainer.classList.add('leaving');
            setTimeout(function () {
                window.location.href = href;
            }, 1800);
        });
    });
});
