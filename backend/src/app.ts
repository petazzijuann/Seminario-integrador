import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/', (req: Request, res: Response) => {
  res.send('Got a POST request');
});

app.put('/user', (req: Request, res: Response) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (req: Request, res: Response) => {
  res.send('Got a DELETE request at /');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});