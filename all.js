// ucfirst.js
String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
// CSS.js
Element.prototype.CSS = function (prop) {
    var val = window.getComputedStyle(this, null).getPropertyValue(prop);
    var number = val.match(/[0-9]*(\.\d*)?/g).join("");
    if (number != "") {
        return parseInt(number);
    } else {
        return val;
    }
}
// leftTrim.js
String.prototype.leftTrim = function (a) {
    var reg = new RegExp('^' + a + '+')
    return this.replace(reg, "");
}
