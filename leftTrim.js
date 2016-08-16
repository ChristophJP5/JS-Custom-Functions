String.prototype.leftTrim = function (a) {
    var reg = new RegExp('^' + a + '+')
    return this.replace(reg, "");
}
