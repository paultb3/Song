const btnXokas = document.querySelector('#btn-xokas');
const btnAuron = document.querySelector('#btn-auron');
const btnAstro = document.querySelector('#btn-astro');

const video = document.createElement('video');

const result = document.querySelector('#result');


function mostrarVideo(ruta){
        video.id ='videoElement'
        video.src = ruta
        video.controls = true;
        video.width = 330;
        video.classList = 'video';
        video.autoplay = true;
        result.appendChild(video)
}

btnXokas.addEventListener('click', function(){
    mostrarVideo('./assets/videos/xokas.mp4')
});

btnAuron.addEventListener('click', function(){
    mostrarVideo('./assets/videos/auron.mp4')
});

btnAstro.addEventListener('click', function(){
    mostrarVideo('./assets/videos/astro.mp4')
});