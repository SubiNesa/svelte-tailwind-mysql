<script>
	// https://flowbite-svelte.com/docs/typography/link
	import { A } from 'flowbite-svelte';
	// https://flowbite-svelte.com/docs/components/buttons
	import { Button } from 'flowbite-svelte';
	// https://flowbite-svelte.com/docs/components/table
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	// loading data from +page.server.js https://kit.svelte.dev/docs/load
	export let data;

	// format of the dates  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
	const dateOption = {
		weekday: 'short', // "narrow", "short", "long"
 		year: 'numeric',  // "numeric", "2-digit"
		month: 'short',   // "numeric", "2-digit", "narrow", "short", "long"
		day: 'numeric',   // "numeric", "2-digit"
		hour: 'numeric',  // "numeric", "2-digit",
		minute: 'numeric' // "numeric", "2-digit",
	};
	const dateLang = 'de-CH'
</script>

<main class="container mx-auto dark:text-white py-4">
	<div class="text-right mb-2">
		<Button href="/events/add" color="light" pill>Add event</Button>
	</div>
	<Table>
		<TableHead>
			<TableHeadCell>ID</TableHeadCell>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Start Date</TableHeadCell>
			<TableHeadCell>End Date</TableHeadCell>
			<TableHeadCell>Lodging</TableHeadCell>
			<TableHeadCell>Season</TableHeadCell>
			<TableHeadCell></TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			{#each data.events as event}
			<TableBodyRow>
				<TableBodyCell>{event.event_ID}</TableBodyCell>
				<TableBodyCell>{event.event_Name}</TableBodyCell>
				<TableBodyCell>{(new Date(event.start_Date)).toLocaleDateString(dateLang, dateOption)}</TableBodyCell>
				<TableBodyCell>{(new Date(event.end_Date)).toLocaleDateString(dateLang, dateOption)}</TableBodyCell>
				<TableBodyCell>{event.lodging_Type_ID}</TableBodyCell>
				<TableBodyCell>{event.season_Type_ID}</TableBodyCell>
				<TableBodyCell><A href={`events/${event.event_ID}/edit`} class="font-medium hover:underline">Edit</A></TableBodyCell>
			</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</main>
