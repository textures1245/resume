import { Project, Certificate, Interest, Language } from '$lib/builders';
import type { AboutMe } from '$lib/types';

const aboutMe: AboutMe = {
	fullName: 'Traiphakh Sittikaew',
	nickname: 'Phakh',
	phone: '0654209589',
	email: 'sirprak1245@gmail.com',
	github: {
		label: 'textures1245',
		url: ''
	},
	linkedin: {
		label: 'textures1245',
		url: ''
	},
	location: 'Chiang Mai, Thailand',
	website: ''
};

const objective =
	'I am actively pursuing a software engineering internship to leverage my technical skills and contribute to cutting-edge projects while expanding my knowledge in the field. As a dedicated computer science student with a solid foundation, I am excited to apply my proficiency in programming languages. My experience with essential development tools and databases positions me to make valuable contributions to your team. I am enthusiastic about working collaboratively and continuously enhancing my abilities. Joining your organization would provide me with an excellent platform to further develop as a software engineer and contribute to your innovative initiatives.';

const summary =
	'I am an enthusiastic with a passion for web development and a strong technical foundation. I am proficient in a wide range of programming languages and frameworks, including JavaScript, TypeScript, Angular, VueJS, and more. I am skilled in using essential tools like Git, Docker, and databases such as MySQL, MongoDB, and PostgreSQL. I am committed to delivering high-quality software solutions and eager to apply my classroom knowledge to real-world projects. I am adept at collaborating with teams and open to continuous learning. I am seeking a software engineering internship to gain hands-on experience and contribute to innovative development projects.';

const certificates = [
	new Certificate(
		'Udemy: The Complete 2020 Web Development Bootcamp.',
		'Fullstack web development course (EJS, Javascript, NodeJs, ExpressJS, and MongoDB) (63.5 hours)'
	),
	new Certificate(
		'Udemy: Angular - The Complete Guide (2022 Edition).',
		'Full Angular course with RxJS and NgRx for state management (35 hours)'
	),
	new Certificate(
		'Udemy: Angular & NodeJS - The MEAN Stack Guide.',
		'Full MEAN stack course (MongoDB, ExpressJS, Angular, and NodeJS) deployed on AWS (12.5 hours)'
	),
	new Certificate(
		'Unity: Unity Certified Programmer Exam Preparation Course.',
		'Unity Programmer Exam with C# language  (10 hours)'
	),
	new Certificate('CSCMU Coding Challenge 2023', 'Contestant for CSCMU Coding Challenge 2023')
];

const technologies = [
	{
		section: 'Languages',
		details:
			'Assembly, Java (intermediate). Python, SCSS, JavaScript, Node.js, SQL (strong). TypeScript (proficient).'
	},
	{
		section: 'Frameworks',
		details: 'Angular, VueJS, Nuxt, Svelte, SvelteKit, TailwindCSS, Bootstrap.'
	},
	{
		section: 'Tools',
		details:
			'Git, Docker, Kubernetes, Zsh, GitHub Codespaces, Prisma, MySQL, MongoDB, PostgreSQL, Eslint,  Figma.'
	},
	{
		section: 'Libraries/Plugins',
		details: 'Express, RxJs, NgRx, Angular Materials, Vuetify, Pinia, DaisyUI, Zod, etc.'
	},
	{
		section: 'Other',
		details:
			'Nginx, Firebase, Vercel, Github Actions, CloudFlare, Netlify, Heroku, Cloudinary, Google Cloud, AWS'
	}
];

const education = {
	degree: 'Bachelor of Science',
	major: 'Computer Science',
	university: 'Maejo University',
	graduationDetail: 'GPA: 3.63 (Currently on 4th term), expected graduation: 2025)'
};

const projects = [
	new Project(
		'Homework Management',
		'Manageable assignments and instructors tag along with due dates. Support group assignments. ',
		'TypeScript via Angular for frontend framework and NgRx for state management, styling with CSS and TailwindCSS. Backend connecting with Node.js via ExpressJS. MySQL for database.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Node.js (ExpressJS), MySQL'
	),
	new Project(
		'Booking Best',
		'Hotel booking with hotel review board sharing community. Real-time user locate detection via show nearby hotel. ',
		'TypeScript via VueJS for frontend framework and Pinia for state management, styling with SCSS and TailwindCSS. Using Firebase backend connection.',
		false,
		'TypeScript (VueJS, Pinia), SCSS, TailwindCSS, Firebase',
		'https://booking-best-hotel-application.vercel.app/'
	),
	new Project(
		'Blocktify (Frontend Contributed)',
		'Minecraft workshop client with fully support website UI config modification.',
		'TypeScript via VueJS for frontend framework and Zod for type validation styling with SCSS and TailwindCSS. Firebase backend connection.',
		false,
		'TypeScript (VueJS, Zod), SCSS, TailwindCSS, Firebase'
	),
	new Project(
		'PhakhCampground',
		'Campgrounds rental website, fully supporting both viewers and owners. ',
		'My first project, using plain EJS for HTML template, styling with CSS and Bootstrap. Node.js via ExpressJS for backend connection, MongoDB for database.',
		false,
		'EJS, CSS, Bootstrap, Node.js (ExpressJS), MongoDB'
	),
	new Project(
		'Wishlist Management',
		'Manageable wishlists',
		'TypeScript via Angular for frontend framework and NgRx for state management, styling with CSS and TailwindCSS. Using Firebase real-time database.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Firebase Realtime Database',
		'https://wishlist-management-app.web.app/'
	),
	new Project(
		'Portfolio (old school ver.)',
		'Portfolio that I made during my second year as a student, using only SCSS, writing the style all by myself.',
		'SCSS',
		false,
		'SCSS',
		'https://portfolio-static-website.vercel.app/'
	)
];

const interests = [
	new Interest(
		'Potential Development',
		'Coding, Always find new tools to handle and reduce my tasks, Productivity & Life-hacks, Reading'
	),
	new Interest('Running', 'Run 5KM 5 days per week, My longest run distance is 11KM'),
	new Interest(
		'Music',
		"I'm a music lover. When I have free time, I usually play the guitar or listen to music. "
	),
	new Interest(
		'Pets',
		'I have 1 dog and 2 cats. When I feel lonely or bored, I usually play with them.'
	)
];

const langs = [
	new Language('Thai', 'Native'),
	new Language(
		'English',
		'Strong',
		'I have a proficient reading and listening comprehension, and I can speak smoothly with an almost fluent accent. My writing skills are intermediate.'
	)
];

export const dataEN = {
	aboutMe,
	objective,
	summary,
	certificates,
	technologies,
	education,
	projects,
	interests,
	langs
};
