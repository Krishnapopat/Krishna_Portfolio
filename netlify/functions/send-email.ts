import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🤖 New Contact Form Submission</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0;">Krishna Popat - AI Engineer Portfolio</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px; display: flex; align-items: center;">
              👤 From:
            </h3>
            <p style="color: #64748b; margin: 0; font-size: 14px; font-weight: 600;">${name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px; display: flex; align-items: center;">
              📧 Email:
            </h3>
            <p style="color: #3b82f6; margin: 0; font-size: 14px;">
              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 600;">${email}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px; display: flex; align-items: center;">
              📝 Subject:
            </h3>
            <p style="color: #64748b; margin: 0; font-size: 14px; font-weight: 600;">${subject}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px; display: flex; align-items: center;">
              💬 Message:
            </h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
              <p style="color: #374151; margin: 0; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <div style="background: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <h4 style="color: #1e40af; margin: 0 0 5px 0; font-size: 14px;">Quick Actions:</h4>
              <p style="color: #3730a3; margin: 0; font-size: 13px;">
                💬 <a href="mailto:${email}?subject=Re: ${subject}" style="color: #3730a3; text-decoration: none;">Reply to ${name}</a><br/>
                📱 Call: <a href="tel:+917984112408" style="color: #3730a3; text-decoration: none;">+91 7984112408</a><br/>
                💼 LinkedIn: <a href="https://www.linkedin.com/in/krishna-popat-053311233/" style="color: #3730a3; text-decoration: none;">View Profile</a>
              </p>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; margin: 0; font-size: 12px;">
              🕒 Received on ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 12px;">
              Sent from Krishna Popat's AI Engineer Portfolio
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['nilakrishna2004@gmail.com'],
        subject: `🤖 Portfolio Contact: ${subject}`,
        html: emailContent,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error('Resend API error:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Failed to send email' }),
      };
    }

    const result = await resendResponse.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully!',
        id: result.id 
      }),
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
}; 