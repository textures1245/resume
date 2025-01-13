import {
	Project,
	Certificate,
	Interest,
	Language,
	WorkProject,
	WorkExperience
} from '$lib/builders';
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
	website: 'https://resume-gamma-topaz.vercel.app'
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
			'SCSS (Basic) Java, Python, Node.js, SQL (Intermediate) JavaScript/JS Notation, CSS, TypeScript, Go (strong)'
	},
	{
		section: 'Frameworks',
		details:
			'Angular, VueTS, Nuxt, Svelte, SvelteKit, TailwindCSS, Bootstrap, ExpressTS, Go web frameworks (Fiber, Gin, Gorilla Mux etc. or just native net/http) .'
	},
	{
		section: 'Tools',
		details:
			'Git, Docker-Compose, Zsh, Bash, SSH, GitHub Codespace, Prisma, MySQL, MongoDB, SQLServer, Figma.'
	},
	{
		section: 'Other',
		details:
			'Nginx, Firebase, Gitlab CI/CD, Jenkins, Vercel, Netlify, Heroku, Cloudinary, Google Cloud'
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
		gpax: '3.67',
		graduationDetail:
			'Currently in 8th term (the fourth-year, second semester), expected graduation in 2025.'
	}
];

const workExps = [
	new WorkExperience(
		'Pay Solutions, Ltd.',
		'May - Dec 2024',
		'Chiang Mai, Thailand',
		'Junior Fullstack Developer',
		'I led the development and maintenance of microservice and contributed to various in-house software projects. My responsibilities included gathering requirements, planning the architecture, and designing the database schema. I implemented core features and continuously improved them through testing and analysis, writing helper utilities to enhance functionality. Additionally, I developed end-to-end automated tests to ensure compatibility with other in-house applications integrated with the microservice. I also implemented microservice for seamless third-party integration.',
		false
	)
];

const workProject = [
	new WorkProject(
		'SureSure E-Slip Verification Microservice',
		'I contributed and was the leader of the first team to start the research and development of a core microservice that offers real-time slip verification with OCR-based scanning and  BOT (Bank of Thailand) transaction data from integration on KBANK API infrastructure. The system supports both internal service integration for in-house products and an external Open API for broader third-party use, and it unifies business logic on the Paysolution infrastructure.',
		[
			{
				name: 'Requirements Gathering & Project Planning',
				details:
					'Collaborating with the Project Manager to define business requirements and objectives '
			},
			{
				name: 'Architecture & Database Design',
				details:
					'Designed the database schema to store slip records, merchant information, and transaction logs. The architecture accounted for both internal and external services (third-party).'
			},
			{
				name: 'Implementation of Core Features',
				details:
					'Developed core OCR scanning features and integrated them with KBANK for slip validation.  Wrote business logic to compare slip data against bank records, ensuring correctness and reducing fraud.'
			},
			{
				name: 'Service Integration & Deployment',
				details:
					'Configured microservices to interact seamlessly with one another, exposing APIs for external consumers. I oversaw Docker-based and did CI/CD for deployments to ensure each service was consistently delivered and easy to scale.'
			},
			{
				name: 'Documentation & Knowledge Transfer',
				details:
					'Wrote documentation, including design considerations and usage instructions. Allowed teammates and other teams to easily follow each step of the implementation, plus reference best practices for maintenance.'
			}
		],
		'Pay Solutions, Ltd.',
		false,
		'Go (Gorilla Mux), LINE-Bot-SDK, Log (Logrus), KBANK API, PostgreSQL, DevOps (Docker Compose, Gitlab CI/CD), Monitor (Sentry & Portainer)',
		'https://github.com/textures1245/ocr-slip-to-text'
	)
];

const sideProjects = [
	new Project(
		'Comcamp CSMJU',
		'Comcamp CSMJU is an annual youth computer camp organized by the Computer Science Department of Maejo University. It is designed to promote high school students familiarity with computer science and programming. The project includes a Landing Page for promotion and a web application that supports registration and data management of camp applicants.',
		'The project utilizes Single Page Application (SPA) approach with Svelte, coupled with TypeScript for development. Styling is achieved using CSS and TailwindCSS. It connects to the server-side using Firebase (for Authentication) and Firestore (for database management), and Node.js via ExpressJS (for private Restful APIs). Cloudinary is used for media storage management.',
		false,
		'TypeScript (Svelte-SPA), CSS, TailwindCSS, Firebase, Node.js (ExpressJS), Cloudinary',
		["https://github.com/textures1245/csmju-comcamp-22nd-promote"],
		'https://comcamp.csmju.com'
	),
	new Project(
		'Blog Duaaeeg',
		'Blog Duaaeeg application, developed using SDLC, Clean Architecture, and SOLID principles. Inspired by industry leaders like Medium, this project showcases my ability to understand business requirements, perform system analysis, and implement effective full-stack solutions, from frontend design to backend integration.',
		'The project uses Go with Gin framework for the backend, PostgreSQL for the database, and Prisma ORM for schema design. JWT authentication is implemented for user security, and Docker is used for containerization. The frontend is built with SvelteKit, TypeScript, CSS, and TailwindCSS, with Axios for API communication.',
		false,
		'Tech-Stacks: Go (Gin), PostgreSQL, Prisma ORM, JWT Auth, Docker, Nginx, Supabase SvelteKit, TypeScript, CSS, TailwindCSS, Axios',
		["https://github.com/textures1245/blog-duaaeeg-application", "https://github.com/textures1245/blog-duaaeeg-rest-api-service"],
	),
	new Project(
		'Point Of Sale System',
		'The research and development project I and teammates worked as a side project to investigated how Point of Sale (POS) system work. By researched business industry and designed for e-commerce platforms. It covers various units such as account management (roles, permission etc.), product management, order processing, and more.',
	    "SvelteKit as SSR (JS Notation). Backend using Go with Fiber framework, MySQL for database, Docker for containerization, and Prisma for schema design.",
		false,
		'Go (Fiber), MySQL, Docker, Prisma, JS Notation, CSS, Bootstrap',
		['https://github.com/textures1245/pos_alpha_frontend', 'https://github.com/textures1245/pos_alpha_backend'],
	),
	new Project(
		'Homework Management',
		'Task management that can be grouped and identified by teachers along with the date of submission of work. Supports the CRUD system for both single tasks and group missions.',
		'TypeScript via Angular for frontend framework and NgRx for state management, styling with CSS and TailwindCSS. Backend connecting with Node.js via ExpressJS. MySQL for database.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Node.js (ExpressJS), MySQL',
		['https://github.com/textures1245/homework-management']
	),
	new Project(
		'Booking Best',
		"Hotel reservations with hotel review boards shared in the community Check the user's real-time location to show nearby hotels. Supports user-based and CRUD systems for hotel reviews shared on community boards.",
		'TypeScript via VueJS for frontend framework and Pinia for state management, styling with SCSS and TailwindCSS. Using Firebase backend connection.',
		false,
		'TypeScript (VueJS, Pinia), SCSS, TailwindCSS, Firebase',
		['https://github.com/textures1245/BookingBest-HotelApplication'],
		'https://booking-best-hotel-application.vercel.app'
	),
	new Project(
		'Blocktify (Frontend Contributed)',
		'Minecraft Workshop Client with fully customized web interface and actions. This ranges from diverse and dynamic UI customization (menus, backgrounds, layouts, widgets, boards, etc.), product CRUD system, top-up management. and user and customization management, including an integrated Backend API with the web app.',
		'TypeScript via VueJS for frontend framework and Zod for type validation styling with SCSS and TailwindCSS. Firebase backend connection.',
		false,
		'TypeScript (VueJS, Zod), SCSS, TailwindCSS, Firebase',
		['https://github.com/textures1245/blocktify-template-webshop-builder']
	),
	new Project(
		'PhakhCampground',
		'A full-service campground rental website. It has a certified map display and CRUD system of the camp that comes with variety and convenience such as automatic latitude and longitude determination and others. Supports multimedia data collection. and reservation system. It also supports the CRUD system for comments that users can enter to give reviews.',
		'My first project, using plain EJS for HTML template, styling with CSS and Bootstrap. Node.js via ExpressJS for backend connection, MongoDB for database.',
		false,
		'EJS, CSS, Bootstrap, Node.js (ExpressJS), MongoDB',
		['https://github.com/textures1245/PhakhCampgrounds']
	),
	new Project(
		'Wishlist Management',
		'A website that can manage wish lists, supports CRUD system.',
		'TypeScript via Angular for frontend framework and NgRx for state management, styling with CSS and TailwindCSS. Using Firebase real-time database.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Firebase Realtime Database',
		['https://github.com/textures1245/wishlist-app'],
		'https://wishlist-management-app.web.app'
	),
	new Project(
		'Portfolio (Standalone)',
		'Portfolio that I made during my second year as a student, using only SCSS, writing the style all by myself.',
		'SCSS',
		false,
		'SCSS',
		['https://github.com/textures1245/portfolio-static-website'],
		'https://portfolio-static-website.vercel.app'
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
	sideProjects,
	workProject,
	interests,
	langs,
	workExps
};
