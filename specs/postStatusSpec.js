describe('Post Status', function() {
  var view, $el, collection;

  beforeEach(function() {
    $el = $("<form><textarea>See, it's not so hard!</textarea></form>");
    collection = new (Backbone.Collection.extend({ localStorage: new Backbone.LocalStorage('coll') }));
    localStorage.clear();

    view = new Monologue.View.PostStatus({el: $el, collection: collection});
  });

  describe("submitting the form", function() {
    it("creates status when submitting the form", function() {
      $el.trigger('submit');
      expect(collection.length).toBe(1);
    });

    it("clears the form", function() {
      $el.trigger('submit');
      expect($el.find('textarea').val()).toEqual('');
    });
  });
});
