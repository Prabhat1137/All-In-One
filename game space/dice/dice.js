var num1=Math.floor(1+Math.random()*6);
var num2=Math.floor(1+Math.random()*6);

// document.getElementById("p1Point").innerHTML=num1;
// document.getElementById("p2Point").innerHTML=num2;

var img1="resource/img"+num1+".png";
var img2="resource/img"+num2+".png";

document.querySelector("#img1").setAttribute("src",img1);
document.querySelector("#img2").setAttribute("src",img2);

if(num1===num2)
{
    document.querySelector("#res").innerHTML="Game Draw !";
    document.getElementById("res").style.color="red";
}else if(num1>num2){
    document.querySelector("#res").innerHTML="<em>Player 1 won !</em>";
    // document.getElementById("res").style.color="blue";
    document.querySelector("#res").style.color="blue";
    document.querySelector("#player1").style.color="green";

}else{
    document.querySelector("#res").innerHTML="<em>Player 2 won !</em>";
    document.getElementById("res").style.color="blue";
    document.querySelector("#player2").style.color="green";
}