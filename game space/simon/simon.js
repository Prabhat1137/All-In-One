jQuery("span").css("color","red");
jQuery("span").css("font-size","25px");

var isStart=false;
if(!isStart)
{
    jQuery(".btn").click(function()
    {
        isStart=true;
        if(isStart)
        {
            jQuery("#gameOver").text("Live");
            jQuery("#gameOver").css("color","green");
            jQuery("#score").text("5");

            var level=1;

            for(var i=0;i<level;i++)
            {
                var num=Math.floor(1+Math.random()*4);
                

                if(num===1)
                {
                    jQuery("#A").css("color","white");
                    jQuery("#A").slidedown().slideup().animate({opacity:0.7});
                    
                    

                }
                if(num===2)
                {
                    jQuery("#B").slidedown().slideup().animate({opacity:0.7});
                    jQuery("#B").css("color","white");
                    
                }
                if(num===3)
                {
                    jQuery("#C").slidedown().slideup().animate({opacity:0.7});
                    jQuery("#C").css("color","white");
                    
                }
                if(num===4)
                {
                    jQuery("#D").slidedown().slideup().animate({opacity:0.7});
                    jQuery("#D").css("color","white");
                    
                }
            }
        

        }else
        {
            jQuery("#gameOver").text("Game Over");
        }
        
    });
}



