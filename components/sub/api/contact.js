import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, surname, email, contact, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sainikeshav192@gmail.com',
        pass: 'keshav192_av',
      },
    });

    // Email options
    let mailOptions = {
      from: email,
      to: 'sainikeshav192@gmail.com',
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name} ${surname}\nEmail: ${email}\nContact Number: ${contact}\n\nMessage:\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
