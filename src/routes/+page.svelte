<script>
	import { Alert } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
</script>

<main class="container mx-auto">
	<h1 class="text-4xl dark:text-white py-8">Welcome to SvelteKit</h1>
	<Alert class="mb-2">
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>

	<Table>
		<TableHead>
			<TableHeadCell>Product name</TableHeadCell>
			<TableHeadCell>Color</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
			<TableHeadCell>Price</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			<TableBodyRow>
				<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
				<TableBodyCell>Sliver</TableBodyCell>
				<TableBodyCell>Laptop</TableBodyCell>
				<TableBodyCell>$2999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
				<TableBodyCell>White</TableBodyCell>
				<TableBodyCell>Laptop PC</TableBodyCell>
				<TableBodyCell>$1999</TableBodyCell>
			</TableBodyRow>
			<TableBodyRow>
				<TableBodyCell>Magic Mouse 2</TableBodyCell>
				<TableBodyCell>Black</TableBodyCell>
				<TableBodyCell>Accessories</TableBodyCell>
				<TableBodyCell>$99</TableBodyCell>
			</TableBodyRow>
		</TableBody>
	</Table>
</main>
