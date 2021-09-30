var user_play=document.body.querySelector(".dragons")

var dragon_health=10;
var knights_health=5;

    while(dragon_health&&knights_health>0){
        var user_damage=Number(prompt("How many times do you want to hit the dragon? (Choose a number up to 5)"));
        if (user_damage==="1"||user_damage==="2"||user_damage==="3"||user_damage==="4"||user_damage==="5"){
            var user_dealt_damage=Math.floor(Math.random() * user_damage) + 1;
            dragon_health=dragon_health-user_dealt_damage;
        }else if(user_damage===">5"){
            dragon_health=dragon_health-1
        }

        var dragon_dealt_damage=Math.floor(Math.random() * 3) + 1;
        knights_health=knights_health-dragon_dealt_damage

        if(dragon_health=0){
            user_play.innerHTML = "You defeated the dragon, you win!";
        }else if(knights_health=0){
            user_play.innerHTML="You lost to the dragon, you lose.";
        }
}