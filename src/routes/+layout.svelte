<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&family=Noto+Sans+Thai:wght@300&display=swap');
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

	a:hover,
	button:hover {
		@apply text-purple-300;
	}

	.grid-layout {
		@apply grid grid-cols-1 md:grid-cols-3 gap-4;
	}

	.theme {
		@apply bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500;
	}

	.subTheme {
		@apply bg-purple-500;
	}

	section {
		@apply my-4;
	}
	section div {
		@apply mx-10;
	}

	section div h2 {
		@apply font-extrabold text-2xl md:text-3xl my-2;
	}

	section div hr {
		@apply mt-0 mb-2 uppercase;
		border-color: darkgrey;
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
			@apply my-2;
		}

		section hr {
			@apply mt-0 mb-1;
		}

		main {
			margin: 0 0;
			padding: 0;
		}
	}
</style>
