<script>
	import { DarkMode, NavBrand, Navbar } from 'flowbite-svelte';
	import '../app.pcss';
</script>

<Navbar fluid color="default" class="justify-between border-b">
	<div class="flex items-center justify-start w-fit">
		<NavBrand href="/" class="ms-2 md:me-24">
			<img src="/favicon.png" class="me-3 h-6 sm:h-8" alt="Flowbite Logo" />
			<span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
				SvelteKit
			</span>
		</NavBrand>
	</div>

	<div class="flex items-center ms-auto gap-2 p-1">
		<a href="/json">Json</a>
		<a href="/links">Links</a>
		<DarkMode />
	</div>
</Navbar>
