Todos = new Mongo.Collection('todos');

Meteor.methods({

	todoInsert: function(todoAttributes) {
		check(Meteor.userId(), String);
		check(todoAttributes, {
			body: String
		});

		var user = Meteor.user();

		// Assign a user and submission date to todo insert
		var todo = _.extend(todoAttributes, {

			userId: user._id,
			submitted: new Date()

		});

		var todoId = Todos.insert(todo);
	}
});