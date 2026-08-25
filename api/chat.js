// api/chat.js — Vercel Serverless Function Endpoint for NIRVAN AI Chatbot
export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Content-Type'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message } = req.body || {};
    if (!message) {
      return res.status(400).json({ error: 'Message payload required' });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is not configured on Vercel.' });
    }

    // Call Google Gemini AI API
    const googleRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `System Persona: You are NIRVAN AI, the official intelligent assistant for NIRVAN '26 annual technical fest at Graphic Era Hill University (GEHU). Answer fest-related questions accurately (Hackathons, Web-A-Thon, CTF, Treasure Hunt, Esports, Workshops, 12-13 Oct 2026, Free Entry, GEHU Dehradun) AND handle general conversational talk naturally, helpfully, and politely.\n\nUser Message: ${message}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await googleRes.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am NIRVAN AI. How can I assist you with NIRVAN '26 or any general questions?";

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Server Error' });
  }
}
