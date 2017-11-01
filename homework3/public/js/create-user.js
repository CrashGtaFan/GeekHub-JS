;(function(){

  var createUserFrom = jQuery('#create-user');

  createUserFrom.on('submit', function (event) {
    event.preventDefault();
  
    jQuery.ajax({
      method: 'POST',
      url: '/create-user',
      data: createUserFrom.serialize(),
      success: function (result) {
        result;
      },
      error: function (error) {
        error;
      }
    })
  });
})();
