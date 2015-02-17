Template.todoList.helpers({
	todos: function() {
		return Todos.find({}, {sort: {submitted: -1}});
	}
});
