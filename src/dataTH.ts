import { Certificate, Project, Interest, Language } from '$lib/builders';

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
		details: 'SCSS, Java (ระดับกลาง) Python, CSS, JavaScript, Node.js, SQL (ดี) TypeScript (ดีมาก)'
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
		graduationDetail: 'กำลังศึกษาภาคเรียนที่ 4 คาดว่าจะสำเร็จในปี 2025'
	}
];

const projects = [
	new Project(
		'Homework Management',
		'การจัดการงานภารกิจที่สามารถจัดกลุ่มและระบุอาจารย์พร้อมกับวันที่ส่งงาน. รองรับระบบ CRUD ทั้งงานเดียวและงานภารกิจแบบกลุ่ม.',
		'TypeScript ผ่าน Angular เป็นกรอบการทำงานด้านหน้าและ NgRx สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย CSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Node.js ผ่าน ExpressJS. MySQL สำหรับฐานข้อมูล.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Node.js (ExpressJS), MySQL',
		'https://github.com/textures1245/homework-management'
	),
	new Project(
		'Booking Best',
		'การจองโรงแรมพร้อมกับบอร์ดรีวิวโรงแรมที่แชร์ในชุมชน ตรวจสอบตำแหน่งผู้ใช้แบบเรียลไทม์เพื่อแสดงโรงแรมที่อยู่ใกล้กัน รองรับการใช้งานจากผู้ใช้และระบบ CRUD สำหรับการรีวิวโรงแรมที่แชร์ในบอร์ดของชุมชน',
		'TypeScript ผ่าน VueJS สำหรับกรอบการทำงานด้านหน้าและ Pinia สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย SCSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Firebase.',
		false,
		'TypeScript (VueJS, Pinia), SCSS, TailwindCSS, Firebase',
		'https://github.com/textures1245/BookingBest-HotelApplication',
		'https://booking-best-hotel-application.vercel.app'
	),
	new Project(
		'Blocktify (Frontend Contributed)',
		'ไคลเอ็นต์เวิร์กชอป Minecraft พร้อมกับการปรับแต่งอินเตอร์เฟซเว็บและแอคชั่นที่สมบูรณ์แบบ โดยมีตั้งแต่การปรับแต่ง UI ที่มีความหลากหลายและเป็นแบบไดนามิก (เมนู​, พื้นหลัง,เลย์เอาท์, วิดเจท, บอร์ด และอื่น ๆ) ระบบ CRUD ของสินค้า การจัดการเติมเงิน และการจัดการส่วนของผู้ใช้และการตกแต่ง รวมถึงการ integrated Backend API รวมกับเว็บแอป',
		'TypeScript ผ่าน VueJS สำหรับกรอบการทำงานด้านหน้าและ Zod สำหรับการตรวจสอบประเภท การจัดรูปแบบด้วย SCSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Firebase.',
		false,
		'TypeScript (VueJS, Zod), SCSS, TailwindCSS, Firebase',
		'https://github.com/textures1245/blocktify-template-webshop-builder'
	),
	new Project(
		'PhakhCampground',
		'เว็บไซต์ให้เช่าพื้นที่แคมป์ที่รองรับทั้งผู้เข้าชมและเจ้าของแคมป์ โดยมีการรับรองการแสดงแผนที่ และระบบ CRUD ของแคมป์ที่มาความหลากหลายและความสะดวกสะบาย อาทิเช่น กำหนดละติจูดและลองติจูดแบบอัตโนมัติ และอื่น ๆ รอบรับการเก็บข้อมูลแบบมัลติมีเดีย และระบบการจองที่ อีกทั้งรอบรับระบบ CRUD ของคอมเมนต์ที่ผู้ใช้สามารถเข้าไปให้รีวิวได้',
		'โปรเจ็คแรกของกระผม ใช้ EJS ธรรมดาสำหรับเทมเพลต HTML, การจัดรูปแบบด้วย CSS และ Bootstrap. Node.js ผ่าน ExpressJS สำหรับการเชื่อมต่อกับเซิร์ฟเวอร์, MongoDB สำหรับฐานข้อมูล และ Clondinary สำหรับเก็บไฟล์ประมัลติมีเดีย',
		false,
		'EJS, CSS, Bootstrap, Node.js (ExpressJS), MongoDB',
		'https://github.com/textures1245/PhakhCampgrounds'
	),
	new Project(
		'Wishlist Management',
		'ไวต์ไซต์ที่สามารถจัดการรายการสิ่งที่ต้องการได้ รอบรับระบบ CRUD',
		'TypeScript ผ่าน Angular สำหรับกรอบการทำงานด้านหน้าและ NgRx สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย CSS และ TailwindCSS. ใช้ฐานข้อมูลแบบเรียลไทม์จาก Firebase.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Firebase ฐานข้อมูลแบบเรียลไทม์',
		'https://github.com/textures1245/wishlist-app',
		'https://wishlist-management-app.web.app'
	),
	new Project(
		'Portfolio (standalone)',
		'Portfolio ที่ทำช่วงตอนเป็นนักศึกษาปีที่ 2 ใช้เฉพาะแค่ SCSS เท่านั้น เขียน Style เองทั้งหมด',
		'SCSS',
		false,
		'SCSS',
		'https://github.com/textures1245/portfolio-static-website',
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
		'กระผมมีทักษะด้านภาษาอังกฤษการอ่านและการฟังที่ดี และพูดสื่อสารได้อย่างราบรื่น โดยทักษะการเขียนของกระผมอยู่ในระดับปานกลาง'
	)
];

export const dataTH = {
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
