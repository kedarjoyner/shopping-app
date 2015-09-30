/* This is my interactive shopping 
list app developed as an assignment 
through Thinkful.com. My shopping
list app allows users to add items
to a list, and check them off or 
delete them as they aquire 
each item. */

$(document).ready(function() {
	/*$('.form-submit').on('click', function(event) {
		var input = ()*/

	$('.reset-button').click(function() {
		//alert('Test');
		//$('.items').empty(); //empty's all children
		$('li').remove(); //removes all classes that match li
	});

	$('.form-submit').click(function() {
		//alert('Test');
		var input = $('.enter-item').val();//current value that user inputed in text box
		$('.items').prepend('<li>' + input + '<span class="icons"><a href="#" class="unchecked-box"><i class="fa fa-square-o"></i></a><a href="#" class="delete-circle"><i class="fa fa-minus-circle"></i></a></span></li>');
		$('.enter-item').val('');//setting input to blank
	});

	$('.items').on('click', '.delete-circle', function() { 
		//alert('test');
		$(this).closest('li').remove(); //find 'this' object. find closest list element
	});

	$('.items').on('click', '.unchecked-box', function() {
		//alert('test');

	});
})

