Template.todoSubmit.events({
	'keypress .submit': function(event, template) {
		if(event.which === 13) {
			event.preventDefault();

			var $body = template.find("#body").value;
			var $time = template.find("#time").value;

			var todo = {
				body: $body,
				time: $time
			};

			Meteor.call('todoInsert', todo);
			$('.todo-form').children('input').val('');

			var todoContainer = $('.todo-display');
			todoContainer.animate({ scrollTop: todoContainer.prop("scrollHeight") - todoContainer.height() }, 750);
		}
	}
});
