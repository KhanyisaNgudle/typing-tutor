<?php

include 'connect.php';

$username = $_GET['username'];
$province = $_GET['province'];
$speed = $_GET['speed'];
$accuracy = $_GET['accuracy'];

$sql = "INSERT INTO scoreboard (username, province, speed, accuracy) VALUES ('$username', '$province', '$speed', '$accuracy')";

$result = mysqli_query($conn, $sql);
echo "saving!";

if (!$result){
    echo "Couldn't save to database" . mysqli_error();
} else {
    echo "Saved";
}