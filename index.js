import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from a container!',
    service: 'Node-Express',
    pod: process.env.POD_NAME || 'unknown',
    time: new Date().toISOString()
    });
});

app.get('/ready', (req, res) => {
  res.status(200).send('Ready');
});

app.get('/healthy', (req, res) => {
  res.status(200).send('Healthy');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});