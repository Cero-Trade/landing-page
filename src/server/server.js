import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Derive the __dirname equivalent in ES module scope
const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(dirname, '..', '..', 'dist')));

// Handle all other routes by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(dirname, '..', '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
