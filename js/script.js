$(function () {
    //initiating the chars
    var bird,
        sinkeil = false,
        Switched = 0,
        charClass = ["pointer", "bird", "sinkeil"],
        Url = ["url(svg/pointer_hover.svg)", "url(svg/birdskull.svg)", "url(svg/sinkeil.svg)"],
        Slct = charClass[Switched],
        Sync = true,
        count = 0,
        Panel = ["#panel1", "#panel2", "#panel3"];
    //setting the switch depending on the selected char
    function Switch() {
        if (bird === true) {
            Switched = 1;
        } else if (sinkeil === true) {
            Switched = 2;
        } else {
            Switched = 0;
        }
    }
    //checking if the selected element is the same as the hovered tile's content
    function synCheck(elem) {
        Switch();
        if ($(elem).hasClass('selected')) {
            if (($(elem).hasClass('bird') && bird === true) || ($(elem).hasClass('sinkeil') && sinkeil === true) || (Switched === 0)) {
                Sync = true;
            } else {
                Sync = false;
            }
        } else {
            Sync = true;
        }
    }
    //adding class representing selected char on click
    function CharOnClick(elem) {
        if ($(elem).hasClass('selected') && (Sync === true)) {
            $(elem).addClass(charClass[Switched]);
        } else {
            if ($(elem).hasClass('selected')) {
                return;
            } else {
                $(elem).removeClass(charClass[Switched]);
            }
        }
    }
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
    $(".popper_prime").click(function () {
        synCheck(this);
        CharOnClick(this);
        if ($(this).hasClass('selected') && Sync === true) {
            $(this).removeClass(charClass[Switched]);
            $(this).removeClass('selected');
        } else {
            if ($(this).hasClass('selected')) {
                return;
            } else {
                $(this).addClass(charClass[Switched]);
                $(this).addClass('selected');
            }
        }
    });
    //Set the character selected on the clicked tile
    $('.popper_prime').click(function () {
        synCheck(this);
        CharOnClick(this);
        if (Sync === false) {
            return;
        } else {
            $('.support', this).attr({
                style: "content:" + Url[Switched] + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(0%) translateZ(0px);"
            });
        }
    });
    //show the selected char on hover
    $('.popper_prime').mouseenter(function () {
        synCheck(this);
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
                style: "content:" + Url[Switched] + ";transform:rotateX(-50deg) rotateY(40deg) rotateZ(-30deg) translateY(-60%) translateX(0%) translateZ(45px);"
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
    //start the count
    
    $('#panelButton1').click(function () {
        count = 0;
    });
    $('#panelButton2').click(function () {
        count = 1;
    });
    $('#panelButton3').click(function () {
        count = 2;
    });
    //cicle the counter to get the previous pannel
    $('#prev').click(function () {
        if (count > 0) {
            count--;
        } else {
            count = (Panel.length - 1);
        }
        $(this).attr("href", Panel[count]);
    });
    //cicle the counter to get the next pannel
    $('#next').click(function () {
        if (count < (Panel.length - 1)) {
            count++;
        } else {
            count = 0;
        }
        $(this).attr("href", Panel[count]);
    });
});