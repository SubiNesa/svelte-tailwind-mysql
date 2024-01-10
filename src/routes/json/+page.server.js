import { mysqlconnFn } from "$lib/server/mysql";

export async function load() {
	let mysqlconn = await mysqlconnFn();
	try {
		let results = await mysqlconn
		.query("SELECT * FROM tasks;")
		.then(function ([rows, fields]) {
			console.log('====================');
			console.log('rows');
			console.log(rows);
			console.log('====================');
			console.log('fields');
			console.log(fields);
			return rows;
		});

		return {
			data: results
		};
	} catch (error) {
		console.error("Got an error!!!");
		console.log(error);
		return error;
	}
}