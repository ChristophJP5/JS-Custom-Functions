// get calculated css property of an element like "padding-left"
Element.prototype.CSS = function (prop) {
    var val = window.getComputedStyle(this, null).getPropertyValue(prop);
    var number = val.match(/[0-9]*(\.\d*)?/g).join("");
    if (number != "") {
        return parseInt(number);
    } else {
        return val;
    }
}
