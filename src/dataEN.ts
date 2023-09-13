import { Project, Certificate, Interest, Language } from '$lib/builders';
import type { AboutMe } from '$lib/types';

const aboutMe: AboutMe = {
	fullName: 'Traiphakh Sittikaew',
	nickname: 'Phakh',
	phone: '0654209589',
	email: 'sirprak1245@gmail.com',
	github: {
		label: 'textures1245',
		url: 'https://github.com/textures1245'
	},
	linkedin: {
		label: 'textures1245',
		url: 'https://www.linkedin.com/in/traiphakh-sittikaew-b32ba8290/'
	},
	location: 'Chiang Mai, Thailand',
	website: 'https://resume-gamma-topaz.vercel.app/'
};

const objective =
	'I am actively pursuing a software engineering internship to leverage my technical skills and contribute to cutting-edge projects while expanding my knowledge in the field. As a dedicated computer science student with a solid foundation, I am excited to apply my proficiency in programming languages. My experience with essential development tools and databases positions me to make valuable contributions to your team. I am enthusiastic about working collaboratively and continuously enhancing my abilities. Joining your organization would provide me with an excellent platform to further develop as a software engineer and contribute to your innovative initiatives.';

const summary =
	"I am zealous. Passion and commitment to web development and a strong technical skill base. I am proficient in using various programming languages and tools and covering work in various fields. Also, my teamwork is very skilled. I am usually the team leader who consults and then comes to a conclusion on working together. Because I believe that working as a team should have clear goals and objectives. Including communication respecting the reasons of the team members and being open to continuous learning. Moreover, I am also a good counselor and teacher. From the fact that I have been a mentor to countless juniors and am also the head of TA (Team Assistant) who often helps juniors or Participants in the CompCamp project, which is the branch's technology and computer tutoring camp. I am committed and sincerely hope to apply the knowledge learned to actual projects to gain practical experience and participate in innovation development projects.";

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
		'Task management that can be grouped and identified by teachers along with the date of submission of work. Supports the CURD system for both single tasks and group missions.',
		'TypeScript via Angular for frontend framework and NgRx for state management, styling with CSS and TailwindCSS. Backend connecting with Node.js via ExpressJS. MySQL for database.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Node.js (ExpressJS), MySQL',
		'https://github.com/textures1245/homework-management'
	),
	new Project(
		'Booking Best',
		"Hotel reservations with hotel review boards shared in the community Check the user's real-time location to show nearby hotels. Supports user-based and CURD systems for hotel reviews shared on community boards.",
		'TypeScript via VueJS for frontend framework and Pinia for state management, styling with SCSS and TailwindCSS. Using Firebase backend connection.',
		false,
		'TypeScript (VueJS, Pinia), SCSS, TailwindCSS, Firebase',
		'https://github.com/textures1245/BookingBest-HotelApplication',
		'https://booking-best-hotel-application.vercel.app/'
	),
	new Project(
		'Blocktify (Frontend Contributed)',
		'Minecraft Workshop Client with fully customized web interface and actions. This ranges from diverse and dynamic UI customization (menus, backgrounds, layouts, widgets, boards, etc.), product CURD system, top-up management. and user and customization management, including an integrated Backend API with the web app.',
		'TypeScript via VueJS for frontend framework and Zod for type validation styling with SCSS and TailwindCSS. Firebase backend connection.',
		false,
		'TypeScript (VueJS, Zod), SCSS, TailwindCSS, Firebase',
		'https://github.com/textures1245/blocktify-template-webshop-builder'
	),
	new Project(
		'PhakhCampground',
		'A full-service campground rental website. It has a certified map display and CURD system of the camp that comes with variety and convenience such as automatic latitude and longitude determination and others. Supports multimedia data collection. and reservation system. It also supports the CURD system for comments that users can enter to give reviews.',
		'My first project, using plain EJS for HTML template, styling with CSS and Bootstrap. Node.js via ExpressJS for backend connection, MongoDB for database.',
		false,
		'EJS, CSS, Bootstrap, Node.js (ExpressJS), MongoDB',
		'https://github.com/textures1245/PhakhCampgrounds'
	),
	new Project(
		'Wishlist Management',
		'A website that can manage wish lists, supports CURD system.',
		'TypeScript via Angular for frontend framework and NgRx for state management, styling with CSS and TailwindCSS. Using Firebase real-time database.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Firebase Realtime Database',
		'https://github.com/textures1245/wishlist-app',
		'https://wishlist-management-app.web.app/'
	),
	new Project(
		'Portfolio (Standalone)',
		'Portfolio that I made during my second year as a student, using only SCSS, writing the style all by myself.',
		'SCSS',
		false,
		'SCSS',
		'https://github.com/textures1245/portfolio-static-website',
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
