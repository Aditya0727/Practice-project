const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename : "listingimage",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?...",
    type: String,
    default: "https://images.unsplash.com",
    set: function (v) {
      return v === "" ? this.default : v;
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
