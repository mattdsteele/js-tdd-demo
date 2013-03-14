var Statuses = function() {};
Statuses.prototype.add = function(options) {
  $.ajax({
    url: '/statuses',
    type: 'POST',
    dataType: 'json',
    data: { text: options.text },
    success: options.success
  });
};

jQuery(function($) {
  var statuses = new Statuses();
  $('form').on('submit', function() {
    statuses.add({
      text: $('textarea').val(),
      success: function(data) {
        $('#statuses').append('<li>' + data.text + '</li>');
      }
    });
    return false;
  });
});
