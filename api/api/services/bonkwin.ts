import { Bonkwin } from '../models/bonkwin/bonkwin';
import { BonkwinHelper } from '../models/bonkwin/helper';
export namespace BonkwinService {
	export const getAllBonkwins = (): Array<Bonkwin> => {
		return BonkwinHelper.getAllBonkwins();
	};
	export const createBonkwin = (
		title: string,
		description: string,
		categorie: string,
		price: number,
		user: string
	): void => {
		BonkwinHelper.createBonkwin(title, description, categorie, price, user);
	};
	export const deleteBonkwin = (id: string): void => {
		BonkwinHelper.deleteBonkwin(id);
	};
}
