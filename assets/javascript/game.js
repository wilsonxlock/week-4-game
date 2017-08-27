$(document).ready(function() {
    var randomnumber = Math.floor(Math.random()*200)+20;
    var gem1 = (Math.floor(Math.random()*49)*2)+1;
    var gem2 = (Math.floor(Math.random()*49)*2)+1;
    var gem3 =  Math.floor(Math.random()*10);
    var gem4 = (Math.floor(Math.random()*49)*2);
    var score = 0;
    var wins =0;
    var loss = 0;
$(".random").html(randomnumber)
$(".wins").html("Wins " + wins)
$(".loss").html("loss " + loss)
$(".roundscore").html(score)
$(".crys1").on ( "click",function(){
    
    score = score+gem1;
    $(".roundscore").html(score);
    if (score == randomnumber) { 
        wins++;
        score = 0;
        $(".roundscore").html(score);
        $(".wins").html("Wins"+ wins);
   
     randomnumber = Math.floor(Math.random()*200)+20;
     gem1 = (Math.floor(Math.random()*49)*2)+1;
     gem2 = (Math.floor(Math.random()*49)*2)+1;
     gem3 =  Math.floor(Math.random()*10);
     gem4 = (Math.floor(Math.random()*49)*2);
     $(".random").html(
        randomnumber
    )

    }
    if (score > randomnumber) { 
        loss++;
        score = 0;
        $(".roundscore").html(score);
        $(".wins").html("Wins "+ wins);
        $(".loss").html("Loss " + loss);
    
     randomnumber = Math.floor(Math.random()*200)+20;
     gem1 = (Math.floor(Math.random()*49)*2)+1;
     gem2 = (Math.floor(Math.random()*49)*2)+1;
     gem3 =  Math.floor(Math.random()*10);
     gem4 = (Math.floor(Math.random()*49)*2);
     $(".random").html(randomnumber)
    
    }
     
  })
$(".crys2").on ( "click",function(){
    
    score = score+gem2;
    $(".roundscore").html(score);
    if (score == randomnumber) { 
        wins++;
        score = 0;
        $(".roundscore").html(score);
        $(".wins").html("Wins"+ wins);
   
    
    randomnumber = Math.floor(Math.random()*200)+20;
    gem1 = (Math.floor(Math.random()*49)*2)+1;
    gem2 = (Math.floor(Math.random()*49)*2)+1;
    gem3 =  Math.floor(Math.random()*10);
    gem4 = (Math.floor(Math.random()*49)*2);
    $(".random").html(
        randomnumber
    )

    }
    if (score > randomnumber) { 
        loss++;
        score = 0;
        $(".roundscore").html(score);
        $(".wins").html("Wins "+ wins);
        $(".loss").html("Loss " + loss);
    
     randomnumber = Math.floor(Math.random()*200)+20;
     gem1 = (Math.floor(Math.random()*49)*2)+1;
     gem2 = (Math.floor(Math.random()*49)*2)+1;
     gem3 =  Math.floor(Math.random()*10);
     gem4 = (Math.floor(Math.random()*49)*2);
     $(".random").html(randomnumber)
    
    }
    
  
     
  })
$(".crys3").on ( "click",function(){
    
    score = score+gem3;
    $(".roundscore").html(score);
    if (score == randomnumber) { 
        wins++;
        score = 0;
        $(".roundscore").html(score);
        $(".wins").html("Wins"+ wins);
   
    
    randomnumber = Math.floor(Math.random()*200)+20;
    gem1 = (Math.floor(Math.random()*49)*2)+1;
    gem2 = (Math.floor(Math.random()*49)*2)+1;
    gem3 =  Math.floor(Math.random()*10);
    gem4 = (Math.floor(Math.random()*49)*2);
    $(".random").html(
        randomnumber
    )
   
    }
    if (score > randomnumber) { 
        loss++;
        score = 0;
        $(".roundscore").html(score);
        $(".wins").html("Wins "+ wins);
        $(".loss").html("Loss " + loss);
    
     randomnumber = Math.floor(Math.random()*200)+20;
     gem1 = (Math.floor(Math.random()*49)*2)+1;
     gem2 = (Math.floor(Math.random()*49)*2)+1;
     gem3 =  Math.floor(Math.random()*10);
     gem4 = (Math.floor(Math.random()*49)*2);
     $(".random").html(randomnumber)
    
    }
     
  })
$(".crys4").on ( "click",function(){
    
    score = score+gem4;
    $(".roundscore").html(score);
    if (score == randomnumber) { 
        wins++;
        score = 0;
        $(".roundscore").html(score);
        $(".wins").html("Wins"+ wins);
   
    
    randomnumber = Math.floor(Math.random()*200)+20;
    gem1 = (Math.floor(Math.random()*49)*2)+1;
    gem2 = (Math.floor(Math.random()*49)*2)+1;
    gem3 =  Math.floor(Math.random()*10);
    gem4 = (Math.floor(Math.random()*49)*2);
    $(".random").html(
        randomnumber
    )
    }
    if (score > randomnumber) { 
        loss++;
        score = 0;
        $(".roundscore").html(score);
        $(".wins").html("Wins "+ wins);
        $(".loss").html("Loss " + loss);
    
     randomnumber = Math.floor(Math.random()*200)+20;
     gem1 = (Math.floor(Math.random()*49)*2)+1;
     gem2 = (Math.floor(Math.random()*49)*2)+1;
     gem3 =  Math.floor(Math.random()*10);
     gem4 = (Math.floor(Math.random()*49)*2);
     $(".random").html(randomnumber)
    
    }
    
  })
 
  

})