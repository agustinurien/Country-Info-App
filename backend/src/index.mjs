import express from 'express';
import countryRoutes from './routes/countryRoutes.mjs';

const app = express();
app.disable('x-powered-by');

app.use(express.json());


app.use('/api', countryRoutes);



const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`);
});