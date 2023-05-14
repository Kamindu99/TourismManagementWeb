import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  Restaurant_Name: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  },
  Opening_Hours: {
    type: String,
    required: true
  }
});

const Restaurant = mongoose.model('Restaurant', postSchema);

export default Restaurant;
