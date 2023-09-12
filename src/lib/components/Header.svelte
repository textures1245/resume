<script lang="ts">
	export let langSelected: 'TH' | 'ENG';
</script>

<h1 class="text-5xl">Resume</h1>
{#if langSelected === 'ENG'}
	<div id="langENG" class="">
		<p>
			The resume for working position business, following contexts introduction, technologies and
			programming languages, educational, work experience, projects, and interests.
		</p>
	</div>
	<!-- content here -->
{:else}
	<div class="langTH">
		<p>
			ประวัติย่อสำหรับตำแหน่งงานธุรกิจ ต่อไปนี้เป็นบริบท แนะนำ เทคโนโลยีและภาษา การเขียนโปรแกรม
			การศึกษา ประสบการณ์การทำงาน โครงการ และความสนใจ
		</p>
	</div>
{/if}

<style lang="postcss">
	p {
		@apply px-6 md:px-32;
	}
</style>
