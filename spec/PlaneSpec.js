describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();

  });

  it('should be in the air when created', function() {
    expect(plane.isFlying).toBe(true);
  });

  it('should be able to land', function(){
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it('should be able to takeoff', function(){
    plane.land();
    plane.takeOff();
    expect(plane.isFlying).toBe(true);
  });

});