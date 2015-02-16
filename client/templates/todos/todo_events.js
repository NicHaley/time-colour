Template.todoList.events = {
	'click .new-todo': function (e) {
	    $('.todo-form').children('input').val('')
	    $('.todo-form').show();
	}
};