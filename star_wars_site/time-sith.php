
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>time-per-sith</title>
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
                   <h2>Choose an era ...</h2>
               </div>
           </div>
            <div class="row">
                <div class="col-md-4">
                   <div class="wrap">
                       <div class="title">
                     <form action="http://localhost/star_wars_site/quizsith/quiz1.php" method ="POST">
                       <input type="image" src="images/oldsith.png" width="99%" id="time" value="old" onmouseover="this.src='images/oldsith1.png';" 
onmouseout="this.src='images/oldsith.png';">
                     </form>
                      
                        
                    </div>
                   </div>
                    
                </div>
                <div class="col-md-4">
                   <div class="wrap">
                       <div class="title">
                    <form action="http://localhost/star_wars_site/quizsith/quiz2.php" method ="POST">
                       <input type="image" src="images/highsith.png" width="99%"  id="time" value="high" onmouseover="this.src='images/highsith1.png';" 
onmouseout="this.src='images/highsith.png';">
                     </form>
                      
                        
                    </div>
                   </div>
                </div>
                <div class="col-md-4">
                   <div class="wrap">
                       <div class="title">
                     <form action="http://localhost/star_wars_site/quizsith/quiz3.php" method ="POST">
                       <input type="image" src="images/newsith.png" width="99%" id="time" value="new" onmouseover="this.src='images/newsith1.png';" 
onmouseout="this.src='images/newsith.png';">
                     </form>
                      
                        
                    </div>
                   </div>
                    
                </div>
            </div>
        </div>
    </div>
  <?php include 'bottom.php'; ?>