const mongoose = require(`mongoose`);

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: `User` },
  },
  { timestamps: true }
);

const HootSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["News", "Sports", "Games", "Movies", "Music", "Television"],
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: `User` },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Hoot = mongoose.model(`Hoot`, HootSchema);

module.exports = Hoot;