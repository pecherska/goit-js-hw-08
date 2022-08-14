import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);


const currentTime = function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(currentTime, 1000));


const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (time) {
    player.setCurrentTime(time);
}



