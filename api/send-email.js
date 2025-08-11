export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validation: Ensure required fields are present
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields. Please provide name, email, and message.'
      });
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'Email service not configured',
        setup_required: true
      });
    }

    // Email Configuration
    const emailData = {
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['nilakrishna2004@gmail.com'],
      subject: subject ? `New Website Inquiry from ${name}` : `Portfolio Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .details-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .details-table td { padding: 12px; border-bottom: 1px solid #eee; }
            .details-table .label { font-weight: bold; width: 120px; color: #555; }
            .message-box { background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6; margin: 20px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; padding: 20px; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
              <p>Krishna Popat - AI Engineer Portfolio</p>
            </div>
            <div class="content">
              <h2>Contact Details</h2>
              <table class="details-table">
                <tr>
                  <td class="label">👤 Name:</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td class="label">📧 Email:</td>
                  <td><a href="mailto:${email}">${email}</a></td>
                </tr>
                ${subject ? `
                <tr>
                  <td class="label">📝 Subject:</td>
                  <td>${subject}</td>
                </tr>
                ` : ''}
              </table>
              
              <h3>💬 Message</h3>
              <div class="message-box">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
            </div>
            <div class="footer">
              <p>📅 Received on ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })} IST</p>
              <p>Sent from Krishna Popat's Portfolio Contact Form</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}

Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
      `,
      reply_to: email
    };

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API error:', errorData);
      return res.status(500).json({
        success: false,
        error: 'Failed to send email. Please try again later.'
      });
    }

    const result = await response.json();

    // Success Response
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      id: result.id
    });

  } catch (error) {
    console.error('Email API error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
} 