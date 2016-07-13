$(function () {
  var aoe = false,
    singleTarget = true,
    pos,
    Temp,
    birdUrl = "svg/birdskull.svg",
    sinkeilUrl = "svg/sinkeil.svg",
    pointerUrl = "svg/pointer_hover.svg",
    tempRand = 0,
    minMaxRand,
    gridTab = [];

  /*******************
  character management
  *******************/

  function minMax(min, max) {
    minMaxRand = (Math.random() * (max - min) + min).toFixed(0);
    while (gridTab[minMaxRand] === 1) {
      minMaxRand = (Math.random() * (max - min) + min).toFixed(0);
    }
    gridTab[minMaxRand] = 1;
    return minMaxRand;
  }




  function extend(Child, Parent) {
    Temp = function () {};
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


  function setD(elem, d) {
    $(elem).attr("d", d);
  }

  function setX(elem, x) {
    $(elem).attr("x", x);
  }

  function setY(elem, y) {
    $(elem).attr("y", y);
  }

  function setCy(elem, cy) {
    $(elem).attr("cy", cy);
  }

  function setCx(elem, cx) {
    $(elem).attr("cx", cx);
  }

  function setR(elem, r) {
    $(elem).attr("r", r);
  }

  function setRx(elem, rx) {
    $(elem).attr("rx", rx);
  }

  function setRy(elem, ry) {
    $(elem).attr("ry", ry);
  }

  function setHeight(elem, height) {
    $(elem).attr("height", height);
  }

  function setWidth(elem, width) {
    $(elem).attr("width", width);
  }

  function setFill(elem, fill) {
    $(elem).attr("fill", fill);
  }

  function setStroke(elem, stroke) {
    $(elem).attr("stroke", stroke);
  }

  function setStrokewidth(elem, strokewidth) {
    $(elem).attr("stroke-width", strokewidth);
  }

  function setStrokedasharray(elem, strokedasharray) {
    $(elem).attr("stroke-dasharray", strokedasharray);
  }

  function setStrokedashoffset(elem, strokedashoffset) {
    $(elem).attr("stroke-dashoffset", strokedashoffset);
  }

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

  /*****************
  Managing the world
  *****************/


  /*AOE hover effect*/
  function aoeMain() {
    return $('.pop_main:eq(' + pos + '), .pop_main:eq(' + (pos + 1) + '), .pop_main:eq(' + (pos - 1) + '),.pop_main:eq(' + (pos + 8) + '),.pop_main:eq(' + (pos - 8) + ')');
  }

  function aoePop1() {
    return $('.pop1:eq(' + pos + '), .pop1:eq(' + (pos + 1) + '), .pop1:eq(' + (pos - 1) + '),.pop1:eq(' + (pos + 8) + '),.pop1:eq(' + (pos - 8) + ')');
  }

  function aoePop2() {
    return $('.pop2:eq(' + pos + '), .pop2:eq(' + (pos + 1) + '), .pop2:eq(' + (pos - 1) + '),.pop2:eq(' + (pos + 8) + '),.pop2:eq(' + (pos - 8) + ')');
  }

  function aoePop3() {
    return $('.pop3:eq(' + pos + '), .pop3:eq(' + (pos + 1) + '), .pop3:eq(' + (pos - 1) + '),.pop3:eq(' + (pos + 8) + '),.pop3:eq(' + (pos - 8) + ')');
  }

  function aoeSupport() {
    return $('.support:eq(' + pos + '), .support:eq(' + (pos + 1) + '), .support:eq(' + (pos - 1) + '),.support:eq(' + (pos + 8) + '),.support:eq(' + (pos - 8) + ')');
  }

  /*Single target hover effect*/

  function singleMain() {
    return $('.pop_main').eq(pos);
  }

  function singlePop1() {
    return $('.pop1').eq(pos);
  }

  function singlePop2() {
    return $('.pop2').eq(pos);
  }

  function singlePop3() {
    return $('.pop3').eq(pos);
  }

  function singleSupport() {
    return $('.support').eq(pos);
  }


  function spawnTile() {
    return $('.support').eq(minMax(1, 24));

  }

  function spawn(monster) {
    spawnTile().html("<img src=" + monster + " alt='Monster'/>");
    console.log(minMaxRand);
  }

  /*Toggling between area of dammage*/
  $('#aoe_activation').click(function () {
    aoe = true;
    singleTarget = false;
  });
  $('#single_activation').click(function () {
    aoe = false;
    singleTarget = true;
  });



  /*Creating the grid on load*/
  $(document).ready(function () {
    var i;
    for (i = 0; i < 64; i++) {
      gridTab[i] = 0;
      $('#grid').append('<div class="popper_prime"><div class="popper support"></div><div class="popper pop_main pop_main_light"></div><div class="popper pop1"></div><div class="popper pop2"></div><div class="popper pop3"></div></div>');
    }
    spawn(birdUrl);
    spawn(birdUrl);
    spawn(sinkeilUrl);
    spawn(sinkeilUrl);
    spawn(sinkeilUrl);
    spawn(birdUrl);
    spawn(birdUrl);

  });


  /*bump on mouse enter*/
  $(document).on("mouseenter", ".popper_prime", function () {
    pos = $('.popper_prime').index($(this));
    if (aoe === true) {
      aoeMain().addClass('activate_pop_main');
      aoePop1().addClass('activate_pop1');
      aoePop2().addClass('activate_pop2');
      aoePop3().addClass('activate_pop3');
      aoeSupport().addClass('activate_support');
    } else {
      singleMain().addClass('activate_pop_main');
      singlePop1().addClass('activate_pop1');
      singlePop2().addClass('activate_pop2');
      singlePop3().addClass('activate_pop3');
      singleSupport().addClass('activate_support');
    }

  });

  /*pop reset on mouseout*/
  $(document).on("mouseleave", ".popper_prime", function () {
    pos = $('.popper_prime').index($(this));
    if (aoe === true) {
      aoeMain().removeClass('activate_pop_main');
      aoePop1().removeClass('activate_pop1');
      aoePop2().removeClass('activate_pop2');
      aoePop3().removeClass('activate_pop3');
      aoeSupport().removeClass('activate_support');
    } else {
      singleMain().removeClass('activate_pop_main');
      singlePop1().removeClass('activate_pop1');
      singlePop2().removeClass('activate_pop2');
      singlePop3().removeClass('activate_pop3');
      singleSupport().removeClass('activate_support');
    }


  });

});