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
    var Switched = 0;
    var Slct = "";
    var Url = ["url(svg/pointer_hover.svg)", "url(svg/birdskull.svg)", "url(svg/sinkeil.svg)"];

    //setting the switch depending on the selected char
    function Switch() {
        if (bird == true) {
            Switched = 1;
        } else {
            if (sinkeil == true) {
                Switched = 2;
            } else {
                Switched = 0;
            }
        }
    }

    //adding class representing selected char on click
    function CharOnClick(elem) {
        console.log(Switched);
        if ($(elem).hasClass('selected')) {
            if (Switched == 1) {
                $(elem).addClass('bird');
                $(elem).removeClass('sinkeil');
                $(elem).removeClass('pointer');

            } else {
                if (Switched == 2) {
                    $(elem).addClass('sinkeil');
                    $(elem).removeClass('bird');
                    $(elem).removeClass('pointer');

                } else {
                    $(elem).addClass('pointer');
                }
            }
        } else {
            if (Switched == 1) {
                $(elem).removeClass('bird');
            } else {
                if (Switched == 2) {
                    $(elem).removeClass('sinkeil');
                } else {
                    $(elem).removeClass('pointer');
                }
            }
        }
    }




    //defining wich character is selected
    function charslct() {
        if (Switched == 1) {
            Slct = "url(svg/birdskull.svg)"
        } else {
            if (Switched == 2) {
                Slct = "url(svg/sinkeil.svg)"
            } else {
                Slct = "url(svg/pointer_hover.svg)"
            }
        }
    };


    //activating the bird
    $('#birdskull').click(function () {
        sinkeil = false;
        bird = true;
        Switch();
    });

    //activating the keil
    $('#sinkeil').click(function () {
        bird = false;
        sinkeil = true;
        Switch();
    });


    //show the selected char on hover
    $('.popper_prime').mouseenter(function () {
        charslct();
        if ($(this).hasClass('selected')) {
            if ($(this).hasClass('bird')) {
                $('.support', this).attr({
                    style: "content:" + Url[1] + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(0%) translateZ(45px);"
                });
            } else {
                if ($(this).hasClass('sinkeil')) {
                    $('.support', this).attr({
                        style: "content:" + Url[2] + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(0%) translateZ(45px);"
                    });
                } else {
                    $('.support', this).attr({
                        style: "content:" + Url[0] + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(0%) translateZ(45px);"
                    });
                }
            }
        } else {
            $('.support', this).attr({
                style: "content:" + Slct + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(0%) translateZ(45px);"
            });
        }

    });
    //manage the tile's state on mouse out
    $('.popper_prime').mouseleave(function () {
        if ($(this).hasClass('selected')) {
            if ($(this).hasClass('bird')) {
                $('.support', this).attr({
                    style: "content:" + Url[1] + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-30%) translateX(0%) translateZ(0px);"
                });
            } else {
                if ($(this).hasClass('sinkeil')) {
                    $('.support', this).attr({
                        style: "content:" + Url[2] + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-30%) translateX(0%) translateZ(0px);"
                    });
                } else {
                    $('.support', this).attr({
                        style: "content:" + Url[0] + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-30%) translateX(0%) translateZ(0px);"
                    });
                }
            }

        } else {
            $('.support', this).attr({
                style: "content:'';transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-30%) translateX(0%) translateZ(0px);"
            });
        }

    });

    //Set the character selected on the clicked tile
    $('.popper_prime').click(function () {
        CharOnClick(this);
        charslct();
        $('.support', this).attr({
            style: "content:" + Slct + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(0%) translateZ(0px);"
        })
    });
    charslct();
});