
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email= $_POST['email'];
    $phoneNo = $_POST['phoneNo'];
    $country = $_POST['country'];
    $CollectionType = $_POST['CollectionType'];
    $ArtworkCollection = $_POST['ArtworkCollection'];
    $merchCollection = $_POST['merchCollection'];
    $artworkNo = $_POST['artworkNo'];
    $paperType = $_POST['paperType'];
    $message= $_POST['message'];

    $to = 'AGENT@NEAO.FR'; 
    $subject = 'Mail From NEAÒIR';
    $body = "First Name: $fname\n Last Name: $lname\n Email: $email\n Phone-Number: $phoneNo\n Country: $country\n Collection-Type: $CollectionType\n Artwork-Collection: $ArtworkCollection\n Merch-Collection: $merchCollection\n Artwork-Image-Number:  $artworkNo\n Paper-Type: $paperType\n Message: $message";

    if (mail($to, $subject, $body)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Failed to send the email.';
    }
}
?>
