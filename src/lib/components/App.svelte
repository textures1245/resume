<script lang="ts">
	import { Certificate, Language } from '$lib/builders';
	import Interest from './Interest.svelte';
	import Work from './Work.svelte';
	import Introduction from './Introduction.svelte';
	import { dataEN } from '../../dataEN';
	import { dataTH } from '../../dataTH';
	import HidableProp from './HidableProp.svelte';
	import Header from './Header.svelte';
	import { writable, type Writable } from 'svelte/store';

	const langSelected: Writable<'TH' | 'ENG'> = writable('ENG');
	let introColumnGridSetter = true;

	let data = dataEN;

	langSelected.subscribe((lang) => {
		data = lang === 'ENG' ? dataEN : dataTH;
	});
</script>

<div class="mb-5" class:eng-font={$langSelected === 'ENG'} class:thai-font={$langSelected === 'TH'}>
	<header class="web-only">
		<div class="px-10 theme grid place-items-center text-center space-y-4 py-8 text-white">
			<section class="container mx-auto">
				<Header langSelected={$langSelected} />
			</section>
			<div class="">
				{#if $langSelected === 'ENG'}
					<!-- content here -->
					<p>[Click at any sections or lines to hide some information before printing.]</p>
					<p>[You can also change grid direction to column/row. (print-only)]</p>
				{:else}
					<!-- else content here -->
					<p>[คลิกที่ส่วนใดส่วนหนึ่งหรือบรรทัดใดก็ได้เพื่อซ่อนข้อมูลบางส่วนก่อนพิมพ์]</p>
					<p>[คุณยังสามารถเปลี่ยนทิศทางของตารางเป็นคอลัมน์/แถวได้ (เฉพาะการพิมพ์)]</p>
				{/if}

				<div class="flex justify-center gap-6">
					<button
						on:click={() =>
							$langSelected === 'ENG' ? langSelected.set('TH') : langSelected.set('ENG')}
						>(Lang: {$langSelected} )</button
					>
					<button on:click={() => window.print()}>(Print)</button>
					<a href="https://github.com/textures1245/resume">(Source)</a>
					<button on:click={() => (introColumnGridSetter = !introColumnGridSetter)}
						>(Grid direction: {introColumnGridSetter ? 'Column' : 'Row'})</button
					>
				</div>
			</div>
		</div>
	</header>

	<main class="container my-5 print:m-1 mx-auto">
		<section
			class:print:grid-cols-3={introColumnGridSetter}
			id="introduction"
			class="grid-layout print:-space-y-4 mx-6 place-items-center"
		>
			<Introduction isColumnGrid={introColumnGridSetter} data={data.aboutMe} />
		</section>

		<HidableProp>
			<section id="objective" class="">
				<div class="">
					<h2>Objective</h2>
					<hr />
					<p>{data.objective}</p>
				</div>
			</section>
		</HidableProp>
		<HidableProp>
			<section id="summary">
				<div class="">
					<h2>Summary</h2>
					<hr />
					<p>{data.summary}</p>
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="education">
				<div class="">
					<h2>Education</h2>
					<hr />
					<ul class="list-disc print:-ml-6 list-inside">
						<li>
							<span>{data.education.degree}, {data.education.major}</span>
							{$langSelected == 'ENG' ? 'at' : 'ที่'}
							<span>{data.education.university}</span>
						</li>
						<li>{data.education.graduationDetail}</li>
					</ul>
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="langs">
				<div class="">
					<h2>Languages</h2>
					<hr />
					<ul class="list-disc print:-ml-6 list-inside">
						{#each data.langs as lang}
							<HidableProp>
								<li class="gap-6">
									<span class="w-16 inline-flex !font-[900]">{lang.lang}</span>
									<span>( {lang.level} )</span>
									<p>{lang.detail ?? ''}</p>
								</li>
							</HidableProp>
						{/each}
					</ul>
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="skills">
				<div class="">
					<h2>Technical Skills</h2>
					<hr />
					<ul class="list-disc print:-ml-6 list-inside">
						{#each data.technologies as tech}
							<HidableProp>
								<li>
									<span class="print:w-28 w-32 md:w-48 inline-flex !font-[900]">{tech.section}</span
									>
									<span>{tech.details}</span>
								</li>
							</HidableProp>
						{/each}
					</ul>
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="certificates">
				<div class="">
					<h2>Certificates</h2>
					<hr />
					<ul class="list-disc print:-ml-6 list-inside">
						{#each data.certificates as cert}
							<HidableProp>
								<li>
									<span class=" !font-[900]">{cert.title}</span>
									<span>( {cert.details} )</span>
								</li>
							</HidableProp>
						{/each}
					</ul>
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="projects">
				<div>
					<h2>Projects</h2>
					<hr />
					<Work data={data.projects} />
				</div>
			</section>
		</HidableProp>
		<HidableProp>
			<section id="interest">
				<div>
					<h2>Interests</h2>
					<hr />
					<Interest data={data.interests} />
				</div>
			</section>
		</HidableProp>
	</main>
	<footer class="web-only text-center">
		<hr />
		{#if $langSelected === 'ENG'}
			<!-- content here -->
			(See <a href={'#'} target="_blank" rel="noopener">full version</a>
			or <a href={'#'} target="_blank" rel="noopener">source</a>)
			<p>
				(You can see more projects that I had done on my <a href={data.aboutMe.github.url}>Github</a
				>)
			</p>
		{:else}
			(สามารถดู <a href={'#'} target="_blank" rel="noopener">เวอร์ชั้นเต็มได้ที่นี้</a>
			หรือ
			<a href={'https://github.com/textures1245/resume'} target="_blank" rel="noopener">ซอสโค๊ด</a>)
			<p>
				(คุณสามารถดูโปรเจคอื่น ๆและความคืยหน้าของข้าพระเจ้าได้ที่<a href={data.aboutMe.github.url}
					>Github</a
				>)
			</p>
		{/if}
		<section />
	</footer>
</div>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&family=Noto+Sans+Thai:wght@400&display=swap');
	.eng-font {
		font-family: 'Kanit', sans-serif;
	}

	.thai-font {
		font-family: 'Noto Sans Thai', sans-serif;
	}

	main {
		overflow-x: hidden;
	}

	ul li {
		@apply ml-2 md:ml-6;
	}

	button,
	a {
		text-decoration: underline;
		text-underline-offset: 0.3rem;
	}

	div p {
		@apply ml-2 md:ml-6;
	}

	a:hover,
	button:hover {
		@apply text-purple-300;
	}

	.grid-layout {
		@apply grid grid-cols-2 md:grid-cols-3  gap-4;
	}

	.theme {
		@apply bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500;
	}

	.subTheme {
		@apply bg-purple-500;
	}

	section {
		@apply my-2;
	}
	section div {
		@apply mx-6 print:mx-0;
	}

	section div h2 {
		@apply font-extrabold uppercase text-2xl md:text-3xl my-2 print:text-lg;
	}

	section div hr {
		@apply mt-0 mb-2 uppercase;
		border-color: darkgrey;
	}

	footer hr {
		@apply my-4
	}

	:global(.print-only) {
		display: none;
	}

	@media print {
		* {
			@apply text-xs;
		}

		:global(.print-only) {
			display: inherit;
		}

		:global(.web-only) {
			display: none;
		}

		ul {
			@apply pl-6;
		}

		section {
			@apply -my-1;
		}

		section div hr {
			@apply -mt-3 mb-1;
		}

		main {
			margin: 0 0;
			padding: 0;
		}
	}
</style>
