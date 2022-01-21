import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const currentTime = 'videoplayer-current-time';

player.on('play', onPlay);
player.on('seeked', onTimeUpdate);
player.on('timeupdate', throttle(onTimeUpdate, 500));

function onPlay () {
    player.setCurrentTime(localStorage.getItem(currentTime));
};

function onTimeUpdate () {
    player.getCurrentTime().then(seconds => localStorage.setItem(currentTime, seconds));
};