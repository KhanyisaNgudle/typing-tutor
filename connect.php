<?php

$conn = mysqli_connect("localhost", "root", "", "typa");

if (!$conn) {
    echo "Couldn't connect something went wrong!";
}