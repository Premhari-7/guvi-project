<?php

require 'mongo.php';

if(!isset($_POST['email'])){
    echo "Email missing";
    exit;
}

$email = $_POST['email'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

try {

    $collection = $db->users;

    $result = $collection->insertOne([
        "email" => $email,
        "age" => $age,
        "dob" => $dob,
        "contact" => $contact
    ]);

    echo "Saved Successfully";

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}

?>