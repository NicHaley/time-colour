Template.todoEdit.events({
	'keyup .submitEdit': function(event, template) {
		event.preventDefault();

		var currentTodoId = this._id;

		var $body = template.find(".body", this).value;
		var $time = template.find(".time", this).value;

		var todo = {
			body: $body,
			time: $time
		};

		Todos.update(currentTodoId, {$set: todo});
	}
});