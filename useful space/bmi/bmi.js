jQuery("#cal").click(function()
{
    const height=jQuery("#height").val();
    const weight=jQuery("#weight").val();
    const heightInMeter=height/100;
    const bmi=(weight/(heightInMeter*heightInMeter)).toFixed(2);
    if(isNaN(bmi) || bmi==0.00 || bmi==Infinity)
    {
        jQuery("#result").text("Invalid input");
        jQuery("#result").css("color","red");

    }else{   
    if(bmi<18.5)
    {
        jQuery("#result").text("BMI : "+bmi+", You are underweight");
        jQuery("#result").css("color","yellow");
       jQuery("body").css("background-color","#a88c8a");
    }
    else if(bmi<25){
        jQuery("#result").text("BMI : "+bmi+", You are healthy");
        jQuery("#result").css("color","green");
        // jQuery("#result").css("background-color","black");

    }
    else if(bmi<30){
        jQuery("#result").text("BMI : "+bmi+", You are overweight");
        jQuery("#result").css("color","red");
        // jQuery("#result").css("background-color","black");

    }else{
        jQuery("#result").text("BMI : "+bmi+" You are obese");
        jQuery("#result").css("color","red");
    }
    }
    
    
});
