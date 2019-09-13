import express, {Application, Request, Response, NextFunction} from 'express';
import {Message} from './message';

const app: Application = express();

const add = (a: number, b: number): Message => {
    return {info: `${a + b}`};
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('HELLO');
});

app.listen(3000, () => console.log('server is running'));