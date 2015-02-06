Todos = new Mongo.Collection('todos');

Todos.allow({
		insert: function(userId, doc) {
		return !! userId;
	}
});