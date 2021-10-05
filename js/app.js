var user_play=document.body.querySelector(".dragons")

var dragon_health=10;
var knights_health=5;

    while(dragon_health>0||knights_health>0){
        var question = Number(prompt("How many times do you want to hit the dragon? (Choose a number up to 5)"));
        var user_dealt_damage = Math.floor(Math.random() * question) + 1;
        if (user_dealt_damage > 5) {
            dragon_health = dragon_health - 1;
        } else {
            dragon_health = dragon_health - user_dealt_damage
        }
        //Everything above works
        var dragon_dealt_damage = Math.floor(Math.random() * 2) + 1;
        knights_health = knights_health - dragon_dealt_damage;

        console.log(dragon_health)
        console.log(knights_health)

    }

if (knights_health<=0){
    user_play.innerHTML = "The dragon killed you!"
}else if (dragon_health<=0){
    user_play.innerHTML="You killed it."
}






   
