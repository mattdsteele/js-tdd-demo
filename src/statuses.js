Monologue.Collection.Statuses = Backbone.Collection.extend({
  model: Monologue.Model.Status,
  localStorage: new Backbone.LocalStorage('Statuses')
});
