import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/msgSchema.js";

// create a new message
export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderName, subject, message } = req.body;

  // validation
  if (!senderName || !subject || !message) {
    return next(new ErrorHandler("All fields are required", 400));
  }

  const data = await Message.create({ senderName, subject, message });

  res.status(201).json({
    success: true,
    message: "Message sent successfully",
    data,
  });

  console.log("Message sent successfully");
});

// get all messages
export const getMessages = catchAsyncErrors(async (req, res) => {
  const messages = await Message.find();

  res.status(200).json({
    success: true,
    messages,
  });
});

// delete message
export const deleteMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const message = await Message.findById(id);

  if (!message) {
    return next(new ErrorHandler("Message not found", 404));
  }

  await message.deleteOne();

  res.status(200).json({
    success: true,
    message: "Message deleted successfully",
  });
});
