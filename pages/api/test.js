export default function handler(req, res) {
  const hasApiKey = !!process.env.RESEND_API_KEY;
  const apiKeyStart = process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 5) + '...' : 'Not found';
  
  return res.status(200).json({
    message: 'API is working!',
    hasApiKey: hasApiKey,
    apiKeyStart: apiKeyStart,
    method: req.method,
    timestamp: new Date().toISOString()
  });
} 