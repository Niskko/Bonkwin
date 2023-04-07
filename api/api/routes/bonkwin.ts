import { Request, Response } from 'express';
import { BonkwinService } from '../services/bonkwin';
const route = require('express').Router();
// route.get('/', (req: Request, res: Response) => {
// 	res.send('Bonjour Bonkwin');
// });
route.get('/', (req: Request, res: Response) => {
	const bonkwins = BonkwinService.getAllBonkwins();
	res.send(bonkwins);
});
route.post('/create', (req: Request, res: Response) => {
	const { title, description, deadline, categorie } = req.body;
	BonkwinService.createBonkwin(title, description, deadline, categorie);
	console.log('bonkwin Created');
	res.sendStatus(201);
});
export default route;
