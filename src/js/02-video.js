import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(function() {
    localStorage.setItem("videoplayer-current-time", currentTime += 1)
}, 1000));

let currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));