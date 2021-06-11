
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  hotel_name: {
    type: String,
    requied: 'Hotel name is required',
    max: 32,
    trim: true
  },
  hotel_description: {
    type: String,
    required: 'Hotel description is required',
    trim: true
  },
  image: String,
  star_rating: {
    type: Number,
    required: 'Hotel star rating is required',
  },
  country: {
    type: String,
    required: 'Country is required',
    trum: true
  },
  cost_per_night: {
    type: Number,
    required: 'cost per night is required',
  },
  availiable: {
    type: Boolean,
    required: 'availiable is required',
  }
});

// Export model
module.exports = mongoose.model('Hotel', hotelSchema);
