
var par;
window.onload = function(){
    par = document.getElementById('question').textContent;
};

function check_input(val){
    var len = val.value.length;
    
    if (par.substring(0,[len]) == val.value.substring(0,[len]))
        val.style.backgroundColor = "green";
    else
        val.style.backgroundColor = "red";
}