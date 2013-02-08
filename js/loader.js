// Thanks to David Hellsing at http://monc.se/kitchen/  for the gallery code

var gal = {
    init : function() {
        if (!document.getElementById || !document.createElement || !document.appendChild) return false;
        if (document.getElementById('gallery')) document.getElementById('gallery').id = 'jgal'; 
                
    },
    addEvent : function(obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        }
        else if (obj.attachEvent) {
            obj["e"+type+fn] = fn;
            obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
            obj.attachEvent("on"+type, obj[type+fn]);
        }
    }
}

gal.addEvent(window,'load', function() {
    gal.init();
});