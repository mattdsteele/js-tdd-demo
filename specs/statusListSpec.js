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

  it('renders when collection is reset', function() {
    collection.reset([{text: 'Reset text'}]);
    var $li = $el.find('li');
    expect($li.length).toBe(1);
    expect($li.text()).toEqual('Reset text');
  });

  it('displays newly added elements', function() {
    collection.add({text: 'Added text'});
    var $li = $el.find('li');
    expect($li.length).toBe(1);
    expect($li.text()).toEqual('Added text');
  });
});
