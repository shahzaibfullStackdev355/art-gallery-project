
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email= $_POST['email'];

    $to = 'AGENT@NEAO.FR';
    $subject = 'Mail From NEAÒIR';
    $body = "Email: $email";

    if (mail($to, $subject, $body)) {
        echo 'Subscribed successfully.';
    } else {
        echo 'Failed to Subscribe.';
    }
}
?>