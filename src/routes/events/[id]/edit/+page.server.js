import { mysqlconnFn } from "$lib/server/mysql";
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	let mysqlconn = await mysqlconnFn();
	try {
		// https://sidorares.github.io/node-mysql2/docs/examples/queries/prepared-statements/select
		const sql = 'SELECT * FROM `events` WHERE `event_ID` = ? LIMIT 1';
		const values = [params.id];
	  
		const [rows] = await mysqlconn.execute(sql, values);

		return {
			event: rows[0]
		};
	} catch (error) {
		console.log(error);
		return error;
	}
}

// https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ params, request }) => {
		
		/*
		FormData {
			[Symbol(state)]: [
				{ name: 'name', value: 'Test' },
				{ name: 'date-start', value: '2024-01-17T21:49' },
				{ name: 'date-end', value: '2024-01-20T21:49' },
				{ name: 'lodging', value: '1' },
				{ name: 'season', value: '3' }
			]
		}
		*/
		const data = await request.formData();

		try {
			let mysqlconn = await mysqlconnFn();
			// https://sidorares.github.io/node-mysql2/docs/examples/queries/prepared-statements/update
			const sql = 'UPDATE `events` SET `event_Name` = ?, `start_Date` = ?, `end_Date` = ?, `lodging_Type_ID` = ?, `season_Type_ID` = ? WHERE event_ID = ? LIMIT 1';
			const values = [data.get('name'), data.get('date-start'), data.get('date-end'), data.get('lodging'), data.get('season'), params.id];
			const [result] = await mysqlconn.execute(sql, values);
		
		}  catch (error) {
			console.log('error');
			console.log(error);
			return { success: false }
		}

		
		redirect(303, `/events`);
	}
};