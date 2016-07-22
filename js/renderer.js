var aoe = false,
  singleTarget = true,
  skillSwitch = false;

var pos, count;

var skillTab = ["svg/aoeSlider.svg", "svg/aoeSliderAlternative.svg", "svg/slider.svg", "svg/sinkeil.svg"];

/***************
  SVG settings
***************/
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

/*Toggling between area of dammage*/
$('#aoe_activation').click(function () {
  aoe = true;
  singleTarget = false;
});
$('#single_activation').click(function () {
  aoe = false;
  singleTarget = true;
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



/* spawning tiles and mobs */

var map = new Map();

function draw() {
  for (var z = 0; z < map.gridTab.length; ++z) {
    if (map.gridTab[z] != 0) {
      $('.support').eq(z).html("<img src=" + map.gridTab[z].url + " alt='Monster'/>");
    }
  }
}

function XpTxt(elem) {
  if (map.selectedFoe >= 0) {
    $(elem).html(function () {
      return map.gridTab[map.selectedFoe].xp + "/150 xp";
    });
  }
}

function MobName(elem) {
  if (map.selectedFoe >= 0) {
    $(elem).html(function () {
      return map.gridTab[map.selectedFoe].name;
    });
  }
}


function HealthBar(elem) {
  if (map.selectedFoe >= 0) {
    setHeight(elem, 25);
    setWidth(elem, map.gridTab[map.selectedFoe].currentHealth);
    setFill(elem, "#f55");
  }
}

function ManaBar(elem) {
  if (map.selectedFoe >= 0) {
    setHeight(elem, 25);
    setWidth(elem, map.gridTab[map.selectedFoe].currentMana);
    setFill(elem, "#55b1ff");
  }
}

function setTextHealth(elem) {
  if (map.selectedFoe >= 0) {
    $(elem).html(function () {
      return map.gridTab[map.selectedFoe].currentHealth + " / " + map.gridTab[map.selectedFoe].maxHealth + " HP";
    });
  }
}
setTextHealth($('#char_healthText'));
setTextHealth($('#enemy_healthText'));

function setTextMana(elem) {
  if (map.selectedFoe >= 0) {
    $(elem).html(function () {
      return map.gridTab[map.selectedFoe].currentMana + " / " + map.gridTab[map.selectedFoe].maxMana + " MP";
    });
  }
}
setTextMana($('#char_manaText'));
setTextMana($('#enemy_manaText'));

$(document).on('click', '.skill', function () {
  skillSwitch = true;
  count = $(this).index();
});


$(document).on('mousemove', function (e) {
  if (skillSwitch === true) {
    $('#follow').html('<img src="' + skillTab[count] + '" alt="">');
    $('#follow').css({
      left: e.pageX,
      top: e.pageY
    });
  }
});

/*******************
  combat interface
*******************/

$(document).on('click', '.popper_prime', function () {
  if (map.gridTab[$(this).index()] != 0) {
    map.selectedFoe = $(this).index();
    if (skillSwitch === true) {
      map.gridTab[$(this).index()].currentHealth = (map.gridTab[$(this).index()].currentHealth - (map.gridTab[$(this).index()].Skills[count].power * map.gridTab[$(this).index()].mAtk));
      skillSwitch = false;
      $('#follow').html("");
    }
  }
  XpTxt($('#enemy_xpText'));
  HealthBar($('#enemy_healthBar'));
  ManaBar($('#enemy_manaBar'));
  setTextHealth($('#enemy_healthText'));
  setTextMana($('#enemy_manaText'));
  MobName($('#enemyName'));
  console.log(map.gridTab[$(this).index()]);

});

map.tabInit();
map.tabMultiInit();
map.builder();
map.spork();
draw();
console.log(Skull());
console.log(map.gridTabMulti[0][0]);