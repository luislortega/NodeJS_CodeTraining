const express = require('express');
const multer = require('multer');
const app = express();
const router = express.Router();
const path = require('path');

const Storage = multer.diskStorage({
  destination: './public/images',
  filename: (req, file, cb) => {
    const fileName =
      file.originalname.split('.')[0] +
      '-' +
      Date.now() +
      path.extname(file.originalname);
    cb(null, fileName);
  }
});

const upload = multer({
  limits: 10 * 1024 * 1024,
  storage: Storage
}).single('image');

app.get('/', (req, res) => {
  res.end('GET');
});

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    const p = req.file.path
      .split(path.sep)
      .slice(1)
      .join('/');
      
    res.status(200).json({ path: p });
  });
});
app.use(require('morgan')('combined'));

app.listen(3000, () => console.log('Listening at port 3000'));