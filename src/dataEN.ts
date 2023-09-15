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
	'My name is Traiphakh Sittikaew, a 4th year student in Computer Science. Maejo University is preparing to conduct cooperative education in software development. This is a good opportunity to apply programming skills and apply the various tools learned to real work. I am excited and ready to be a part of developing various projects with the organization. and develop yourself until you step into being a full-fledged software developer in the future';

const summary =
	"I have a passion for web development and basic technical skills. and are proficient in using programming languages and tools Including covering technical design patterns such as OOP and MVC and having the ability to work well as a team. Because I believe in clarity of goals and objectives. Therefore, I always give advice and summarize the operations of the group. And I respect team members' reasons and they are an important force in communication. I am also a mentor and teaching assistant for many juniors and am responsible for the TA (Team Assistant) role in the CompCamp project. I am committed to using my knowledge in real projects to gain experience and contribute. Participate in the full development of the organization.";
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
		'Unity Programmer Exam with C# language.  (10 hours)'
	),
	new Certificate('CSCMU Coding Challenge 2023', 'Contestant for CSCMU Coding Challenge 2023')
];

const technologies = [
	{
		section: 'Languages',
		details:
			'SCSS, Java (intermediate) Python, CSS, JavaScript, Node.js, SQL (strong) TypeScript (advanced)'
	},
	{
		section: 'Frameworks',
		details: 'Angular, VueJS, Nuxt, Svelte, SvelteKit, TailwindCSS, Bootstrap.'
	},
	{
		section: 'Tools',
		details: 'Git, Docker, Zsh, GitHub Codespaces, Prisma, MySQL, MongoDB, Figma.'
	},
	{
		section: 'Libraries/Plugins',
		details: 'Express, RxJs, NgRx, Angular Materials, Vuetify, Pinia, DaisyUI, Zod, etc.'
	},
	{
		section: 'Other',
		details: 'Nginx, Firebase, Vercel, Github Actions, Netlify, Heroku, Cloudinary, Google Cloud'
	}
];

const education = [
	{
		degree: 'Science',
		major: 'Science-Mathematics',
		university: 'San Sai Wittayakom School',
		gpax: '3.72',
		graduationDetail: 'Graduated in 2020.'
	},
	{
		degree: 'Bachelor of Science',
		major: 'Computer Science',
		university: 'Maejo University',
		gpax: '3.63',
		graduationDetail: 'Currently on 4th term, expected graduation: 2025).'
	}
];

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
		'Coding, Always find new tools to handle and reduce my tasks, Productivity & Life-hacks, Reading.'
	),
	new Interest('Running', 'Run 5KM 5 days per week, My longest run distance is 11KM.'),
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
		'I have strong reading and listening skills. and speak smoothly. My writing skills are at a moderate level.'
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
