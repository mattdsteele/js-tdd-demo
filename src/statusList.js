Monologue.View.StatusList = Backbone.View.extend({
  initialize: function() {
    this.collection.fetch();
  }
});
