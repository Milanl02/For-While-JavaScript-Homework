var user_play=document.body.querySelector(".dragons")

var dragon_health=10;
var knights_health=5;

    while(dragon_health>0&&knights_health>0) {
        // var dragon_health=10;
        // var knights_health=5;
        var user_damage = Number(prompt("How many times do you want to hit the dragon? (Choose a number up to 5)"));

        var user_dealt_damage = Math.floor(Math.random() * user_damage) + 1;
        if (user_damage > 5) {
            var dragon_health_now = dragon_health - 1;
        } else {
            dragon_health_now = dragon_health - user_dealt_damage;
        }
    }

if (dragon_health > 0) {
    var dragon_dealt_damage = Math.floor(Math.random() * 3) + 1;
    var knights_health_now = knights_health - dragon_dealt_damage
} else {
    user_play.innerHTML = "You defeated the dragon, you win!";
}

if(knights_health<0){
    user_play.innerHTML = "You lost to the dragon, you lose.";
}
