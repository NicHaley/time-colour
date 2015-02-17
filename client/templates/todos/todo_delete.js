Template.todoEdit.events({
	
	'click .delete': function(e) {
		e.preventDefault();

		var currentTodoId = this._id;

		$(event.target).closest('.todo-form-edit').addClass('active');

		Meteor.setTimeout(function(){
			Todos.remove(currentTodoId);
		}, 1000);
	}
});

