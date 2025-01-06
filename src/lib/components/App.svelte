<script context="module" lang="ts">
	export const langSelected: Writable<'TH' | 'ENG'> = writable('ENG');
</script>

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
	import WorkProject from './WorkProject.svelte';
	import WorkExp from './WorkExp.svelte';

	let introColumnGridSetter = true;

	let data = dataEN;

	let lastedUpdated = new Date('2025-01-06').toLocaleDateString();

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

				<div class="flex justify-center items-center gap-6">
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
			class="grid-layout font-semibold print:-space-y-4 mb-3 mx-6 place-items-center"
		>
			<Introduction isColumnGrid={introColumnGridSetter} data={data.aboutMe} />
		</section>

		<HidableProp>
			<section id="objective" class="">
				<div class="">
					<h2>Objective</h2>
					<hr />
					<p class="indent-4">{data.objective}</p>
				</div>
			</section>
		</HidableProp>
		<HidableProp>
			<section id="summary">
				<div class="">
					<h2>Summary</h2>
					<hr />
					<p class="indent-4">{data.summary}</p>
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="education">
				<div class="">
					<h2>Education</h2>
					<hr />
					<ul class="list-disc print:-ml-6 list-inside">
						{#each data.education as edu}
							<li class="break-words">
								<span class="font-semibold">{edu.degree}, {edu.major} </span>
								{$langSelected == 'ENG' ? 'at' : 'ที่'}
								<span class="font-semibold">{edu.university} (GPAX: {edu.gpax}).</span>
								{edu.graduationDetail}
							</li>
						{/each}
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
								<li>
									<span class="w-16 inline-flex !font-[900]">{lang.lang}</span>
									<span>({lang.level})</span>
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
									<span class="web-only">( {cert.details} )</span>
								</li>
							</HidableProp>
						{/each}
					</ul>
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="work-projects">
				<div>
					<h2>Work Experience</h2>
					<hr />
					<WorkExp data={data.workExps} />
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="work-projects">
				<div>
					<h2>Work Projects</h2>
					<hr />
					<WorkProject data={data.workProject} />
				</div>
			</section>
		</HidableProp>

		<HidableProp>
			<section id="side-projects">
				<div>
					<h2>Side Projects</h2>
					<hr />
					<Work data={data.sideProjects} />
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
			<span>
				(See <a href={'#'} target="_blank" rel="noopener">full version</a> or
			</span>

			<a href={'https://github.com/textures1245/resume'} target="_blank" rel="noopener">source</a>)
			<p class="m-0">
				(You can see more projects that I had done on my <a href={data.aboutMe.github.url}>Github</a
				>)
			</p>
			<p class="m-0 text-slate-500">Last updated : {lastedUpdated}</p>
		{:else}
			(สามารถดู <a href={'#'} target="_blank" rel="noopener">เวอร์ชั้นเต็มได้ที่นี้</a>
			หรือ
			<a href={'https://github.com/textures1245/resume'} target="_blank" rel="noopener">ซอสโค๊ด</a>)
			<p class="m-0">
				(คุณสามารถดูโปรเจคอื่น ๆและความคืบหน้าของกระผมได้ที่<a href={data.aboutMe.github.url}
					>Github</a
				>)
			</p>
			<p class="m-0 text-slate-500">อัปเดตครั้งล่าสุดเมื่อ : {lastedUpdated}</p>
		{/if}
		<section />
	</footer>
</div>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&family=Noto+Sans+Thai+Looped:wght@300&family=Noto+Serif+Thai:wght@300&display=swap');
	.eng-font {
		font-family: 'Kanit', sans-serif;
	}

	.thai-font {
		font-family: 'Noto Sans Thai Looped', sans-serif;
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
		text-underline-offset: 0.2rem;
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
		@apply mx-6 print:mx-0 text-sm md:text-base;
	}

	footer {
		@apply text-sm md:text-base;
	}

	section div h2 {
		@apply font-extrabold uppercase text-2xl md:text-3xl my-2 print:text-lg;
	}

	section div hr {
		@apply mt-0 mb-2 uppercase;
		border-color: darkgrey;
	}

	footer hr {
		@apply my-4;
	}

	:global(.print-only) {
		display: none;
	}

	@media print {
		p {
			text-wrap: balance;
			@apply mr-2;
		}

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
			@apply my-0;
		}

		section div hr {
			@apply -mt-2 mb-1;
		}

		main {
			margin: 0 0;
			padding: 0;
		}

		::-webkit-scrollbar {
			display: none;
		}
	}
</style>
