(function($) {

//Simple Form Validation
$(document).ready(function() {
  $("#form").submit(function(e){
  	e.preventDefault();
  	var name = $('#userName').val();
    var bosted = $('#userBosted').val();
    var mobile = $('#telephone').val();
    $('.error').remove();
  	if (name.length < 12) {
  		$('#userName').after('<span class="error">This field is required</span>');
  	}
    if (bosted.length < 12) {
      $('#userBosted').after('<span class="error">This field is required</span>');
    }
    if (mobile.length < 10) {
      $('#telephone').after('<span class="error">This field is required</span>');
    }
  });
});

})(jQuery);