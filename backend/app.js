import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.post('/send/mail', async (req, res, next) => {
  const { name, email, message, contact } = req.body;

  if (!name || !email || !contact || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all details',
    });
  }

  const options = {
    email: 'devfitts2003@gmail.com',
    subject: 'GYM WEBSITE CONTACT',
    message,
    userEmail: email,
    contact,
  };

  console.log('Options:', options); // Log the options object

  try {
    await sendEmail(options);

    res.status(200).json({
      success: true,
      message: 'Message Sent Successfully.',
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});


/*router.post("/send/mail", async (req, res, next) => {
  const { name, email, message, contact } = req.body;
  console.log('Request body:', req.body);
  if (!name || !email || !contact || !message) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }
  try {
    await sendEmail({
      email: "devfitts2003@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
      contact,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: " Internal Server Error",
    });
  }
});*/


app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
