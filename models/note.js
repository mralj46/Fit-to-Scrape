
// require mongoose
var mongoose = require('mongoose');

// create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// create the headlineSchema with our schema class
var NoteSchema = new Schema({
	// headline, a string, must be entered
  title: String,
  body: String
   
});

// create the Headline model using the headlineSchema
var Note = mongoose.model('Note', NoteSchema);

// export the Headline model
module.exports = Notes;
