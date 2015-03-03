describe ('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('should have no planes when created', function() {
    expect(airport.planes).toEqual([]);
  });

  it('should be able to accept a plane', function() {
    plane.land();
    airport.park(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it('should be able to release a plane', function() {
    plane.land();
    airport.park(plane);
    airport.takeOff(plane);
    expect(airport.planes).toEqual([]);
  });

});