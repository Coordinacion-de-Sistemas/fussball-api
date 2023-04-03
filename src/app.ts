import express, { Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());

// Puerto del server
const PORT = <string>process.env.PORT || 4000;

// http://localhost:4001
app.get('/', (_, res: Response) => res.send('Api inicilizada'));

// Inicializando servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
