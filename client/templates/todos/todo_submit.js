Template.todoSubmit.events({
	'submit form': function(event) {
		event.preventDefault();

		var $body = $(event.target).find('[name=body]');
		var todo = {
			body: $body.val(),
		};

		todo._id = Todos.insert(todo);
	}
});
