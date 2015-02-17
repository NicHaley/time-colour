Template.todoEdit.events({
	'keypress .body': function(event, template) {
		if(event.which === 13) {
			event.preventDefault();

			var currentTodoId = this._id;

			var $body = template.find(".body", this).value;
			var todo = {
				body: $body
			};

			Todos.update(currentTodoId, {$set: todo});
		}
	}
});