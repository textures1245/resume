<script lang="ts">
	import type { Interest, Project } from '$lib/types';
	import { slide } from 'svelte/transition';
	import HidableProp from './HidableProp.svelte';

	export let data: Interest[];
</script>

{#each data as p}
	<HidableProp>
		<div class="">
			<ul class="list-disc list-inside">
				<li class="font-extrabold">
					{p.groupName} - <span>{p.details}</span>
				</li>
			</ul>
		</div>
	</HidableProp>
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
