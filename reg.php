<?php
include("index.html");
/*
$host = "localhost";
$user = "id19627837_root";
$pass = "Madece/57-77";
$db = "id19627837_registration";
*/

$servername = "localhost";
$user = "root";
$pass = "";
$db = "registration";

$con = new mysqli($host,$user,$pass,$db);
if (!$con) {
        echo "there is a problem connecting to the data base";
 
}
$email = $_POST['email'];
$password = $_POST['password'];


$checkmail = "SELECT email FROM reg WHERE email = '$email'";
$checkmail_run = mysqli_query($con, $checkmail);

if(mysqli_num_rows($checkmail_run) > 0){
    echo "<h2>Email already exists</h2>";
}
else{

$qry = "INSERT INTO `reg` (`email`, `password`) VALUES ('$email', '$password')";
$insert = mysqli_query($con,$qry);

if (!$insert) {
       
    ?>
    <script>
        swal("Failed", " Failed to register your account please contact admin  ( 0759532312 )'", "error");
    </script>

    <?php

}
else{
    ?>
    <script>
        swal("Success", "Registration success.", "Success");
    </script>

    <?php

}
}
?>

 

            
            