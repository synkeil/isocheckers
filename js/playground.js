$(function () {
    var aoe = false,
        singleTarget = true,
        pos;

    
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
    $('#aoe_activation').click(function () {aoe = true, singleTarget = false});
    $('#single_activation').click(function () {aoe = false, singleTarget = true});

    
    
    /*Creating the grid on load*/
    $(document).ready(function () {
        var i;
        for (i = 0; i < 64; i++) {
            $('#grid').append('<div class="popper_prime"><div class="popper support"></div><div class="popper pop_main pop_main_light"></div><div class="popper pop1"></div><div class="popper pop2"></div><div class="popper pop3"></div></div>');
        }
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