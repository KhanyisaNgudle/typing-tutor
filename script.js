var par;
var active = 0;
var speed = 0;
var accuracy = 100;
var parWordCount = 0;

window.onload = function () {
    //par = document.getElementById('question').textContent;
    chooseText();
    parWordCount = countWords(par);
};
var isGreen = 0;

function check_input(val) {
    var len = val.value.length;
    if (active == 0) {
        active++;
        active = setInterval(count, 1000);
    }
    
    // if input is a space
    if (par.substring(0, [len]) === val.value.substring(0, [len])) {
        val.style.backgroundColor = "rgba(39, 238, 39, 0.562)";
        isGreen = 1;
        if (val.value[len - 1] === " " || len == 0)
            highlight(len);
        document.getElementsByTagName('mark')[0].style.backgroundColor = "rgba(39, 238, 39, 0.562)";
    }
    else {
        val.style.backgroundColor = "rgba(230, 33, 7, 0.562)";

        if (isGreen == 1) {
            accuracy -= .5;
            //document.getElementById('accuracy').innerHTML = "Accuracy: " + accuracy + "%";
        }
        isGreen = 0;
        document.getElementsByTagName('mark')[0].style.backgroundColor = "red";
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
    speed = ((parWordCount/cnt) * 100).toFixed(0);
    document.getElementById('results').style.display = "block";
    document.getElementById('background').style.display = "block";
    var response
    if (speed < 40) {
        response = "Hmmmm not bad..";
    }
    if (speed >= 40 && speed < 50) {
        response = "Whooo that was quick";
    }
    if (speed >= 50) {
        response = "Jeeez!"
    }
    document.getElementById('userResults').innerHTML = "Results: " + response;
    document.getElementById('resSpeed').innerHTML = "Your speed: " + speed + " words per minute";
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
    cnt++;
    //document.getElementById('speed').innerHTML = "Speed: " + ((document.getElementById('user-input').value.length/cnt) * 100).toFixed(0) + " wpm";
    
}

function closeResults(){
    document.getElementById('results').style.display = "none";
    document.getElementById('background').style.display = "none";

}

// highlight

function highlight(i) {
    var text = document.getElementById('question');
    var newPar = par.substring(i, par.length);
    var ind = newPar.split(' ');
    console.log(ind[0]);
    newPar = newPar.substring(ind[0].length, par.length);

    text.innerHTML = par.substring(0, i) + "<mark>" + ind[0] + "</mark>" + newPar;
}

// save results

function saveResults(){
    var username = document.getElementById('username').value;
    var province = document.getElementById('province').value;

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    httpRequest.open("GET", "save.php?username="+username+"&province="+province+"&speed="+speed+"&accuracy="+accuracy, true);
    httpRequest.send();
    console.log("Request sent!");
    // TODO: show score board
    closeResults();
}

// show scoreboard

function showScoreboard() {
    document.getElementById('test').style.display = "none";
    document.getElementById('scoreboard').style.display = "block";
}

function showTest() {
    document.getElementById('scoreboard').style.display = "none";
    // chooseText();
    document.getElementById('test').style.display = "block";
}

// choose text

function chooseText() {
    // randomly select a par
    var rnd = Math.floor((Math.random() * 9) + 1);
    if (rnd == 1) {
        par = "On my appointment as managing director of Nasionale Pers in 1984, I inherited the company's commitment to support the National Party. My first Christmas and New Year's message to employees in 1984 still attested to the spirit of a company that was dedicated to a cause: 'Naspers people are always asked: why is your company what it is? The answer is simple: we believe in our people and our people believe in us. The 'cause' still matters and carries the most weight, regardless of how diverse we are.'";
        document.getElementById('question').innerHTML = par;
    }
    if (rnd == 2) {
        par = "'We then stopped the vehicle, M'Lord,' Constable Raul Barnardo said, 'as we heard screaming coming from the bushes outside.' He and his colleague Captain Lorraine Kock left their police car and walked in the direction of the man's screams. They found an 'unknown albino male' who was 'completely naked and severely burnt'. Barnardo also noted bruises on his body, and dark burn marks around his groin and on his feet. 'What's your name?' he asked.";
        document.getElementById('question').innerHTML = par;
    }
    if (rnd == 3) {
        par = "Extract: King Zwelithini receives millions but is it money well spent? In The Eight Zulu Kings, historian John Laband examines the reigns of the eight Zulu kings from 1816 to the present. In this extract, the focus is on King Goodwill Zwelithini and the Ingonyama Trust as Laband looks at the Zulu monarch's control over the land.";
        document.getElementById('question').innerHTML = par;
    }
    if (rnd == 4) {
        par = "\"If it doesn't begin, 'A shot rang out,'\" Kingsley Amis once declared, \"I don't want to read it.\" Had Amis been patient with Karin Slaughter's big - and timely - thriller \"Pieces of Her,\" he would have been well rewarded. The novel's first line lacks gunfire but whizzing bullets - hailstorms of them - are just over the narrative horizon.";
        document.getElementById('question').innerHTML = par;
    }
    if (rnd == 5) {
        par = "LISTEN Eusebius spoke to Crispian Olver about his explosive book How To Steal A City: The Battle for Nelson Mandela Bay which is helps us to better understand much rot within the entire state and across the country.";
        document.getElementById('question').innerHTML = par;
    }
    if (rnd == 6) {
        par = "The testament of the title is a document detailing the young Jozsef's experiences during the war. As a plot device it's a bit contrived, but no matter. It brings Eva to Berlin, and then to Budapest, where she is torn between her grandfather's stipulation that the testament be destroyed, and the desire of historians to preserve it.";
        document.getElementById('question').innerHTML = par;
    }
    if (rnd == 7) {
        par = "Saffron meets and falls in love with the idealistic Gerhard von Meerbach, who is struggling to come to terms with the path his family and country are taking in 1930's Germany, only for them to be cruelly separated by the arrival of WW2. In Courtney's War, we follow Saffron and Gerhard throughout the war as they fight for their countries in the hope that one day peace will come and they will find each other once again.";
        document.getElementById('question').innerHTML = par;
    }
    if (rnd == 8) {
        par = "If you're a fan of thrillers that really make you think, Believe Me will be right up your alley. The line between what's real and what's a performance are blurred so skilfully that Delaney keeps us guessing right up until the book’s heart-stopping conclusion, and the script-style formatting employed in parts only adds to this. Combined with the characters and setting – our heroine is a femme fatale in a seedy Big Apple – the script formatting also gives the book a film noir feel, which helps build the atmosphere of suspicion and suspense.";
        document.getElementById('question').innerHTML = par;
    }
    if (rnd == 9) {
        par = "She was his best-kept secret... Fast as a bullet, hauntingly beautiful, and filled with stunning double-crosses and twists of plot, The Other Woman is a tour de force that proves once again that \"of all those writing spy novels today, Daniel Silva is quite simply the best\" (Kansas City Star).";
        document.getElementById('question').innerHTML = par;
    }
}