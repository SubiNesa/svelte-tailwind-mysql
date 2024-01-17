<script>
	// https://flowbite-svelte.com/docs/components/forms
	import { Label, Input } from 'flowbite-svelte';
	// https://flowbite-svelte.com/docs/components/buttons
	import { Button } from 'flowbite-svelte';

	export let data;

	console.log(data);
</script>

<main class="container mx-auto dark:text-white py-4">
	<form method="POST">
		<div class="mb-3">
			<Label for="name" class="block mb-2">Name</Label>
			<Input type="text" id="name" placeholder="Name" name="name" value={data.event.event_Name}/>
		</div>
		<div class="flex mb-3 gap-2">
			<div class="w-1/2">
				<Label for="date-start" class="block mb-2">Date start</Label>
				<Input type="datetime-local" id="date-start" name="date-start" value={new Date(data.event.start_Date).toISOString().slice(0,-8)}/>
			</div>
			<div class="w-1/2">
				<Label for="date-end" class="block mb-2">Date end</Label>
				<Input type="datetime-local" id="date-end" name="date-end" value={new Date(data.event.end_Date).toISOString().slice(0,-8)}/>
			</div>
		</div>
		<div class="flex mb-6 gap-2">
			<div class="w-1/2">
				<Label for="lodging" class="block mb-2">Lodging</Label>
				<Input type="text" id="lodging" name="lodging" placeholder="Lodging" value={data.event.lodging_Type_ID}/>
			</div>
			<div class="w-1/2">
				<Label for="season" class="block mb-2">Season</Label>
				<Input type="text" id="season" name="season" placeholder="Season" value={data.event.season_Type_ID}/>
			</div>
		</div>
		<div class="text-right">
			<Button type="submit" color="yellow">Edit</Button>
		</div>
	</form>
</main>