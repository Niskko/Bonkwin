import { Bonkwin } from './bonkwin';
import { database } from '../../config/database';
export namespace BonkwinHelper {
	export const getAllBonkwins = (): Array<Bonkwin> => {
		return database.prepare('SELECT * FROM bonkwin').all();
	};
	export const createBonkwin = (
		title: string,
		description: string,
		deadline: string,
		categorie: string
	): void => {
		database
			.prepare(
				'INSERT INTO bonkwin(title, description, deadline, categorie) VALUES(?, ?, ?, ?)'
			)
			.run([title, description, deadline, categorie]);
	};
}
