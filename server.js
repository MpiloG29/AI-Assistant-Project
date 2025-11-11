const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API Route
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    console.log('📨 Received:', message);
   
    let reply = "Hello! I'm your AI assistant. How can I help? 🤖";
   
    if (message.toLowerCase().includes('programming')) {
        reply = "I know JavaScript, Python, Node.js! 💻";
    } else if (message.toLowerCase().includes('project')) {
        reply = "I've built web apps and AI projects! 🚀";
    } else if (message.toLowerCase().includes('experience')) {
        reply = "I have 2+ years of experience! 📈";
    } else if (message.toLowerCase().includes('skill')) {
        reply = "My skills include coding and design! 🎯";
    } else if (message.toLowerCase().includes('contact')) {
        reply = "Reach me at email@example.com! 📞";
    } else if (message.toLowerCase().includes('education')) {
        reply = "I have a Computer Science degree! 🎓";
    }
   
    res.json({ reply: reply, success: true });
});

// Serve frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});