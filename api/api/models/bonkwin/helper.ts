import { Bonkwin } from './bonkwin';
import { database } from '../../config/database';
export namespace BonkwinHelper {
	export const getAllBonkwins = (): Array<Bonkwin> => {
		return database.prepare('SELECT * FROM bonkwin').all();
	};
	export const createBonkwin = (
		title: string,
		description: string,
		categorie: string,
		price: number,
		user: string
	): void => {
		database
			.prepare(
				'INSERT INTO bonkwin(title, description, categorie, price, user) VALUES(?, ?, ?, ?, ?)'
			)
			.run([title, description, categorie, price, user]);
	};
	export const deleteBonkwin = (id: string): void => {
		database.prepare('DELETE FROM bonkwin WHERE id = ?').run([id]);
	};
}
