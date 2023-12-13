const playBtn = document.getElementById("play-btn");
const bar = document.getElementById("progessBar");
var val;

var song = new Audio("./2.mp3");

playBtn.addEventListener("click",()=>{
    if(song.paused || song.currentTime<=0){
        song.play();
        playBtn.classList.remove("bx-play-circle");
        playBtn.classList.add("bx-pause-circle")
    }
    // else if(song.currentTime == song.duration){
    //     playBtn.classList.add("bx-play-circle");
    //     playBtn.classList.remove("bx-pause-circle");
    // }
    else{
        song.pause();
        playBtn.classList.add("bx-play-circle");
        playBtn.classList.remove("bx-pause-circle")
    }
})

song.addEventListener("timeupdate",()=>{

    if(song.currentTime == song.duration){
        playBtn.classList.add("bx-play-circle");
        playBtn.classList.remove("bx-pause-circle");
    }
    
    val = (song.currentTime/song.duration) * 100;
    bar.value= val;
})

bar.addEventListener("change",()=>{
    song.currentTime =bar.value * song.duration /100;
    console.log(song.currentTime);
})