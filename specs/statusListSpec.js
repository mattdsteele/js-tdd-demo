describe("Status List", function() {
  var view, $el, collection;

  beforeEach(function() {
    $el = $('<div />');
    collection = new (Backbone.Collection.extend({url: '/mock'}));
    spyOn(collection, 'fetch');

    view = new Monologue.View.StatusList({el: $el, collection: collection});
  });

  it('fetches records from the server', function() {
    expect(collection.fetch).toHaveBeenCalled();
  });
});
