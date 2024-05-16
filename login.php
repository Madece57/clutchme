<?php
$email = $_POST['email'];
$password = $_POST['password'];

// Change this to your connection info.

/*
$servername = "localhost";
$user = "id19627837_root";
$pass = "Madece/57-77";
$db = "id19627837_registration";


*/

$servername = "localhost";
$user = "root";
$pass = "";
$db = "registration";
// Try and connect using the info above.
$con = mysqli_connect($servername, $user, $pass, $db);
  if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }  
  else{
   //to prevent from mysqli injection  
        $email = stripcslashes($email);  
        $password = stripcslashes($password);  
        $email = mysqli_real_escape_string($con, $email);  
        $password = mysqli_real_escape_string($con, $password);  
        $sql = "select *from reg where email = '$email' and password = '$password'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
        if($count == 1){  
            header('Location: main.html'); exit();
        }  
        else{     
              header('Location: index.html'); exit();   

        }   
  }

?>
