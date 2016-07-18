$(function () {
  var birdUrl = "svg/birdskull.svg",
    sinkeilUrl = "svg/sinkeil.svg",
    pointerUrl = "svg/pointer_hover.svg",
    gridTab = [];


  /* spawning tiles and mobs */
  function spawnTile() {
    return $('.support').eq(minMax(1, 24));
  }

  function spawn(monster) {
    spawnTile().html("<img src=" + monster + " alt='Monster'/>");
  }

  /*Creating the grid on load*/
  function builder() {
    var i;
    for (i = 0; i < 64; i++) {
      gridTab[i] = 0;
      console.log(gridTab[i]);
      $('#grid').append('<div class="popper_prime"><div class="popper support"></div><div class="popper pop_main pop_main_light"></div><div class="popper pop1"></div><div class="popper pop2"></div><div class="popper pop3"></div></div>');
    }
  }

  builder;
  spawn(birdUrl);
  spawn(birdUrl);
  spawn(sinkeilUrl);
  spawn(sinkeilUrl);
  spawn(birdUrl);

});