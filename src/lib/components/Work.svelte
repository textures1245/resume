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
					<li>
						<span class="font-extrabold">{p.name}</span> - <span>{p.details}</span>
						<a
							class:print-only={!p.url}
							rel="noreferrer"
							target="_blank"
							href={p.url ?? p.sourceCode}>{p.url?.slice(8) ?? p.sourceCode.slice(8)}</a
						>
						<!-- <a class="web-only" href={p.sourceCode} target="_blank" rel="noreferrer">(source)</a> -->
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

		text-underline-offset: 0.1rem;

		font-weight: 800;
		@apply inline-block;
	}

	h3 {
		@apply font-bold;
	}

	.web-only {
		@apply inline-block;
	}

	a:hover,
	button:hover {
		@apply text-purple-300;
	}

	@media print {
		.web-only {
			@apply hidden;
		}
	}
</style>
