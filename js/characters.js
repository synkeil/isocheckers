$(function () {
    
    function extend(Child, Parent) {
        var Temp = function () {};
        Temp.prototype = Parent.prototype;
        Child.prototype = new Temp();
        Child.prototype.constructor = Child;
    }

    function Character() {
        this.health = 0;
        this.mana = 0;
        this.skills = "";
        this.xp = 0;
    }
    var Skull = new Character();
    Skull.health = 100;
    Skull.mana = 250;
    Skull.xp = 0;
    
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
   
    function HealthBar(elem) {
        setHeight(elem, 15);
        setWidth(elem, Skull.health);
        setFill(elem, "#f55");
    }
    function ManaBar(elem) {
        setHeight(elem, 15);
        setWidth(elem, Skull.mana);
        setFill(elem, "#55b1ff");
        setY(elem, "11%");
    }
    
    function XpTxt(elem) {
        setY(elem, "32%");
        $(elem).html(function () {
            return Skull.xp + "/150 xp<span>";
        });
    }
    
    XpTxt($('#xpText'));
    HealthBar($('#healthBar'));
    ManaBar($('#manaBar'));
    
    
    
    
    
});