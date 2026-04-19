<?php
$mood = $_POST['mood'];
$file = "movies.xml";

if (file_exists($file)) {
    $xml = simplexml_load_file($file);
} else {
    $xml = new SimpleXMLElement("<movies></movies>");
}

$entry = $xml->addChild("entry");
$entry->addChild("mood", $mood);
$entry->addChild("time", date("d-m-Y H:i"));

$xml->asXML($file);
?>