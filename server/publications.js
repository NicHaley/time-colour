Meteor.publish('todos', function() {

	// Assign current user to a variable
	var currentUserId = this.userId;

	// Publish todos where the Todo userId attribtue is equal to the currentUserId
	return Todos.find({userId: currentUserId});
});