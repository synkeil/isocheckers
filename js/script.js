$(function () {
            $(".pop_main").click(function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                } else {
                    $(this).addClass('selected');
                }
            });

            var bird = false;
            var sinkeil = false;

            $('#birdskull').click(function () {
                bird = true;
                console.log(bird);
            });
            console.log(bird);

            $('#sinkeil').click(function () {
                sinkeil = true;
                console.log(sinkeil);
            });
            console.log(sinkeil);


            //
            //$('.popper_prime').hover(function(){
            //    $(this '> .pop_main').css('content','url(svg/birdskull.svg)');
          });