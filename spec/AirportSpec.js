describe ('Airport', function() {
  var airport;

  it('should have no planes when created', function() {
    airport = new Airport();
    expect(airport.planes).toEqual([]);
  });

  it('should be able to accept a plane', function() {
    plane = new Plane();
    plane.land();
    airport.park(plane);
    expect(airport.planes).toEqual([plane]);
  });

});