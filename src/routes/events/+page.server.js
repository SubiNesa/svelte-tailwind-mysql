import { mysqlconnFn } from "$lib/server/mysql";

export async function load() {
	let mysqlconn = await mysqlconnFn();
	try {
		let results = await mysqlconn
		.query("SELECT * FROM events ORDER BY event_ID DESC LIMIT 5;")
		.then(function ([rows]) {
			console.log(rows);
			return rows;
		});

		return {
			events: results
		};
	} catch (error) {
		console.log(error);
		return error;
	}
}