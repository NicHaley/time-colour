Template.todoSubmit.events({
	'keypress #body': function(event, template) {
		if(event.which === 13) {
			event.preventDefault();

			var $body = template.find("#body").value;
			var todo = {
				body: $body
			};

			Meteor.call('todoInsert', todo);
			$('.todo-form').text();
			$('.todo-form').hide();
		}
	}
});
