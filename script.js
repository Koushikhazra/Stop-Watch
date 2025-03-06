let timerdisplay=document.querySelector('.time-displey');
let stopbtn=document.getElementById('stop');
let startbtn=document.getElementById('Start');
let resetbtn=document.getElementById('Reset');
let fullscreenbtn = document.getElementById('fullscreen');

let msec= 0;
let secs= 0;
let mins=0;

let timerid=null;

function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }

    let msecString=msec<10 ? `0${msec}` : msec;
    let secsString=secs<10 ? `0${secs}` : secs;
    let minString=mins<10 ? `0${mins}` : mins;

   
    timerdisplay.innerHTML=`${minString} : ${secsString} : ${msecString}`
    
}

startbtn.addEventListener("click",()=>{
    if(timerid!==null){
        clearInterval(timerid);
    }
  timerid=setInterval(startTimer,10);
})

stopbtn.addEventListener("click",()=>{
    clearInterval(timerid);
})

resetbtn.addEventListener("click",()=>{
 
        clearInterval(timerid);
        timerdisplay.innerHTML=`00 : 00 : 00`
   msec=0;
   secs=0;
   mins=0;

})
fullscreenbtn.addEventListener("click", () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
});
