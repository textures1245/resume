import {
	Certificate,
	Project,
	Interest,
	Language,
	WorkProject,
	WorkExperience
} from '$lib/builders';

const aboutMe = {
	fullName: 'ไตรภาค สิทธิแก้ว',
	nickname: 'ภาค',
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
	location: 'เชียงใหม่, ประเทศไทย',
	website: 'https://resume-gamma-topaz.vercel.app'
};

const objective =
	'กระผม นายไตรภาค สิทธิแก้ว นักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้กำลังเตรียมความพร้อมในการทำสหกิจศึกษาในด้านการพัฒนาซอฟต์แวร์ ซึ่งเป็นโอกาสที่ดีในการประยุกต์ใช้ทักษะการเขียนโปรแกรมและนำเครื่องมือต่างๆที่ได้ศึกษาไปประยุกต์ใช้กับงานจริง ซึ่งกระผมมีความตื่นเต้นพร้อมเป็นส่วนหนึ่งในการพัฒนาโปรเจกต์ต่างๆร่วมกับทางองค์กร และพัฒนาตนเองจนก้าวเข้าสู่การเป็นนักพัฒนาซอฟต์แวร์อย่างเต็มรูปแบบในอนาคต';

const summary =
	'กระผมเป็นคนที่มีความหลงใหลในการพัฒนาเว็บและพื้นฐานทักษะทางเทคนิค และมีความเชี่ยวชาญในการใช้ภาษาและเครื่องมือการเขียนโปรแกรม รวมถึงครอบคลุมเรื่องเทคนิค Design patterns เช่น OOP และ MVC อีกทั้งยังมีความสามารถในการทำงานเป็นทีมได้ดี เนื่องจากกระผมเชื่อในความชัดเจนของเป้าหมายและวัตถุประสงค์ ดังนั้นกระผมจึงมักให้คำปรึกษาและสรุปการดำเนินงานของกลุ่มอยู่เสมอ  และกระผมเคารพเหตุผลของสมาชิกในทีมและเป็นกำลังสำคัญในการสื่อสาร อีกทั้งยังเป็นที่ปรึกษาและผู้ช่วยสอนให้กับรุ่นน้องหลายคนและรับผิดชอบส่วนของการเป็น TA (Team Assistant) ในโครงการ CompCamp กระผมมุ่งมั่นที่จะใช้ความรู้ของกระผมในโครงการอย่างจริงจังเพื่อรับประสบการณ์และมีส่วนร่วมในการพัฒนาองค์กรอย่างเต็มรูปแบบ';
const certificates = [
	new Certificate(
		'Udemy: The Complete 2020 Web Development Bootcamp.',
		'คอร์สการพัฒนาเว็บฟูลสแต็ก (EJS, Javascript, NodeJs, ExpressJS และ MongoDB) (63.5 ชั่วโมง)'
	),
	new Certificate(
		'Udemy: Angular - The Complete Guide (2022 Edition).',
		'คอร์ส Angular เต็มรูปแบบพร้อมกับ RxJS และ NgRx สำหรับการจัดการสถานะ (35 ชั่วโมง)'
	),
	new Certificate(
		'Udemy: Angular & NodeJS - The MEAN Stack Guide.',
		'คอร์ส MEAN stack เต็มรูปแบบ (MongoDB, ExpressJS, Angular, และ NodeJS) ที่ได้รับการส่งตัวบน AWS (12.5 ชั่วโมง)'
	),
	new Certificate(
		'Unity: Unity Certified Programmer Exam Preparation Course.',
		'คอร์สเตรียมสอบ Unity Certified Programmer ด้วยภาษา C# (10 ชั่วโมง)'
	),
	new Certificate(
		'CSCMU Coding Challenge 2023',
		'เป็นผู้เข้าแข่งขันในการแข่งขันการเขียนโค้ด CSCMU ปี 2023'
	)
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
		degree: 'วิทยาศาสตร์',
		major: 'วิทยาศาสตร์-คณิตศาสตร์',
		university: 'โรงเรียนสันทรายวิทยาคม',
		gpax: '3.72',
		graduationDetail: 'สำเร็จการศึกษาในปี 2020'
	},
	{
		degree: 'ปริญญาตรีวิทยาศาสตร์',
		major: 'วิทยาการคอมพิวเตอร์',
		university: 'มหาวิทยาลัยแม่โจ้',
		gpax: '3.63',
		graduationDetail: 'กำลังศึกษาภาคเรียนที่ 6 (ปี 3 เทอม 2) โดยคาดว่าจะสำเร็จในปี 2025'
	}
];

const workExps = [
	new WorkExperience(
		'Pay Solutions, Ltd.',
		'เม.ย - ธ.ค 2024',
		'เชียงใหม่, ประเทศไทย',
		'Junior Fullstack Developer',
		'เป็นคนนำในการพัฒนาและบำรุงรักษา Microservice และมีส่วนร่วมในโครงการซอฟต์แวร์ภายในหลายโครงการ ซึ่งได้รับมอบหมายตั้งแต่การรวบรวมความต้องการ การวางแผนสถาปัตยกรรม และการออกแบบสคีมาฐานข้อมูล ผมได้พัฒนาฟีเจอร์หลักและปรับปรุงอย่างต่อเนื่องผ่านการทดสอบและการวิเคราะห์ รวมถึงเขียนโปรแกรมช่วยเหลือ (Helper Utilizes) เพื่อเพิ่มประสิทธิภาพ นอกจากนี้ ผมยังพัฒนาการทดสอบอัตโนมัติ (Automated Test) แบบ end-to-end เพื่อให้แน่ใจว่ามีความเข้ากันได้กับ In-houses Application อื่น ๆ ที่รวมกับ Microservice อีกทั้งได้พัฒนา Microservice เพิ่มเติมเพื่อที่สามารถให้ Third-Party ใช้งานร่วม (Open API) ',
		false
	)
];

const workProject = [
	new WorkProject(
		'SureSure Slip Verification Microservice',
		'เป็นคนนำและเป็นหนึ่งในทีมแรกที่เริ่มวิจัยและพัฒนาไมโครเซอร์วิสหลักที่ให้บริการตรวจสอบสลิปแบบเรียลไทม์ด้วยการสแกน OCR และข้อมูลธุรกรรมของ BOT (ธนาคารแห่งประเทศไทย) จากการบูรณาการบนโครงสร้างพื้นฐาน API ของ KBANK โดยระบบนี้รองรับการรวมบริการภายในสำหรับผลิตภัณฑ์ในองค์กรและ Open API ภายนอกสำหรับการใช้งานของ Third-Party รวมถึงพัฒนา Business Logic บน Pay Solution Infrastructure',
		[
			{
				name: 'การรวบรวมความต้องการและการวางแผนโครงการ',
				details:
					'ร่วมมือกับ Project Manager เพื่อกำหนดความต้องการทางธุรกิจและวัตถุประสงค์'
			},
			{
				name: 'การออกแบบสถาปัตยกรรมและฐานข้อมูล',
				details:
					'ออกแบบสคีมาฐานข้อมูลเพื่อเก็บบันทึกสลิป ข้อมูลผู้ค้า และบันทึกการทำธุรกรรม สถาปัตยกรรมนี้รองรับทั้งบริการภายในและภายนอก (Third-party integration)'
			},
			{
				name: 'การพัฒนาฟีเจอร์หลัก',
				details:
					'พัฒนาฟีเจอร์การสแกน OCR หลักและเชื่อมต่อกับ KBANK เพื่อการตรวจสอบสลิป เขียนตรรกะทางธุรกิจเพื่อเปรียบเทียบข้อมูลสลิปกับบันทึกของธนาคาร เพื่อให้แน่ใจว่าถูกต้องและลดการฉ้อโกง'
			},
			{
				name: 'การรวมบริการและการปรับใช้',
				details:
					'กำหนดค่าไมโครเซอร์วิสให้ทำงานร่วมกันได้อย่างราบรื่น โดยเปิดเผย API สำหรับผู้บริโภคภายนอก อีกทั้งดูแลการปรับใช้ด้วย Docker และทำ CI/CD เพื่อให้แน่ใจว่าบริการแต่ละอย่างถูกส่งมอบอย่างสม่ำเสมอและง่ายต่อการขยาย'
			},
			{
				name: 'การจัดทำเอกสารและการถ่ายทอดความรู้',
				details:
					'เป็นผู้นำในการจัดทำเอกสารแนวทาง รวมถึงการพิจารณาด้านการออกแบบและคำแนะนำการใช้งาน ซึ่งช่วยให้เพื่อนร่วมทีมและทีมอื่น ๆ สามารถติดตามแต่ละขั้นตอนของการดำเนินการได้อย่างง่ายดาย รวมถึงอ้างอิงแนวปฏิบัติที่ดีที่สุดสำหรับการบำรุงรักษา'
			}
		],
		'Pay Solutions, Ltd.',
		false,
		'Go (Gorilla Mux), LINE-Bot-SDK, Log (Logrus), KBANK API, PostgreSQL, DevOps (Docker Compose, Gitlab CI/CD), Monitor (Sentry & Portainer)',
		'-'
	)
];

const sideProjects = [
	new Project(
		'Comcamp CSMJU',
		'เป็นค่ายคอมพิวเตอร์เยาวชนที่จัดขึ้นเป็นประจำทุกปีที่ ของสาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้ โดยออกแบบมาเพื่อโปรโมตนักเรียนมัธยมปลายให้รู้จักกับวิทยาการคอมพิวเตอร์และการเขียนโปรแกรม ประกอบไปด้วย Landing Page ที่ไว้โปรโมต และเว็บแอปพลิเคชันที่รองรับการลงทะเบียนและการจัดการข้อมูลของผู้ลงสมัครค่าย',
		'ใช้ Svelte แบบ SPA ในการพัฒนาร่วมกับ Typescript การจัดรูปแบบด้วย CSS และ TailwindCSS. เชื่อมต่อกับตัวเซิร์ฟเวอร์ไซต์ด้วย Firebase (Authentication) และ Firestore (สำหรับจัดการฐานข้อมูล) และ Node.js ผ่าน ExpressJS. (สำหรับ Private Restful APIs) และ Cloundinary สำหรับจัดการ Media Storage',
		false,
		'TypeScript (Svelte-SPA), CSS, TailwindCSS, Firebase, Node.js (ExpressJS), Cloundinary',
		["https://github.com/textures1245/csmju-comcamp-22nd-promote"],
		'https://comcamp.csmju.com'
	),
	new Project(
		'Point Of Sale System',
		'โปรเจควิจัยและพัฒนาที่ผมและทีมทำขึ้นเป็นไซด์โปรเจค (side project) เพื่อศึกษาวิธีการทำงานของระบบ Point of Sale (POS) โดยได้ทำการศึกษาอุตสาหกรรมธุรกิจและออกแบบเพื่อให้รองรับแพลตฟอร์ม E-commerce โดยครอบคลุมหน่วยงานย่อยหลายด้าน เช่น การจัดการบัญชีผู้ใช้ (roles, permission เป็นต้น), การจัดการสินค้า, การประมวลผลคำสั่งซื้อ และอื่น ๆ',
		'SvelteKit ทำงานในรูปแบบ SSR (JS Notation) โดยมี Backend ใช้ Go ร่วมกับ Fiber framework, ฐานข้อมูลเป็น MySQL, ใช้ Docker สำหรับ containerization, และ Prisma สำหรับการออกแบบสคีมา',
		false,
		'Go (Fiber), MySQL, Docker, Prisma, JS Notation, CSS, Bootstrap',
		[
			'https://github.com/textures1245/pos_alpha_frontend',
			'https://github.com/textures1245/pos_alpha_backend'
		],
	),
	new Project(
		'Homework Management',
		'การจัดการงานภารกิจที่สามารถจัดกลุ่มและระบุอาจารย์พร้อมกับวันที่ส่งงาน. รองรับระบบ CRUD ทั้งงานเดียวและงานภารกิจแบบกลุ่ม.',
		'TypeScript ผ่าน Angular เป็นกรอบการทำงานด้านหน้าและ NgRx สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย CSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Node.js ผ่าน ExpressJS. MySQL สำหรับฐานข้อมูล.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Node.js (ExpressJS), MySQL',
		['https://github.com/textures1245/homework-management'],
	),
	new Project(
		'Booking Best',
		'การจองโรงแรมพร้อมกับบอร์ดรีวิวโรงแรมที่แชร์ในชุมชน ตรวจสอบตำแหน่งผู้ใช้แบบเรียลไทม์เพื่อแสดงโรงแรมที่อยู่ใกล้กัน รองรับการใช้งานจากผู้ใช้และระบบ CRUD สำหรับการรีวิวโรงแรมที่แชร์ในบอร์ดของชุมชน',
		'TypeScript ผ่าน VueJS สำหรับกรอบการทำงานด้านหน้าและ Pinia สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย SCSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Firebase.',
		false,
		'TypeScript (VueJS, Pinia), SCSS, TailwindCSS, Firebase',
		['https://github.com/textures1245/BookingBest-HotelApplication'],
		'https://booking-best-hotel-application.vercel.app'
	),
	new Project(
		'Blocktify (Frontend Contributed)',
		'ไคลเอ็นต์เวิร์กชอป Minecraft พร้อมกับการปรับแต่งอินเตอร์เฟซเว็บและแอคชั่นที่สมบูรณ์แบบ โดยมีตั้งแต่การปรับแต่ง UI ที่มีความหลากหลายและเป็นแบบไดนามิก (เมนู​, พื้นหลัง,เลย์เอาท์, วิดเจท, บอร์ด และอื่น ๆ) ระบบ CRUD ของสินค้า การจัดการเติมเงิน และการจัดการส่วนของผู้ใช้และการตกแต่ง รวมถึงการ integrated Backend API รวมกับเว็บแอป',
		'TypeScript ผ่าน VueJS สำหรับกรอบการทำงานด้านหน้าและ Zod สำหรับการตรวจสอบประเภท การจัดรูปแบบด้วย SCSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Firebase.',
		false,
		'TypeScript (VueJS, Zod), SCSS, TailwindCSS, Firebase',
		['https://github.com/textures1245/blocktify-template-webshop-builder']
	),
	new Project(
		'PhakhCampground',
		'เว็บไซต์ให้เช่าพื้นที่แคมป์ที่รองรับทั้งผู้เข้าชมและเจ้าของแคมป์ โดยมีการรับรองการแสดงแผนที่ และระบบ CRUD ของแคมป์ที่มาความหลากหลายและความสะดวกสะบาย อาทิเช่น กำหนดละติจูดและลองติจูดแบบอัตโนมัติ และอื่น ๆ รอบรับการเก็บข้อมูลแบบมัลติมีเดีย และระบบการจองที่ อีกทั้งรอบรับระบบ CRUD ของคอมเมนต์ที่ผู้ใช้สามารถเข้าไปให้รีวิวได้',
		'โปรเจ็คแรกของกระผม ใช้ EJS ธรรมดาสำหรับเทมเพลต HTML, การจัดรูปแบบด้วย CSS และ Bootstrap. Node.js ผ่าน ExpressJS สำหรับการเชื่อมต่อกับเซิร์ฟเวอร์, MongoDB สำหรับฐานข้อมูล และ Clondinary สำหรับเก็บไฟล์ประมัลติมีเดีย',
		false,
		'EJS, CSS, Bootstrap, Node.js (ExpressJS), MongoDB',
		['https://github.com/textures1245/PhakhCampgrounds']
	),
	new Project(
		'Wishlist Management',
		'ไวต์ไซต์ที่สามารถจัดการรายการสิ่งที่ต้องการได้ รอบรับระบบ CRUD',
		'TypeScript ผ่าน Angular สำหรับกรอบการทำงานด้านหน้าและ NgRx สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย CSS และ TailwindCSS. ใช้ฐานข้อมูลแบบเรียลไทม์จาก Firebase.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Firebase ฐานข้อมูลแบบเรียลไทม์',
		['https://github.com/textures1245/wishlist-app'],
		'https://wishlist-management-app.web.app'
	),
	new Project(
		'Portfolio (standalone)',
		'Portfolio ที่ทำช่วงตอนเป็นนักศึกษาปีที่ 2 ใช้เฉพาะแค่ SCSS เท่านั้น เขียน Style เองทั้งหมด',
		'SCSS',
		false,
		'SCSS',
		['https://github.com/textures1245/portfolio-static-website'],
		'https://portfolio-static-website.vercel.app'
	)
];

const interests = [
	new Interest(
		'การปรับปรุงศักยภาพตัวเอง',
		'การเขียนโค้ด, มักจะหาเครื่องมือใหม่ๆ สำหรับจัดการและลดงานอยู่เสมอ, การเพิ่มประสิทธิภาพและเคล็ดลับในการดำเนินชีวิตและพัฒนาชีวิต, การอ่าน'
	),
	new Interest('การวิ่ง', 'วิ่ง 5 กิโลเมตร 5 วันต่อสัปดาห์, โดยวิ่งที่ไกลที่สุดคือ 11 กิโลเมตร'),
	new Interest(
		'ดนตรี',
		'กระผมเป็นคนชอบฟังดนตรี เมื่อกระผมมีเวลาว่าง มักจะชอบฟังเพลง หรือเล่นกีตาร์และค่อยฝึกฝนเพือพัฒนาการเล่นอยู่เสมอ'
	),
	new Interest(
		'สัตว์เลี้ยง',
		'กระผมมีสุนัข 1 ตัวและแมว 2 ตัว โดยมักจะเล่นกับพวกเขาเมื่อรู้สึกเหงาหรือเบื่อ หรือตอนที่พวกเขามารบกวนผม'
	)
];

const langs = [
	new Language('Thai', 'เนทีฟ'),
	new Language(
		'English',
		'ดี',
		'กระผมมีทักษะด้านภาษาอังกฤษการอ่านและการฟังที่ดี พูดสื่อสารได้อย่างราบรื่น ทักษะการเขียนของกระผมอยู่ในระดับปานกลาง'
	)
];

export const dataTH = {
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
