var MonsterUrl = ["svg/birdskull.svg", "svg/sinkeil.svg", "svg/pointer_hover.svg"];

function Character() {
  
  this.Skills = {
    skill: {
      name : "",
      url : "",
      power : 0,
      manaCost : 0
    }
  } 
  
  this.walk = 3;
  this.speed = 5;
  this.name = "";
  this.maxHealth = 0;
  this.maxMana = 0;
  this.currentHealth = 0;
  this.currentMana = 0;
  this.xp = 0;
  this.armor = 0;
  this.res = 0;
  this.atk = 25;
  this.wpnAtk = 0;
  this.mAtk = 0;
  
  this.setAtk = function (atkSet) {atk = atkSet;};
  this.getPhysAtk = function () {return atk + this.wpnAtk;};
  this.setmAtk = function (mAtkSet) {mAtk = mAtkSet;};
  this.getMAtk = function () {return mAtk + this.mAtk;};
}

function Skull() {
  
  var skull = new Character();
  var thisName = "";
  
  skull.name = function randName() {
    var a;
    if (thisName.length < 1) {
      for (a = 0; a < minMax(3, 6); ++a) {
        thisName += voyelle[minMax(0, 5)];
        thisName += consonne[minMax(0, 5)];
      }
    }
    return thisName;
  };
  
  skull.url = MonsterUrl[0];
  skull.xp = 0;
  skull.maxHealth = 200;
  skull.currentHealth = skull.maxHealth;
  skull.maxMana = 400;
  skull.currentMana = skull.maxMana;
  skull.mAtk = 10;
  
  skull.Skills = [
    {
      name : "Turny stuff",
      url : "svg/aoeSlider.svg",
      power : 1.2,
      manaCost : 5
    },
    {
      name : "spikey shiny thingy",
      url : "svg/aoeSliderAlternative.svg",
      power : 2.4,
      manaCost : 10
    },
    {
      name : "Pulsating thingamabob",
      url : "svg/slider.svg",
      power : 4,
      manaCost : 17
    },
    {
      name : "Needs a rework chan",
      url : "svg/sinkeil.svg",
      power : 1.57,
      manaCost : 7
    }
  ]
  return skull;
}