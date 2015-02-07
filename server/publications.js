Meteor.publish('todos', function() {
	var currentUserId = this.userId;
	return Todos.find({userId: currentUserId});
});