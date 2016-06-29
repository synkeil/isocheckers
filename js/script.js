$(function () {


    //initiating the chars
    var bird = false;
    var sinkeil = false;
    var Switched = 0;
    var Slct = "";
    var Url = ["url(svg/pointer_hover.svg)", "url(svg/birdskull.svg)", "url(svg/sinkeil.svg)"];

    var Sync = true;

    //checking if the selected element is the same as the hovered tile's content
    function synCheck(elem) {
        console.log("sinkeil " + sinkeil);
        console.log("bird " + bird);
        if ($(elem).hasClass('selected')) {
            if (($(elem).hasClass('bird') && bird == true) || ($(elem).hasClass('sinkeil') && sinkeil == true) || ((bird == false && sinkeil == false) && $(elem).hasClass('pointer'))) {
                Sync = true;
            } else {
                Sync = false;
            }
        } else {
            Sync = true;
        }
    }


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
    //        function CharOnClick(elem) {
    //            console.log(Switched);
    //            if ($(elem).hasClass('selected')) {
    //                if (Switched == 1) {
    //                    $(elem).addClass('bird');
    //                    $(elem).removeClass('sinkeil');
    //                    $(elem).removeClass('pointer');
    //    
    //                } else {
    //                    if (Switched == 2) {
    //                        $(elem).addClass('sinkeil');
    //                        $(elem).removeClass('bird');
    //                        $(elem).removeClass('pointer');
    //    
    //                    } else {
    //                        $(elem).addClass('pointer');
    //                    }
    //                }
    //            } else {
    //                    if (Switched == 1) {
    //                        $(elem).removeClass('bird');
    //                    } else {
    //                        if (Switched == 2) {
    //                            $(elem).removeClass('sinkeil');
    //                        } else {
    //                            $(elem).removeClass('pointer');
    //                        }
    //                    }
    //                }
    //            }

    function CharOnClick(elem) {
        if ($(elem).hasClass('selected') && Sync == true) {
            if (Switched == 1) {
                $(elem).removeClass('bird');
            } else {
                if (Switched == 2) {
                    $(elem).removeClass('sinkeil');
                } else {
                    $(elem).removeClass('pointer');
                }
            }
        } else {
            if ($(elem).hasClass('selected')) {
                return;
            } else {
                if (Switched == 1) {
                    $(elem).addClass('bird');
                } else {
                    if (Switched == 2) {
                        $(elem).addClass('sinkeil');
                    } else {
                        $(elem).addClass('pointer');
                    }
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


    //adding selected class on click
    //    $(".popper_prime").click(function () {
    //            CharOnClick();
    //            charslct();
    //        if ($(this).hasClass('selected')) {
    //            if (Sync == false) {
    //                return;
    //            } else {
    //                $(this).removeClass('selected');
    //            }
    //        } else {
    //            $(this).addClass('selected');
    //        }
    //    });

    $(".popper_prime").click(function () {
        CharOnClick();
        charslct();
        if ($(this).hasClass('selected') && Sync == true) {
            $(this).removeClass('selected');
        } else {
            if ($(this).hasClass('selected')) {
                return;
            } else {
                $(this).addClass('selected');
            }
        }
    });


    //Set the character selected on the clicked tile
    $('.popper_prime').click(function () {
        synCheck(this);
        CharOnClick(this);
        charslct();
        if (Sync == false) {
            return;
        } else {
            $('.support', this).attr({
                style: "content:" + Slct + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(0%) translateZ(0px);"
            })
        }
        console.log(Sync);


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
        console.log("Sync " + Sync);

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


    charslct();
});