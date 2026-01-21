import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Configure the transporter
    // Note: You need to set EMAIL_USER and EMAIL_PASS in your .env.local file
    // For Gmail, use an App Password, not your regular password.
    
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.warn('EMAIL_USER or EMAIL_PASS not set. Simulating email send.');
      // Simulating success for demonstration if credentials are missing
      // In production, you should throw an error or handle this differently
      console.log(`[SIMULATION] Sending email to aireallytics@gmail.com`);
      console.log(`[SIMULATION] Client Email: ${email}`);
      
      // Artificial delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return NextResponse.json({ message: 'Demo request received (Simulation mode)' }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: 'aireallytics@gmail.com',
      subject: 'New Demo Request',
      text: `This client email address ${email} requested for demo contact.\n\nPlease contact them.`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1E88E5;">New Demo Request</h2>
          <p><strong>Client Email:</strong> ${email}</p>
          <p>This client has requested a demo contact.</p>
          <p>Please enter your email to contact you.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This email was sent from your website's demo request form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}
