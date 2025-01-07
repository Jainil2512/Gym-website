/*import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: options.userEmail,
    to: process.env.SMTP_MAIL,
    subject: options.subject,
    text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail} 
    \nContact number: ${options.contact}`
   };
  await transporter.sendMail(mailOptions);
};*/

import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: options.userEmail,
    to: process.env.SMTP_MAIL,
    subject: options.subject,
    text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}\nContact number: ${options.contact}`,
    html: `<p>${options.message.replace(
      /\n/g,
      "<br>"
    )}</p> <p><strong>Email of User Who Sent The Message:</strong> ${
      options.userEmail
    }</p> <p><strong>Contact number:</strong> ${options.contact}</p>`,
  };

  console.log("Mail options:", mailOptions); // Log the mail options to verify

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
