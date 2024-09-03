import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    eventId: { type: String, required: true },
    images: { type: [String], required: true }, // Array of strings
});

const Images = mongoose.model('Images', postSchema);

export default Images;
