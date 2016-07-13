function minMax(min, max) {
  return (Math.random() * (max - min) + min).toFixed(0);
}

function extend(Child, Parent) {
  var Temp = function () {};
  Temp.prototype = Parent.prototype;
  Child.prototype = new Temp();
  Child.prototype.constructor = Child;
}

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