import Event from "../models/eventModel.js";
import Images from "../models/uploadImage.js";

// Create an event
export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      userEmail: req.body.userEmail,
      description: req.body.description,
      caption: req.body.caption,
      date: req.body.date,
      interested: req.body.interested || 0,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ userEmail: req.body.email });
    // const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//comment a code
// Get event by id
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single event by ID
export const getOneEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an event by ID
export const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEvent)
      return res.status(404).json({ message: "Event not found" });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an event by ID
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent)
      return res.status(404).json({ message: "Event not found" });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload Image
export const uploadImage = async (req, res) => {
  try {
    const { eventId, images } = req.body;
    const image = new Images({
      eventId,
      images,
    });
    await image.save();
    res.status(200).json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
};

//Get Image
export const getImageByEventId = async (req, res) => {
  try {
    console.log(req.params.id);
    
    const eventImages = await Images.find({eventId: req.params.id});
    if (!eventImages)
      return res.status(404).json({ message: "Images not found" });
    res.status(200).json(eventImages);
  } catch (error) {
    console.log(error);
  }
};
