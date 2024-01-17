import { mysqlconnFn } from "$lib/server/mysql";
import { redirect } from '@sveltejs/kit';

// https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ request }) => {
		
		let insertedId;

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
			// https://sidorares.github.io/node-mysql2/docs/examples/queries/prepared-statements/insert
			const sql = 'INSERT INTO `events` (`event_Name`, `start_Date`, `end_Date`, `lodging_Type_ID`, `season_Type_ID`) VALUES (?, ?, ?, ?, ?)';
			const values = [data.get('name'), data.get('date-start'), data.get('date-end'), data.get('lodging'), data.get('season')];
			const [result] = await mysqlconn.execute(sql, values);

			insertedId = result.insertId;
		
		}  catch (error) {
			console.log('error');
			console.log(error);
			return { success: false }
		}

		if (insertedId) {
			redirect(303, `/events/${insertedId}/edit`);
		}
	}
};