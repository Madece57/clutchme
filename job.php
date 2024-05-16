<?php
include 'buy.html'; 
/*   
$host = "localhost";
$user = "id19627837_root";
$pass = "Madece/57-77";
$db = "id19627837_registration";
*/
$host = "localhost";
$user = "root";
$pass = "";
$db = "registration";

$con = new mysqli($host,$user,$pass,$db);
if (!$con) {
    echo "Ops there is a problem connecting to the data base";
}
else{
    
  $first = $_POST['finame'];
  $second = $_POST['sename'];
  $email = $_POST['email'];
  $loc = $_POST['area'];
  $date = $_POST['date'];
  $job = $_POST['job'];
  $files = $_FILES['files']['name'];
$uploadDirectory = "uploads/jobs/";

$qry = "INSERT INTO `buy` (`first name`, `second name`, `email`, `location`, `date`, `job`, `files`) VALUES ('$first', '$second', '$email', '$loc', '$date', '$job', '$files')";
$insert = mysqli_query($con,$qry);
if (!$insert) {
    echo "ops there is a problem while inserting data";
}

else{
  if (move_uploaded_file(
    $_FILES["files"]["tmp_name"],
    $uploadDirectory . $_FILES["files"]["name"]
    )) {
        ?>
        <script>
            swal("successs", "Your data has been saved successfully. Please wait as we process your payment. Incase of any problem contact ( 0759532312 )", "success");
        </script>

        <?php
}
else {
    ?>
    <script>
        swal("Failed", "Error moving file.", "error");
    </script>

    <?php

}}}



?>




