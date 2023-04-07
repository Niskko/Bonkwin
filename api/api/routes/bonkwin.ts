import { Request, Response } from 'express';
import { BonkwinService } from '../services/bonkwin';
const route = require('express').Router();
route.get('/', (req: Request, res: Response) => {
	const bonkwins = BonkwinService.getAllBonkwins();
	res.send(bonkwins);
});
route.post('/create', (req: Request, res: Response) => {
	const { title, description, categorie, price, user } = req.body;
	BonkwinService.createBonkwin(title, description, categorie, price, user);
	console.log('bonkwin created:' + title);
	res.sendStatus(201);
});
route.delete('/delete', (req: Request, res: Response) => {
	console.log(req.query.id);
	const id = req.query.id as string;
	BonkwinService.deleteBonkwin(id);
	res.sendStatus(200);
});
export default route;
