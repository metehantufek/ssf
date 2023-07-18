/*
Script Stylesheet Framework
Made By https://github.com/metehantufek
*/

Object.prototype.styleStatement = function(str) { 
    // Set an elements style with a CSS rule.
    var styleArray = str.replaceAll("\n", "").split(";");
    for (var i = 0; i < styleArray.length; i++) {
        var statement = styleArray[i].split(":");
        var key = statement[0];
        var value = statement[1];
        this.style[key] = value;
    }
}

function styleSelector(selector, str) { 
    // Get elements and apply their CSS rule by selector.
    var selectorStatement = document.querySelectorAll(selector);
    for (var i = 0; i < selectorStatement.length; i++) {
        selectorStatement[i].styleStatement(str);
    }   
}