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
    var bird = new Character();
    bird.health = 100;
    bird.mana = 250;
    bird.xp = 0;
});