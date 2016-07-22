var Map = function () {
  
  this.selectedFoe;

  this.gridTabMulti = [[], []];
  this.gridTab = [];

  this.builder = function () {
    var j = 0,b = 0;
    for (j = 0; j < this.gridTab.length; ++j) {
      $('#grid').append('<div class="popper_prime"><div class="popper support"></div><div class="popper pop_main pop_main_light"></div><div class="popper pop1"></div><div class="popper pop2"></div><div class="popper pop3"></div></div>');
    }
    for(b = 0; b < Skull().Skills.length; ++b){
      $('#skillBar').append('<div class="skill"><img src="' + Skull().Skills[b].url + '" alt="' + Skull().Skills[b].name + '" /></div>')
    }
  }

  this.tabInit = function () {
    var i;
    for (i = 0; i < 64; ++i) {
      this.gridTab[i] = 0;
    }
  }
  
  this.tabMultiInit = function() {
    var a,b = 0;
    for(a=0;a<8;++a){
      this.gridTabMulti[a] = new Array();
      for(b=0;b<8;++b){
        this.gridTabMulti[a][b] = b;
      }
    }
  }

  this.spork = function () {
    var l = 0;
    while (l < 5) {
      var temp = minMax(0, 23);
      if (this.gridTab[temp] === 0) {
        this.gridTab[temp] = Skull();
        ++l;
      }
    }
  }
}