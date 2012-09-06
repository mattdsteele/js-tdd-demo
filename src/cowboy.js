jQuery(function($) {
  $('form').on('submit', function() {
    $.ajax({
      url: '/statuses',
    type: 'POST',
    dataType: 'json',
    data: {text: $(this).find('textarea').val()},
    success: function(data) {
      $('#statuses').append('<li>' + data.text + '</li>');
    }
    });
    return false;
  });

  $.ajax({
    url: '/statuses',
    dataType: 'json',
    success: function(data) {
      var $statuses = $('#statuses');
      for(var i = 0; data.length > i; i++) {
        $statuses.append('<li>' + data[i].text + '</li>');
      }
    }
  })
});
