<?php

include 'connect.php';

$username = mysqli_real_escape_string($_GET['username']);
$province = mysqli_real_escape_string($_GET['province']);
$speed = mysqli_real_escape_string($_GET['speed']);
$accuracy = mysqli_real_escape_string($_GET['accuracy']);

if (empty($username) || empty($province) || empty($speed) || empty($accuracy)) {  
    exit();
}

$sql = "INSERT INTO scoreboard (username, province, speed, accuracy) VALUES ('$username', '$province', '$speed', '$accuracy')";

$result = mysqli_query($conn, $sql);

if (!$result){
    echo "Couldn't save to database" . mysqli_error();
} else {
    echo "Saved";
}