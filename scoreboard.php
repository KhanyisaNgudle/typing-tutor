<?php

include 'connect.php';

$sql = "SELECT * FROM Results";

$result = mysqli_query($conn, $sql);
$rows = mysqli_fetch_array($result);

