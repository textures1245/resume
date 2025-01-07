<script lang="ts">
	import { langSelected } from '$lib/components/App.svelte';
	import HidableProp from './HidableProp.svelte';
	import { WorkExperience, WorkProject } from '$lib/builders';

	export let data: WorkExperience[];
</script>

{#each data as p}
	{#if !p.onHide}
		<HidableProp>
			<div class="">
				<ul class="list-disc list-inside">
					<li>
						<span class="">{p.companyName} -- {p.located}</span>
						<p class="print:mb-0 mb-2  flex justify-between items-center">
							<span class="font-extrabold">{p.role}</span> <i class=""> {p.date}</i>
						</p>
						<p class="">
							{p.details}
						</p>
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
