
var  audioeo = document.getElementById("audio");
function play(){
    if(document.getElementById("audio").muted===true){
        document.getElementById('audio').play()
        document.getElementById('bnt').style='background-image: url("unpute.png");'
        document.getElementById("audio").muted=false
    }
    else{
        document.getElementById('bnt').style='background-image: url("mute.png");'
        document.getElementById("audio").muted=true
    }
    
}
function play2(){

    document.getElementById('audio').play()
    document.getElementById('bnt').style='background-image: url("unpute.png");'
    document.getElementById("audio").muted=false
    
    
}
window.onload=document.getElementById('audio').play();
