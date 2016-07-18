$(function () {

  function Character() {
    var health = 0,
      mana = 0,
      skills = [""],
      xp = 0,
      armor = 0,
      res = 0,
      atk = 25,
      wpnAtk = 10,
      mAtk = 0;
    
    this.setAtk = function (atkSet) {
      atk = atkSet;
    };

    this.getPhysAtk = function () {
      return atk + this.wpnAtk;
    };

    this.setmAtk = function (mAtkSet) {
      mAtk = mAtkSet;
    };

    this.getMAtk = function () {
      return mAtk + this.mAtk;
    };

  }
  
  var skull = new Character();
  skull.maxHealth = 100;
  skull.maxMana = 250;
  skull.xp = 0;

  var sinkeil = new Character();
  
  
  
  skull.maxHealth = minMax(150, 200);
  skull.currentHealth = skull.maxHealth;
  skull.maxMana = minMax(290, 400);
  skull.currentMana = skull.maxMana;

 
  
  
});