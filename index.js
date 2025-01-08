// const express = require("express");
// const cors = require("cors");
// const app = express();
// require("./connection/connection");
// const contact = require("./routes/contact");
// const signup = require("./routes/signup");
// const getContact = require("./routes/getContact");

// app.use(express.json());
// app.use(cors());

// app.use("/contact", contact);
// app.use("/signup", signup);
// app.use("", getContact);

// // app.post("/signup", (req, res) => {
// //   res.send("API is working");
// // });

// app.get("/", (req, res) => {
//   res.send("Hello from server");
// });

// app.listen("5000", () => {
//   console.log("Server Started");
// });

// New Code-------------------------------------

// const express = require("express");
// // const nodemailer = require("nodemailer");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// // const PDFDocument = require("pdfkit");
// // const fs = require("fs");

// const quotation = require("./routes/quotation");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use("", quotation);

// // // Nodemailer Transport Configuration
// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: "shwetank.chauhan3@gmail.com", // Replace with your email
// //     pass: "akjt fsiw kiwy pluj", // Replace with your app-specific password
// //   },
// // });

// // // API Endpoint to Send Email with PDF Attachment
// // app.post("/send-email", async (req, res) => {
// //   const { name, email, contactNum, message } = req.body;

// //   // Generate PDF
// //   const pdfPath = `contact_form_${Date.now()}.pdf`;
// //   const doc = new PDFDocument();
// //   const writeStream = fs.createWriteStream(pdfPath);
// //   doc.pipe(writeStream);

// //   doc.fontSize(16).text("Contact Form Submission", { underline: true });
// //   doc.moveDown();
// //   doc.fontSize(12).text(`Name: ${name}`);
// //   doc.text(`Email: ${email}`);
// //   doc.text(`Contact Number: ${contactNum}`);
// //   doc.text(`Message: ${message}`);
// //   doc.end();

// //   writeStream.on("finish", async () => {
// //     // Email options
// //     const mailOptions = {
// //       from: "shwetank.chauhan3@gmail.com",
// //       to: "shwetank.chauhan17@gmail.com", // Replace with the recipient email
// //       subject: "Contact Form Submission (PDF Attached)",
// //       text: "Please find the contact form submission details attached as a PDF.",
// //       attachments: [
// //         {
// //           filename: "Contact_Form.pdf",
// //           path: pdfPath,
// //         },
// //       ],
// //     };

// //     try {
// //       await transporter.sendMail(mailOptions);
// //       res.status(200).json({ message: "Email with PDF sent successfully!" });

// //       // Delete the PDF after sending email
// //       fs.unlinkSync(pdfPath);
// //     } catch (error) {
// //       console.error("Error sending email:", error);
// //       res.status(500).json({ message: "Error sending email", error });
// //     }
// //   });

// //   writeStream.on("error", (err) => {
// //     console.error("Error generating PDF:", err);
// //     res.status(500).json({ message: "Error generating PDF", error: err });
// //   });
// // });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// Newest Code--------------------

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const quotation = require("./routes/quotation"); // Import the router

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", quotation); // Use the router

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
