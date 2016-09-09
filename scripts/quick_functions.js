String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};