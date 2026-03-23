<?php

$email = $_POST['email'] ?? $_GET['email'] ?? null;

if(!$email){
    echo "no email";
    exit;
}

$redisPath = "C:\\redis\\redis-cli.exe";


$command = "\"$redisPath\" SET \"$email\" logged_in";

shell_exec($command);

echo "stored";

?>