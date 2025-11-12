import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Explicitly load .env from project root (same directory as server.js)
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const TAVILY_API_KEY = process.env.TAVILY_API_KEY;
if (!TAVILY_API_KEY) {
    console.warn('Warning: TAVILY_API_KEY not set. Create a .env file based on .env.example');
} else {
    console.log('Tavily key loaded (length):', TAVILY_API_KEY.length);
}

app.get('/api/health', (req, res) => {
    res.json({ ok: true, hasKey: !!TAVILY_API_KEY });
});

app.post('/api/search', async (req, res) => {
    try {
        if (!TAVILY_API_KEY) {
            return res.status(500).json({ detail: 'Server missing Tavily API key configuration.' });
        }
        const response = await fetch('https://api.tavily.com/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': TAVILY_API_KEY,
                'Authorization': `Bearer ${TAVILY_API_KEY}`
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            console.error('Tavily API error status:', response.status, data);
            return res.status(response.status).json(data);
        }
        res.json(data);
    } catch (err) {
        console.error('Unexpected server error:', err);
        res.status(500).json({ detail: 'Internal server error' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
