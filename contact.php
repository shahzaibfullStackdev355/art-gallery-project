
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email= $_POST['email'];
    $message= $_POST['message'];

    $to = 'AGENT@NEAO.FR'; 
    $subject = 'Mail From NEAÒIR';
    $body = "First Name: $fname\nLast Name: $lname\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Failed to send the email.';
    }
}
?>
