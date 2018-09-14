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
