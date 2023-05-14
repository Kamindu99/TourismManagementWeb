import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/Restaurant.js';

const app = express();

// app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

const PORT = 8800;
const DB_URL = 'mongodb+srv://travelwise:travelwise123@cluster0.ic2jehf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => console.log('DB Connection Error', err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
