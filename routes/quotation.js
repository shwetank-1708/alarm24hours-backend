// const router = require("express").Router();
// // const quotation = require("../models/quotation");
// const nodemailer = require("nodemailer");
// const PDFDocument = require("pdfkit");
// const fs = require("fs");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "shwetank.chauhan3@gmail.com", // Replace with your email
//     pass: "akjt fsiw kiwy pluj", // Replace with your app-specific password
//   },
// });

// router.post("/send-email", async (req, res) => {
//   const { name, email, contactNum, message } = req.body;

//   // Generate PDF
//   const pdfPath = `contact_form_${Date.now()}.pdf`;
//   const doc = new PDFDocument();
//   const writeStream = fs.createWriteStream(pdfPath);
//   doc.pipe(writeStream);

//   doc.fontSize(16).text("Contact Form Submission", { underline: true });
//   doc.moveDown();
//   doc.fontSize(12).text(`Name: ${name}`);
//   doc.text(`Email: ${email}`);
//   doc.text(`Contact Number: ${contactNum}`);
//   doc.text(`Message: ${message}`);
//   doc.end();

//   writeStream.on("finish", async () => {
//     // Email options
//     const mailOptions = {
//       from: "shwetank.chauhan3@gmail.com",
//       to: "shwetank.chauhan17@gmail.com", // Replace with the recipient email
//       subject: "Contact Form Submission (PDF Attached)",
//       text: "Please find the contact form submission details attached as a PDF.",
//       attachments: [
//         {
//           filename: "Contact_Form.pdf",
//           path: pdfPath,
//         },
//       ],
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email with PDF sent successfully!" });

//       // Delete the PDF after sending email
//       fs.unlinkSync(pdfPath);
//     } catch (error) {
//       console.error("Error sending email:", error);
//       res.status(500).json({ message: "Error sending email", error });
//     }
//   });

//   writeStream.on("error", (err) => {
//     console.error("Error generating PDF:", err);
//     res.status(500).json({ message: "Error generating PDF", error: err });
//   });
// });

const express = require("express");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shwetank.chauhan3@gmail.com", // Replace with your email
    pass: "akjt fsiw kiwy pluj", // Replace with your app-specific password
  },
});

router.post("/send-email", async (req, res) => {
  const { name, email, contactNum, message } = req.body;

  // Generate PDF
  const pdfPath = `contact_form_${Date.now()}.pdf`;
  const doc = new PDFDocument();
  const writeStream = fs.createWriteStream(pdfPath);
  doc.pipe(writeStream);

  doc.fontSize(16).text("Contact Form Submission", { underline: true });
  doc.moveDown();
  doc.fontSize(12).text(`Name: ${name}`);
  doc.text(`Email: ${email}`);
  doc.text(`Contact Number: ${contactNum}`);
  doc.text(`Message: ${message}`);
  doc.end();

  writeStream.on("finish", async () => {
    // Email options
    const mailOptions = {
      from: "shwetank.chauhan3@gmail.com",
      to: "shwetank.chauhan17@gmail.com", // Replace with the recipient email
      subject: "Contact Form Submission (PDF Attached)",
      text: "Please find the contact form submission details attached as a PDF.",
      attachments: [
        {
          filename: "Contact_Form.pdf",
          path: pdfPath,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email with PDF sent successfully!" });

      // Delete the PDF after sending email
      fs.unlinkSync(pdfPath);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  });

  writeStream.on("error", (err) => {
    console.error("Error generating PDF:", err);
    res.status(500).json({ message: "Error generating PDF", error: err });
  });
});

module.exports = router;
