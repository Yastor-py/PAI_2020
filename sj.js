
var  video = document.getElementById("vid");
function play(){
    if(document.getElementById("vid").muted===true){
        document.getElementById('bnt').style='background-image: url("unpute.png");'
        document.getElementById("vid").muted=false
    }
    else{
        document.getElementById('bnt').style='background-image: url("mute.png");'
        document.getElementById("vid").muted=true
    }
    
}
function play2(){

    
    document.getElementById('bnt').style='background-image: url("unpute.png");'
    document.getElementById("vid").muted=false
    
    
}
