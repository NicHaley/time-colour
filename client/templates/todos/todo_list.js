Template.todoList.helpers({
	todos: function() {
		return Todos.find();
	}
});