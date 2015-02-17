Template.todoEdit.events({
	'keyup .body': function(event, template) {
		event.preventDefault();

		var currentTodoId = this._id;

		var $body = template.find(".body", this).value;
		var todo = {
			body: $body
		};

		Todos.update(currentTodoId, {$set: todo});
	}
});