<script lang="ts">
	import { langSelected } from '$lib/components/App.svelte';
	import HidableProp from './HidableProp.svelte';
	import { WorkProject } from '$lib/builders';

	export let data: WorkProject[];
</script>

{#each data as p}
	{#if !p.onHide}
		<HidableProp>
			<div class="">
				<ul class="list-disc list-inside">
					<li>
						<a
							class:print-only={!p.url}
							rel="noreferrer"
							target="_blank"
							href={p.url ?? p.sourceCode}>{p.url?.slice(8) ?? p.sourceCode.slice(8)}</a
						>
						<span class="font-extrabold ">{p.name}, {p.company}</span>
						<p>{p.details}</p>
						<hr class="print:hidden my-2" />

						<ul class="print:hidden block list-inside text-slate-600  list-disc">
							<p class="">
								<span class=" font-bolder">
									{$langSelected === 'ENG' ? 'Procedure' : 'ขั้นตอน'}
								</span>

								{#each data as item}
									{#each item.subProcedure as p}
										<li class="list-none  font-bold">{p.name}</li>
										<li>{p.details}</li>
									{/each}
								{/each}
							</p>
							<p class="">
								<span class=" font-bolder">
									{$langSelected === 'ENG' ? 'Tech-Stacks' : 'เทคสแต็ก'}
								</span>
							</p>
							<p class="indent-5">{p.techStack}</p>
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
