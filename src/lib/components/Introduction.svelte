<script lang="ts">
	import type { AboutMe } from '$lib/types';
	export let isColumnGrid: boolean;
	export let data: AboutMe;
	import myPic from '$lib/assets/phakh.jpeg';
</script>

<div class:print:col-span-1={isColumnGrid} class="col-span-full space-y-2 md:col-span-1">
	<figure class="">
		<img class="print:w-24 w-48" src={myPic} alt="phakh_pic" />
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
	<a href={data.linkedin.url} target="_blank" rel="noreferrer">LinkedIn/{data.linkedin.label}</a>
	<a class="print-only" href={data.website} target="_blank" rel="noreferrer">textures1245.resume</a>
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
		text-underline-offset: 0.2rem;

	}
	h2 {
		@apply font-bold  text-xl xl:text-3xl;
	}

	h2 span {
		@apply text-gray-600  text-base lg:text-lg;
	}
</style>
