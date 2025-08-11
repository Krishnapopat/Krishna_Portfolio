import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData) => {
  try {
    const { name, email, subject, message } = data;
    
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0;">Krishna Popat Portfolio</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px;">From:</h3>
            <p style="color: #64748b; margin: 0; font-size: 14px;">${name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px;">Email:</h3>
            <p style="color: #3b82f6; margin: 0; font-size: 14px;">
              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px;">Subject:</h3>
            <p style="color: #64748b; margin: 0; font-size: 14px;">${subject}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 5px 0; font-size: 16px;">Message:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0;">
              <p style="color: #374151; margin: 0; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; margin: 0; font-size: 12px;">
              This email was sent from your portfolio contact form at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use Resend's default sender until you verify your domain
      to: ['nilakrishna2004@gmail.com'],
      subject: `Portfolio Contact: ${subject}`,
      html: emailContent,
      replyTo: email, // This allows you to reply directly to the sender
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}; 