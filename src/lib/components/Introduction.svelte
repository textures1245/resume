<script lang="ts">
	import type { AboutMe } from '$lib/types';
	export let isColumnGrid: boolean;
	export let data: AboutMe;
</script>

<div class:print:col-span-1={isColumnGrid} class="col-span-full space-y-2 md:col-span-1">
	<figure class="flex justify-center">
		<img
			class="print:w-44 w-80"
			src="https://cdn.pixabay.com/photo/2017/08/21/23/31/labrador-2667328_640.jpg"
			alt="phakh_pic"
		/>
	</figure>

	<div class:print:hidden={isColumnGrid} class="text-center block md:hidden">
		<h2 class="text-2xl">{data.fullName}</h2>
		<p class="text-xl text-gray-600">({data.nickname})</p>
	</div>
</div>
<div class="">
	<h2 class:print:block={isColumnGrid} class=" hidden md:block">
		{data.fullName} <span>({data.nickname})</span>
	</h2>
	<p>{data.location}</p>
	<p><a href="#">{data.phone}</a></p>
	<a href={`mailto:${data.email}`} target="_blank" rel="noreferrer">{data.email}</a>
</div>
<div class="flex flex-col items-end">
	<a href={data.github.url} target="_blank" rel="noreferrer">github.com/{data.github.label}</a>
	<a href={data.linkedin.url} target="_blank" rel="noreferrer">LinkedIn</a>
	<a href="#" target="_blank" rel="noreferrer">phakh.is.a.dev{data.website}</a>
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
	}
	h2 {
		@apply font-bold  text-xl xl:text-3xl;
	}

	h2 span {
		@apply text-gray-600  text-base lg:text-lg;
	}
</style>
