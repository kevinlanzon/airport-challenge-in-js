var Airport = function() {
  this.planes = [];
};

Airport.prototype.planes = function() {
  this.planeCount = [];
};

Airport.prototype.park = function(plane) {
  this.planes.push(plane)
};