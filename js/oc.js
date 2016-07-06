$(function () {
    function sID(id) {
        return document.getElementById(id);
    }

    function Rectangle() {
        this.x: 0;
        this.y: 0;
        this.width: 0;
        this.height: 0;
        this.fill: '#000000';
        this.stroke: '#000000';
        this.strokeWidth: 0;
        this.strokeDashArray: 0;
        this.strokeDashOffset: 0;
    }
    var Ellipse = {
        cx: 0
        , cy: 0
        , rx: 0
        , ry: 0
        , fill: '#000000'
        , stroke: '#000000'
        , strokeWidth: 0
        , strokeDashArray: 0
        , strokeDashOffset: 0
    };
    var Circle = {
        cx: 0
        , cy: 0
        , rx: 0
        , ry: 0
        , fill: '#000000'
        , stroke: '#000000'
        , strokeWidth: 0
        , strokeDashArray: 0
        , strokeDashOffset: 0
    };
    var Path = {
        d: ""
        , fill: '#000000'
        , stroke: '#000000'
        , strokeWidth: 0
        , strokeDashArray: 0
        , strokeDashOffset: 0
    };
    //SVG attributes shorthand
    function setd(id, d) {
        "use strict";
        sID(id).setAttribute("d", d);
    }

    function setx(id, x) {
        "use strict";
        sID(id).setAttribute("x", x);
    }

    function sety(id, y) {
        "use strict";
        sID(id).setAttribute("y", y);
    }

    function setcy(id, cy) {
        "use strict";
        sID(id).setAttribute("cy", cy);
    }

    function setcx(id, cx) {
        "use strict";
        sID(id).setAttribute("cx", cx);
    }

    function setr(id, r) {
        "use strict";
        sID(id).setAttribute("r", r);
    }

    function setrx(id, rx) {
        "use strict";
        sID(id).setAttribute("rx", rx);
    }

    function setry(id, ry) {
        "use strict";
        sID(id).setAttribute("ry", ry);
    }

    function setheight(id, height) {
        "use strict";
        sID(id).setAttribute("height", height);
    }

    function setwidth(id, width) {
        "use strict";
        sID(id).setAttribute("width", width);
    }

    function setfill(id, fill) {
        "use strict";
        sID(id).setAttribute("fill", fill);
    }

    function setstroke(id, stroke) {
        "use strict";
        sID(id).setAttribute("stroke", stroke);
    }

    function setstrokewidth(id, strokewidth) {
        "use strict";
        sID(id).setAttribute("stroke-width", strokewidth);
    }

    function setstrokedasharray(id, strokedasharray) {
        "use strict";
        sID(id).setAttribute("stroke-dasharray", strokedasharray);
    }

    function setstrokedashoffset(id, strokedashoffset) {
        "use strict";
        sID(id).setAttribute("stroke-dashoffset", strokedashoffset);
    }
});