console.log("Welcome to Spotify");

let songIndex=0;
// let audio= new Audio('./Assets/ambient-classical-guitar-144998.mp3');

let playBtn= document.getElementById('play-btn');
let progressBar= document.getElementById('progressBar');
let pauseBtn= document.getElementById('pause-btn');
let currTime= document.getElementById('curr-time');
let totTime= document.getElementById('tot-time');

let songs=[
    {songName: "Ambient Guitar", path: "./Assets/ambient-classical-guitar-144998.mp3", coverPath: "./Assets/card1img.jpeg", ind:0},
    {songName: "Call to the Soul", path: "./Assets/a-call-to-the-soul-149262.mp3", coverPath: "./Assets/card2img.jpeg", ind:1},
    {songName: "Leva Eternity", path: "./Assets/leva-eternity-149473.mp3", coverPath: "./Assets/card3img.jpeg", ind:2},
    {songName: "Smoke", path: "./Assets/smoke-143172.mp3", coverPath: "./Assets/card4img.jpeg", ind:3},
    {songName: "Waterfall", path: "./Assets/waterfall-140894.mp3", coverPath: "./Assets/card5img.jpeg", ind:4},
];
let audio= new Audio(songs[songIndex].path);


// audio.play();

playBtn.addEventListener('click', ()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        playBtn.classList.add('hidden');
        pauseBtn.classList.remove('hidden');
    }
});

pauseBtn.addEventListener('click', ()=>{
    if(audio.play || audio.currentTime>=0){
        audio.pause();
        pauseBtn.classList.add('hidden');
        playBtn.classList.remove('hidden');
        // totTime.appendChild();
    }
});

audio.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    progress= ((audio.currentTime/ audio.duration)*100);
    progressBar.value= progress*10000;
});

progressBar.addEventListener('change', () =>{
    audio.currentTime= (progressBar.value *audio.duration/1000000);
});

document.getElementById('prev').addEventListener('click', () =>{
    songIndex-=1;
    if(songIndex<0){
        songIndex=songs.length-1;
    }
    console.log(songIndex);
    audio.pause;
    audio= new Audio(songs[songIndex].path);
    newPlay();
});

document.getElementById('next').addEventListener('click', () =>{
    songIndex+=1;
    songIndex%=5;
    // console.log(songIndex);
    audio.pause();
    audio= new Audio(songs[songIndex].path);
    newPlay();
})

function newPlay(){
    
    audio.play();
    progressBar.value=0;

    audio.addEventListener('timeupdate', () =>{
        console.log('timeupdate');
        progress= ((audio.currentTime/ audio.duration)*100);
        progressBar.value= progress*10000;
    });
}