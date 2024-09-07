const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // You can change the port if necessary

app.use(cors()); // Enable CORS for all requests

app.get('/', (req, res) => {
  res.send('YouTube Proxy Server is running');
});

// Proxy endpoint for YouTube requests
app.get('/youtube/:videoId', (req, res) => {
  const videoId = req.params.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  res.redirect(videoUrl); // Redirects to YouTube video
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});