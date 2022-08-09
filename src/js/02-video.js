import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
player.setCurrentTime(0);

const currentTime = function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}

const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (time) {
    player.setCurrentTime(time);
}
player.on('timeupdate', throttle(currentTime, 1000));


