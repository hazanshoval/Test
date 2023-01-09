const { Schema, model } = require("mongoose");

const CardSchema = new Schema({
  title: { type: String,required: true},
  urlImage: { type: String,required: true},
});


const Card = model("Card", CardSchema);

module.exports = Card;