<?php
if(isset($_COOKIE["color"])){
    $color1=$_COOKIE["color"];
    if(strcmp($color1, '#002366') == 0){
        $color2='#002c80';
    } else{
        $color2='red';
    }
        
    
}else{
    $color1 ='#002366';
    $color2='#002c80';
}

if(isset($_POST['darkred'])){
    $color=$_POST['darkred'];
    setcookie('color', $color, time()+3600);
}
if(isset($_POST['#002366'])){
    $color=$_POST['#002366'];
    setcookie('color', $color, time()+3600);
}

?>