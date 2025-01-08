<script lang="ts">
	import { type Project } from '$lib/builders';
	import { langSelected } from '$lib/components/App.svelte';
	import HidableProp from './HidableProp.svelte';

	export let data: Project[];
</script>

{#each data as p}
	{#if !p.onHide}
		<HidableProp>
			<div class="">
				<ul class="list-disc list-inside">
					<li>
						<span class="font-extrabold hyphens-auto" lang="de">{p.name}</span> -
						<span>{p.details}</span>
						{#if p.url}
							<a class:print-only={!p.url} rel="noreferrer" target="_blank" href={p.url}
								>{p.url.slice(8)}</a
							>
						{:else}
							{#each p.sourceCode as sc}
								<a class:print-only={!p.url} rel="noreferrer" target="_blank" href={sc}
									>{sc.slice(8)}</a
								>
							{/each}
						{/if}
						<ul class="print:hidden block list-inside text-slate-600 text-sm list-disc">
							<li class="">{$langSelected === 'ENG' ? 'Procedure' : 'ขั้นตอน'}: {p.procedure}</li>
							<li class="">
								{$langSelected === 'ENG' ? 'Tech-Stacks' : 'เทคสแต็ก'}: {p.techStack}
							</li>
						</ul>
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
		@apply font-semibold;
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

		* {
			@apply text-xs;
		}
	}
</style>
