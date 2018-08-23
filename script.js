
var par;
var active = 0;
var speed = 0;
var accuracy = 100;
window.onload = function(){
    par = document.getElementById('question').textContent;
    
};
var isGreen = 0;
function check_input(val){
    
    var len = val.value.length;
    if (active == 0){
        setInterval(count, 1000);
        active++;
    }
    if (par.substring(0,[len]) === val.value.substring(0,[len])){
        val.style.backgroundColor = "green";
        isGreen = 1;
    }
    else{
        val.style.backgroundColor = "red";
        
        if (isGreen == 1) {
        accuracy -= .5;
        document.getElementById('accuracy').innerHTML = "Accuracy: " + accuracy + "%";}
        isGreen = 0;
    }
}
var cnt = 0;
function count(){
    document.getElementById('speed').innerHTML = " speed: " + cnt + " sec";
    cnt++;
}



