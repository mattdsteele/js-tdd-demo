describe("statuses", function() {
  var statuses;
  beforeEach(function() {
  statuses = new Monologue.Collection.Statuses();
  });

  it('has a Status as its model', function() {
    expect(statuses.model).toEqual(Monologue.Model.Status);
  });

  describe('local storage', function() {
    it('uses localStorage', function() {
      expect(statuses.localStorage).toBeDefined();
    });
    it('sync to a Backbone LS called "statuses"', function() {
      var ls = statuses.localStorage;
      expect(ls.name).toEqual('Statuses');
    });
  });
});
