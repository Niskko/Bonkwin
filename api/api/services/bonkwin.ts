import { Bonkwin } from '../models/bonkwin/bonkwin';
import { BonkwinHelper } from '../models/bonkwin/helper';
export namespace BonkwinService {
	export const getAllBonkwins = (): Array<Bonkwin> => {
		return BonkwinHelper.getAllBonkwins();
	};
	export const createBonkwin = (
		title: string,
		description: string,
		deadline: string,
		categorie: string
	): void => {
		BonkwinHelper.createBonkwin(title, description, deadline, categorie);
	};
}
