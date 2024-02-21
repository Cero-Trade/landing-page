import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
