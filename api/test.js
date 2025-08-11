export default function handler(req, res) {
  res.status(200).json({ 
    message: 'API is working!',
    method: req.method,
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.RESEND_API_KEY,
    apiKeyStart: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 3) + '...' : 'NOT_SET'
  });
} 