var par;
var active = 0;
var speed = 0;
var accuracy = 100;
var parWordCount = 0;

window.onload = function () {
    par = document.getElementById('question').textContent;
    parWordCount = countWords(par);
};
var isGreen = 0;

function check_input(val) {
    var len = val.value.length;
    if (active == 0) {
        active++;
        active = setInterval(count, 1000);
    }
    
    
    if (par.substring(0, [len]) === val.value.substring(0, [len])) {
        val.style.backgroundColor = "rgba(39, 238, 39, 0.562)";
        isGreen = 1;
    }
    else {
        val.style.backgroundColor = "rgba(230, 33, 7, 0.562)";

        if (isGreen == 1) {
            accuracy -= .5;
            document.getElementById('accuracy').innerHTML = "Accuracy: " + accuracy + "%";
        }
        isGreen = 0;
    }
    // check if user is done typing
    if (par == val.value){
        console.log('typing done');
        val.style.backgroundColor = "dodgerblue";
        clearInterval(active);

        // show results
        showResults();
    }
}

function showResults() {
    document.getElementById('results').style.display = "block";
    document.getElementById('resSpeed').innerHTML = "Your speed: " + ((parWordCount/cnt) * 100).toFixed(0) + " words per minute";
    document.getElementById('resAccuracy').innerHTML = "Accuracy: " + accuracy + "%";
}

var wordCount = 0;
function countWords(word) {
    var words = word.split(" ");
    var arr_count = words.length;
    return arr_count;
}

var cnt = 0;
function count() {
    document.getElementById('speed').innerHTML = " speed: " + cnt + " sec" + " words: " + parWordCount;
    cnt++;
}

function closeResults(){
    document.getElementById('results').style.display = "none";
}