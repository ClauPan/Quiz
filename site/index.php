
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/styles.css">
    <?php include 'cookie.php';
    ?>
   
   
</head>
<body>

<?php include 'top.php'; ?>
<div class="icon">
        <div class="container">
           <div class="row">
               <div class="col-md-12">
                   <h2>Choose a side ...</h2>
               </div>
           </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="title">
                     <form action="http://localhost/star_wars_site/time-jedi.php" method ="POST">
                        <input  type="hidden" value="#002366" name="#002366">
                       <input  class="all" type="image" src="images/jedi.png" width="75%" id="allegiance" value="jedi" onmouseover="this.src='images/jedi1.png';" 
onmouseout="this.src='images/jedi.png';" >
                     </form>
                      
                        
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="title">
                    <form action="http://localhost/star_wars_site/time-sith.php" method ="POST">
                        <input type="hidden" value="darkred" name="darkred">
                       <input class="all" type="image" src="images/sith.png" width="75%" id="allegiance" value="sith" onmouseover="this.src='images/sith1.png';" 
onmouseout="this.src='images/sith.png';">
                     </form>
                      
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
 
  <?php include 'bottom.php'; ?>