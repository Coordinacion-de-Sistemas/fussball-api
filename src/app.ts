import express, { Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import ligaRouter from './routes/liga';

const app = express();

app.use(express.json());
app.use(cors());

// Puerto del server
const PORT = <string>process.env.PORT || 4000;

// http://localhost:4001
app.get('/', (_, res: Response) => res.send('Api inicilizada'));

//Esta es una prueba de conexión

// Middlewares
app.use('/api/auth', ligaRouter);

// Inicializando servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
