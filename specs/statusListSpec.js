describe("Status List", function() {
  var view, $el, collection;

  beforeEach(function() {
    $el = $('<div />');
    collection = new (Backbone.Collection.extend({ localStorage: new Backbone.LocalStorage('coll') }));
    localStorage.clear();

    view = new Monologue.View.StatusList({el: $el, collection: collection});
  });

  it('fetches records from the server', function() {
    expect(collection.length).toBe(0);
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
