var i, k,minMaxRand;
var voyelle,consonne = [];

voyelle = ["a", "e", "i", "o", "u", "y"];
consonne = ['b', 'c', 'd', 'f', 'g', 'h','j' , 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

function minMax(min, max) {
    minMaxRand = (Math.random() * (max - min) + min).toFixed(0);
    return minMaxRand;
 }
