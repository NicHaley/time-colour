Todos = new Mongo.Collection('todos');

// Define a todoInsert Meteor.method
Meteor.methods({

	todoInsert: function(todoAttributes) {

		// Check that the currentUserId and body are strings (ie. legit)
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