import Images from "../models/uploadImage";

export const uploadImages = async (req, res) => {
  try {
    const { eventId, images } = req.body;

    if (!eventId || !images || images.length === 0) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const newImages = new Images({
      eventId,
      images,
    });

    await newImages.save();

    res.status(201).json({
      message: "Images uploaded successfully",
      imageInfo: { eventId, images },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};
