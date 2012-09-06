describe("statuses", function() {
  var statuses;
  beforeEach(function() {
  statuses = new Monologue.Collection.Statuses();
  });

  it('has a Status as its model', function() {
    expect(statuses.model).toEqual(Monologue.Model.Status);
  });

  it('has its root URL as /statuses', function() {
    expect(statuses.url).toEqual('/statuses');
  });
});
