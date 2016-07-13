$(function () {
  
  function minMax(min, max){
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
    var skull = new Character();
    skull.health = 100;
    skull.mana = 250;
    skull.xp = 0;
    
    var sinkeil = new Character();
    
    
    
    function setD(elem, d) {$(elem).attr("d", d); }
    function setX(elem, x) {$(elem).attr("x", x); }
    function setY(elem, y) {$(elem).attr("y", y); }
    function setCy(elem, cy) {$(elem).attr("cy", cy); }
    function setCx(elem, cx) {$(elem).attr("cx", cx); }
    function setR(elem, r) {$(elem).attr("r", r); }
    function setRx(elem, rx) {$(elem).attr("rx", rx); }
    function setRy(elem, ry) {$(elem).attr("ry", ry); }
    function setHeight(elem, height) {$(elem).attr("height", height); }
    function setWidth(elem, width) {$(elem).attr("width", width); }
    function setFill(elem, fill) {$(elem).attr("fill", fill); }
    function setStroke(elem, stroke) {$(elem).attr("stroke", stroke); }
    function setStrokewidth(elem, strokewidth) {$(elem).attr("stroke-width", strokewidth); }
    function setStrokedasharray(elem, strokedasharray) {$(elem).attr("stroke-dasharray", strokedasharray); }
    function setStrokedashoffset(elem, strokedashoffset) {$(elem).attr("stroke-dashoffset", strokedashoffset); }
  
  skull.health = minMax(1, 200);
   
    function HealthBar(elem) {
        setHeight(elem, 15);
        setWidth(elem, skull.health);
        setFill(elem, "#f55");
    }
    function ManaBar(elem) {
        setHeight(elem, 15);
        setWidth(elem, skull.mana);
        setFill(elem, "#55b1ff");
        setY(elem, "11%");
    }
    
    function XpTxt(elem) {
        setY(elem, "32%");
        $(elem).html(function () {
            return skull.xp + "/150 xp<span>";
        });
    }
    
    XpTxt($('#xpText'));
    HealthBar($('#healthBar'));
    ManaBar($('#manaBar'));

  console.log(skull.health);
});
