
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>time-per-jedi</title>
    
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
                  <div class="wrap2">
                      <h2>Choose an era ...</h2>
                  </div>
                   
               </div>
           </div>
            <div class="row">
                <div class="col-md-4">
                   <div class="wrap">
                       <div class="title">
                     <form action="http://localhost/star_wars_site/quizjedi/quiz1.php" method ="POST">
                       <input type="image" src="images/oldjedi.png" width="99%" id="time1" value="Old Rebuplic"onmouseover="this.src='images/oldjedi1.png';" 
onmouseout="this.src='images/oldjedi.png';">
                     </form>
                      
                        
                    </div>
                   </div>
                    
                </div>
                <div class="col-md-4">
                   <div class="wrap">
                   <div class="title">
                    <form action="http://localhost/star_wars_site/quizjedi/quiz2.php" method ="POST">
                       <input type="image" src="images/highjedi.png" width="99%"  id="time2" value="High Republic" onmouseover="this.src='images/highjedi1.png';" 
onmouseout="this.src='images/highjedi.png';">
                     </form>
                      
                        
                    </div></div>
                    
                </div>
                <div class="col-md-4">
                   <div class="wrap">
                       <div class="title">
                     <form action="http://localhost/star_wars_site/quizjedi/quiz3.php" method ="POST">
                       <input type="image" src="images/newjedi.png" width="99%" id="time3" value="New Republic" onmouseover="this.src='images/newjedi1.png';" 
onmouseout="this.src='images/newjedi.png';">
                     </form>
                      
                        
                    </div>
                   </div>
                    
                </div>
            </div>
        </div>
    </div>
  <?php include 'bottom.php'; ?>