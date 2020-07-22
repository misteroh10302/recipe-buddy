document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');
    const count = document.querySelectorAll('.count');
    const form = document.querySelector('form')
    let animateTimer;
    var audio = new Audio('audio.mp3');


    main.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.matches('button.m3.button-timer.mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.mdl-button--accent')) {
            const target = e.target;
            const parentDiv = e.target.parentElement.parentElement.parentElement;
            const counter = parentDiv.querySelector('.count');
            const time = parentDiv.querySelector('.current-time').innerHTML;

            setTimeout(() => {
                clearInterval(animateTimer);
                audio.play();
                target.remove();
                setTimeout(() => {
                    audio.pause();
                }, 5000)
            }, parseInt(time) * 1000)

            let i = 0;

            animateTimer = setInterval(() => {
                counter.style.width = `${i++}%`;
            }, 100);
        }

    }, false);


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let food = document.getElementById('sample3').value;
        let time = document.getElementById('sample4').value;
        const createDiv = document.createElement('div')
        // clear content
        document.getElementById('sample3').value = '';
        document.getElementById('sample4').value = '';


        const div = `
            <div class="demo-card-wide mdl-card mdl-shadow--2dp m3">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">Task: <span class="current-food">${food}</span</h2>
                </div>
                <div class="mdl-card__supporting-text">
                    <div>Time: <span class="current-time">${time}</span></div>
                </div>
                <div class="m3 timer mdl-card__supporting-text">
                    <div class="count"></div>
                </div>
                <div>
                <button class="m3 button-timer mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                start timer
              </button>
                
                </div>
            </div>
        `

        createDiv.innerHTML = div;
        main.append(createDiv)
    })

}, false);