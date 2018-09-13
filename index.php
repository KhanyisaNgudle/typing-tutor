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
                <a onclick="showScoreboard()" class="btn btn-primary">High Scores</a>
            </div>
        </div>
    </header>
    <div class="image"></div>

    <div class="text">
        <h1>Typing</h1>
        <p>Improve your typing speed</p>
        <a onclick="showTest()" class="btn btn-primary">Start Typing</a>
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
            <div class="test" id="test">
            <div class="text-container">
                <div class="question">
                    <h5 id="question"></h5>
                </div>
                <!--side action-->
                <div class="stats">
                        
                    <div class="speed">
                        <p id="speed"><i class="far fa-keyboard"></i> speed</p>
                    </div>
                    <div class="accuracy">
                        <p id="accuracy"><i class="fas fa-bullseye"></i> accuracy</p>
                    </div>
                </div>

            </div>
            <!--text-container collapse-->
            <div class="input-container">
                <textarea type="text" id="user-input" onkeyup="check_input(this)"></textarea>
                <span>
                    <a href="index.php" class="btn btn-primary">Restart</a>
                </span>
            </div>
            <div class="background" id="background"></div>
            <div class="results" id="results">
                <h1 id="userResults">Results</h1>
                <input maxlength="20" type="text" id="username" placeholder="Username">
                <select id="province">
                    <option value="" disabled selected hidden>Rep your city</option>
                    <option value="CPT">Cape Town</option>
                    <option value="JHB">Johannesburg</option>
                    <option value="DBN">Durban</option>
                    <option value="PTE">Pretoria</option>
                    <option value="PE">Port Elizabeth</option>
                    <option value="BFN">Bloemfontein</option>
                    <option value="EL">East London</option>
                    <option value="MBO">Mbombela</option>
                    <option value="POL">Polokwane</option>
                    <option value="KIM">Kimberly</option>
                    <option value="OTH">Other</option>
                </select>
                <p id="resSpeed">Typing Speed:</p>
                <p id="resAccuracy">Accuracy</p>
                <div id="btns">
                    <a class="btn btn-primary" onclick="saveResults()" name="buttons" href="index.php">Save Results</a>
                    <a class="btn btn-danger" onclick="closeResults()" id="close" href="index.php">Close</a>
                </div>
            </div>
            </div>
            <!-- test collapse -->
            <!-- scoreboard -->
            <div class="scoreboard" id="scoreboard">
                <h1>Scoreboard:</h1>

        <table class="table">
        <tr class="header">
            <td>No</td>
            <td>Name</td>
            <td>Speed</td>
            <td>Accuracy</td>
            <td><select><option value="Province" disabled selected>Province</option>
            <option value="CPT">Cape Town</option><option value="JHB">Johannesburg</option><option value="DBN">Durban</option></select></td>
        </tr>
        <?php
        include 'connect.php';

        $sql = "SELECT * FROM scoreboard";
        
        $result = mysqli_query($conn, $sql);
      
           $i = 0;
           while ($row = mysqli_fetch_array($result)) {
               $class = ($i == 0) ? "" : "alt";
               echo "<tr class=\"".$class."\">";
               echo "<td>".$row['ID']."</td>";
               echo "<td>".$row['username']."</td>";
               echo "<td>".$row['speed']."</td>";
               echo "<td>".$row['accuracy']."</td>";
               echo "<td>".$row['province']."</td>";
               echo "</tr>";
               $i = ($i==0) ? 1:0;
           }

        ?>
    </table>

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
    <div class="footerText">
    <p>&copy Khanyi</p>
    </div>
</footer>
</html>