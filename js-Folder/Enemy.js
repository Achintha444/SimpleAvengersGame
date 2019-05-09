let enemy;

function Enemy(villan,health,power,strength,agility,speed,imgSrc){
    this.villan = villan;
    this.health = health;
    this.power = power;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    this.imgSrc = imgSrc;

    this.enemyAttack = function(){
        let calcBaseDamage = (this.power * this.agility * this.strength)/500000 ;
        let offsetDamage = Math.floor(Math.random()*Math.floor(100));
        let calacOutputDamage = calcBaseDamage + offsetDamage;

        let numberOfHits = Math.floor(Math.random()* Math.floor(this.agility/20))+1;
        
        let attackValues = [calacOutputDamage,numberOfHits];

        return attackValues;
    };
}