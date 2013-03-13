Monologue.View.PostStatus = Backbone.View.extend({
  events: {
    'submit' : 'submit'
  },
  submit: function(e) {
    e.preventDefault();
    var $input = this.$el.find('textarea');
    this.collection.create({text: $input.val()});
    $input.val('');
    return false;
  }
});
