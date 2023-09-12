<script lang="ts">
	import type { Project } from '$lib/types';
	import { slide } from 'svelte/transition';
	import HidableProp from './HidableProp.svelte';

	export let data: Project[];
</script>

{#each data as p}
	{#if !p.onHide}
		<HidableProp>
			<div class="">
				<ul class="list-disc list-inside">
					<li class="font-extrabold">
						{p.name} - <span>{p.details}</span>
						<a rel="noreferrer" target="_blank" href={p.url ?? '#'}>{p.url?.slice(8) ?? '#'}</a>
					</li>
				</ul>
			</div>
		</HidableProp>
	{/if}
{/each}

<style lang="postcss">
	ul li {
		@apply ml-2 md:ml-6;
	}

	a {
		text-decoration: underline;
	}

	h3 {
		@apply font-bold;
	}
</style>
