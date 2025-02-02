const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title:{
  type: String,
  require: true,
  unique: true,
},
level:{
  type: String,
  enum: ['Easy peasy', 'Amateur Chef', 'UltraPro Chef'],
},
ingredients:{
  type: [ String ]
},
cuisine: {
  type: String,
  require: true,
},
dishtype: {
  type: String,
  enum: ['breakfast', 'main_course', 'soup', 'snak', 'drink', 'dessert', 'other']
},
image: {
  type: String,
  default: 'https://images.media-allrecipes.com/images/75131.jpg',
},
duration: {
  type: Number,
  min: 0,
  },
creator: {
  type: String,
},
created: {
type: Date,
default: new Date(),
},  
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
