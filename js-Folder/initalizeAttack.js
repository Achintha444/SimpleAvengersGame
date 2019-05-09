let initalizeAttack = function(){
    let playerHealth =  document.querySelector(".health-player");
    let enemyHealth = document.querySelector(".health-enemy");


    let playerAttack = player.playerAttack();
    let enemyAttack = enemy.enemyAttack();

    if (player.speed>enemy.speed){
        
        enemy.health -= playerAttack[0]*playerAttack[1];

        if (enemy.health<=0){
            enemyHealth.innerHTML = 'Health: 0';
            alert("You won!\nYou have saved the humainty!\nrefersh to playagain!");
            window.location.reload();
        }
        else{
            alert ("You attacked enmey "+ playerAttack[1] +" times with "+playerAttack[0]+" damage!");
            enemyHealth.innerHTML = 'Health '+enemy.health;

            player.health -= enemyAttack[0]*enemyAttack[1];

            if (player.health<=0){
                playerHealth.innerHTML = 'Health: 0';
                alert("You Lost!\nYou have not saved the humainty!\nrefersh to playagain!");
                window.location.reload();
            }
            else{
                alert ("You were attacked by the enmey "+ enemyAttack[1] +" times with "+enemyAttack[0]+" damage!");
                playerHealth.innerHTML = 'Health '+player.health;
            }

        }

    }

    else{

        player.health -= enemyAttack[0]*enemyAttack[1];

        if (player.health<=0){
            playerHealth.innerHTML = 'Health: 0';
            alert("You Lost!\nYou have not saved the humainty!\nrefersh to playagain!");
            window.location.reload(); 

        }
        else{
            alert ("You were attacked by the enmey "+ enemyAttack[1] +"times with "+enemyAttack[0]+"damage!");
            playerHealth.innerHTML = 'Health '+player.health;

            enemy.health -= playerAttack[0]*playerAttack[1];

            if (enemy.health<=0){
                enemyHealth.innerHTML = 'Health: 0';
                alert("You won!\nYou have saved the humainty!\nrefersh to playagain!");
                window.location.reload();
    
            }
            else{
                alert ("You attacked enmey "+ playerAttack[1] +"times with "+playerAttack[0]+"damage!");
                enemyHealth.innerHTML = 'Health '+enemy.health;
            }
        }

    }

}