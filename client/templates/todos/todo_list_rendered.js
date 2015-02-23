Template.todoList.rendered = function() {

	Meteor.setTimeout(function() {
		var todoContainer = $('.todo-display');
		todoContainer.animate({ scrollTop: todoContainer.prop("scrollHeight") - todoContainer.height() }, 1500);
	}, 1000);
}