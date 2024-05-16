<?php
include 'main.html'; 
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
$infor = $_POST['info'];
$files = $_FILES['files']['name'];
$uploadDirectory = "uploads/projects/";

$qry = "INSERT INTO `info`(`info`, `files`) VALUES ('$infor', '$files')";

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
            swal("Thanks!", "Your project has been submitted successfully. It will be replied within a span of 20 min at most. The response shall be sent to you via your email.", "success");
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



