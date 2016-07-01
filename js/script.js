$(function () {
    //adding selected class on click
    $(".popper_prime").click(function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    });

    //initiating the chars
    var bird = false;
    var sinkeil = false;
    var Slct = "";

    //activating the bird
    $('#birdskull').click(function () {
        sinkeil = false;
        bird = true;
        console.log(bird);
    });

    //activating the keil
    $('#sinkeil').click(function () {
        bird = false;
        sinkeil = true;
        console.log(sinkeil);
    });

//  defining wich character is selected
    function charslct() {
        if (bird == true) {
            Slct = "url(svg/birdskull.svg)";
        } else {
            if (sinkeil == true) {
                Slct = "url(svg/sinkeil.svg)";
            } else {
                Slct = "url(svg/pointer_hover.svg)";
            }
        }
    }

    //show the selected char on hover
    $('.popper_prime').mouseenter(function () {
        charslct();
        $('.support', this).attr({
            style: "content:" + Slct + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(2%) translateZ(0px);"
        });
    });
    //manage the tile's state on mouse out
    $('.popper_prime').mouseleave(function () {
        
        if ($(this).hasClass('selected')) {
            $('.support', this).attr({
                style: "content:" + Slct + ";"
            });
        } else {
            $('.support', this).attr({
                style: "content:'';"
            });
        }

    });

    //Set the character selected on the clicked tile
    $('.popper_prime').click(function () {
        charslct();
        $('.support', this).attr({
            style: "content:" + Slct + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(2%) translateZ(0px);"
        });
    });
    charslct();
});