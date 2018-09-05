<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>typa fast</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    <link rel="stylesheet" href="style.css">
</head>

<section class="section-a">

    <header>
        <div class="back"></div>
        <div class="menu">
            <div class="logo">
                <h1>typa_fast</h1>
            </div>
            <div class="options">
                <a class="btn btn-primary">High Scores</a>
            </div>
        </div>
    </header>
    <div class="image"></div>

    <div class="text">
        <h1>Typing</h1>
        <p>Improve your typing speed</p>
        <a class="btn btn-primary">Start Typing</a>
    </div>
    
</section>
<div class="board">
    
</div>
<body>
    <div class="container">
        <!-- Section A Collapse -->
        <!-- band -->
        <div class="band"></div>
        <div class="jumbotron">
            <div class="text-container">
                <div class="question">
                    <h5 id="question"><mark>When </mark>Henry Ford first conceived of the V8 motor</h5>
                </div>
                <!--side action-->
                <div class="stats">
                        <a class="far fa-tachometer"></a>
                    <div class="speed">
                        <p id="speed" "far fa-tachometer">speed: 0 wpm</p>
                    </div>
                    <div class="accuracy">
                        <p id="accuracy">accuracy: 100%</p>
                    </div>
                </div>

            </div>
            <!--text-container collapse-->
            <div class="input-container">
                <textarea type="text" id="user-input" onkeyup="check_input(this)"></textarea>
                <span>
                    <a href="index.html" class="btn btn-primary">Restart</a>
                </span>
            </div>
            <div class="results" id="results">
                <h1>Results</h1>
                <input type="text" id="username" placeholder="Username">
                <input type="text" id="province" placeholder="Province">
                <p id="resSpeed">Typing Speed:</p>
                <p id="resAccuracy">Accuracy</p>
                <span id="btns">
                    <a class="btn btn-primary" onclick="saveResults()" name="buttons">Save Results</a>
                    <a class="btn btn-danger" onclick="closeResults()" id="close">Close</a>
                </span>
            </div>
        </div>
        <!-- jumbotron collapse -->
    </div>
    <!-- container collapse -->
    <!-- results -->
    <section class="score">
        
    </section>
    <script src="script.js"></script>
</body>
<footer>
    <p>Khanyi</p>
</footer>

</html>