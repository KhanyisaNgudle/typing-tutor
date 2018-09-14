<?php

$conn = mysqli_connect("localhost", "root", "", "typa");

if (mysqli_connect_errno()) {
    echo "Sorry, couldn't connect to database.";
}