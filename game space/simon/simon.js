jQuery("span").css("color","green");
jQuery("span").css("font-size","25px");


var isStart=false;
var onclick=false;
var score=0;
var r="88";
var click=9;

    jQuery(".btn").click(function(event)
    {
        if(!isStart)
        {
            jQuery("#gameOver").text("Live");
            jQuery("#gameOver").css("color","green");
            jQuery("#score").text("5");
            var clickno=0;
        }

        var num=Math.floor(1+Math.random()*4);
        var isanimate=true;
        
        
        
        if(isStart)
        {
            r=event.target.id;
            click=r[1];
            if(clickno==click)
            {
                isanimate=true;
                score+=5;
                jQuery("#score").text(score);

            }else{
                isanimate=false;
                jQuery("#gameOver").text("Game Over");
                jQuery("#gameOver").css("color","red");
                score=0;
                jQuery("#score").text(score);
            }
        }
            

    

        if(isanimate)
        {
            if(num===1)
            {
                jQuery("#A1").css("color","white");
                jQuery("#A1").animate({opacity:.2});
                jQuery("#A1").animate({opacity:1});
                    
            }

            if(num===2)
            {
                jQuery("#B2").css("color","white");
                jQuery("#B2").animate({opacity:0.2});
                jQuery("#B2").animate({opacity:1});
                
                
            }
            if(num===3)
            {
                jQuery("#C3").animate({opacity:0.2});
                jQuery("#C3").animate({opacity:1});
                jQuery("#C3").css("color","white");
                
            }
            if(num===4)
            {
                jQuery("#D4").animate({opacity:0.2});
                jQuery("#D4").animate({opacity:1});
                jQuery("#D4").css("color","white");
                
            }  

            clickno=num;
            r="99";
            click=9;
            isStart=true;
        
        }
        
    });






