<?php

$mesaj = $_POST["mesaj"];
$adi = $_POST["isim"];
$email = $_POST["email"];
$cinsiyet = $_POST["cinsiyet"];
$yasi = $_POST["yasi"];


echo "Mesaj: " . $mesaj;
echo('<br>');
echo "Adı: " . $adi;
echo('<br>');
echo "E-mail: " . $email;
echo('<br>');
echo "Cinsiyet: " . $cinsiyet;
echo('<br>');
echo "Yaşı: " . $yasi;


