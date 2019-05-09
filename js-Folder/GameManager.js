let GameManager = {
    setGameStart: function(player){
        this.resetPlayer(player);
        this.setPreFight();
    },

    resetPlayer: function(player1){
        if (player1=="IronMan"){
            let imgSrc = document.querySelector("#IronMan").getAttribute("src");
            player = new Player("IRON MAN", 200, 50, 100, 150, 200,imgSrc);
        }
        else if(player1=="CaptainAmerica"){
            let imgSrc = document.querySelector("#CaptainAmerica").getAttribute("src");
            player = new Player("CAPTAIN AMERICA", 250, 125, 150, 100, 75,imgSrc);
        }
        else if(player1=="Thor"){
            let imgSrc = document.querySelector("#Thor").getAttribute("src");
            player = new Player("THOR", 275, 150, 200, 50, 25,imgSrc);
        }
        else if(player1=="CaptainMarvel"){
            let imgSrc = document.querySelector("#CaptainMarvel").getAttribute("src");
            player = new Player("CAPTAIN MARVEL", 150, 250, 125, 75, 100,imgSrc);
        }

        let getInterface = document.querySelector(".interface");

        getInterface.innerHTML = '<img src='+ player.imgSrc +' class="img-avatar"> <div> <h3>'+ player.avenger+'</h3> <p class="health-player">Health: '+player.health+'</p> <p>Power: '+player.power+'</p> <p>Strength: '+player.strength+'</p> <p>Agility: '+player.agility+'</p> <p>Speed: '+player.speed+'</p> </div>';

    },

    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an Enemy</p>';
        getActions.innerHTML = '<a href="#" class="button-prefight" onclick="GameManager.setFight()">Search For an Enemy</a>';
        getArena.style.visibility = 'visible';
    },

    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        let thanos = new Enemy("Thanos",275,275,110,20,20,"img/avatar-villans/Thanos.jpg");
        let hela = new Enemy("Hela",200,150,200,100,50,"img/avatar-villans/hela.jpeg");
        let chooseRandomEnemy = Math.floor(Math.random()*Math.floor(2));

        if (chooseRandomEnemy==0){enemy=thanos;}
        else {enemy=hela;}

        getHeader.innerHTML = '<p>Fight and save Humanity!</p>';
        getActions.innerHTML = '<a href="#" class="button-prefight" onclick="initalizeAttack()">Fight!</a>';
        getEnemy.innerHTML = '<img src='+ enemy.imgSrc +' class="img-avatar"> <div> <h3>'+ enemy.villan+'</h3> <p class="health-enemy">Health: '+enemy.health+'</p> <p>Power: '+enemy.power+'</p> <p>Strength: '+enemy.strength+'</p> <p>Agility: '+enemy.agility+'</p> <p>Speed: '+enemy.speed+'</p> </div>';

    }
} 