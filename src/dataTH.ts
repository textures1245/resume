import { Certificate, Project, Interest, Language } from '$lib/builders';

const aboutMe = {
	fullName: 'ไตรภาค สิทธิแก้ว',
	nickname: 'ภาค',
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
	location: 'เชียงใหม่, ประเทศไทย',
	website: ''
};

const objective =
	'ข้าพระเจ้ากำลังมุ่งหน้าที่จะดำเนินการสหกิจศึกษาด้านวิศวกรรมซอฟต์แวร์เพื่อใช้ทักษะทางเทคนิคของฉันและมีส่วนร่วมในโครงการที่ทันสมัยในขณะที่ขยายความรู้ในสาขานี้ ในฐานะนักศึกษาวิทยาการคอมพิวเตอร์ที่มีมูลฐานแข็งแกร่ง ฉันตื่นเต้นที่จะใช้ความเชี่ยวชาญของฉันในภาษาโปรแกรม ประสบการณ์ของฉันในเครื่องมือพัฒนาพื้นฐานและฐานข้อมูลสำคัญ ทำให้ฉันสามารถมีส่วนร่วมที่มีคุณค่าในทีมของคุณ ฉันกระตือรือร้นที่จะทำงานร่วมกันและพัฒนาความสามารถของฉันอย่างต่อเนื่อง การเข้าร่วมองค์กรของคุณจะให้ฉันได้รับโอกาสที่ยอดเยี่ยมในการพัฒนาตัวเองในฐานะวิศวกรซอฟต์แวร์และมีส่วนร่วมในโครงการนวัตกรรมของคุณ.';

const summary =
	'ข้าพระเจ้ากระตือรือร้นและมุ่งมั่นที่มีความหลงใหลในการพัฒนาเว็บและมีฐานทักษะทางเทคนิคที่แข็งแกร่ง ฉันเชี่ยวชาญในการใช้ภาษาโปรแกรมหลากหลายและกรอบการทำงานต่าง ๆ เช่น JavaScript, TypeScript, Angular, VueJS และอื่น ๆ ฉันมีความชำนาญในการใช้เครื่องมือสำคัญ เช่น Git, Docker, และฐานข้อมูลเช่น MySQL, MongoDB, และ PostgreSQL ฉันมุ่งมั่นที่จะนำความรู้ที่เรียนในห้องเรียนมาใช้ในโครงการจริง ๆ ฉันเชี่ยวชาญในการทำงานร่วมกับทีมและเปิดรับการเรียนรู้อย่างต่อเนื่อง ฉันกำลังมองหาโอกาสในการฝึกงานด้านวิศวกรรมซอฟต์แวร์เพื่อได้รับประสบการณ์ในการปฏิบัติงานและมีส่วนร่วมในโครงการพัฒนานวัตกรรม.';

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
			'Assembly, Java (ระดับกลาง). Python, SCSS, JavaScript, Node.js, SQL (ดี). TypeScript (เชี่ยวชาญ).'
	},
	{
		section: 'Frameworks',
		details: 'Angular, VueJS, Nuxt, Svelte, SvelteKit, TailwindCSS, Bootstrap.'
	},
	{
		section: 'Tools',
		details:
			'Git, Docker, Kubernetes, Zsh, GitHub Codespaces, Prisma, MySQL, MongoDB, PostgreSQL, Figma.'
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
	degree: 'ปริญญาบัณฑิตวิทยาศาสตร์',
	major: 'วิทยาการคอมพิวเตอร์',
	university: 'มหาวิทยาลัยแม่โจ้',
	graduationDetail: 'เกรดเฉลี่ย 3.63 (ปัจจุบันอยู่ในภาคการศึกษาที่ 4), คาดว่าจะจบการศึกษาในปี 2025)'
};

const projects = [
	new Project(
		'Homework Management',
		'การจัดการงานภารกิจที่สามารถจัดกลุ่มและระบุอาจารย์พร้อมกับวันที่ส่งงาน. รองรับงานภารกิจแบบกลุ่ม.',
		'TypeScript ผ่าน Angular เป็นกรอบการทำงานด้านหน้าและ NgRx สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย CSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Node.js ผ่าน ExpressJS. MySQL สำหรับฐานข้อมูล.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Node.js (ExpressJS), MySQL'
	),
	new Project(
		'Booking Best',
		'การจองโรงแรมพร้อมกับบอร์ดรีวิวโรงแรมที่แชร์ในชุมชน. ตรวจสอบตำแหน่งผู้ใช้แบบเรียลไทม์เพื่อแสดงโรงแรมที่อยู่ใกล้กัน.',
		'TypeScript ผ่าน VueJS สำหรับกรอบการทำงานด้านหน้าและ Pinia สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย SCSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Firebase.',
		false,
		'TypeScript (VueJS, Pinia), SCSS, TailwindCSS, Firebase',
		'https://booking-best-hotel-application.vercel.app/'
	),
	new Project(
		'Blocktify (Frontend Contributed)',
		'ไคลเอ็นต์เวิร์กชอป Minecraft พร้อมกับการปรับแต่งอินเตอร์เฟซเว็บที่สมบูรณ์แบบ. ',
		'TypeScript ผ่าน VueJS สำหรับกรอบการทำงานด้านหน้าและ Zod สำหรับการตรวจสอบประเภท การจัดรูปแบบด้วย SCSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Firebase.',
		false,
		'TypeScript (VueJS, Zod), SCSS, TailwindCSS, Firebase'
	),
	new Project(
		'PhakhCampground',
		'เว็บไซต์ให้เช่าพื้นที่แคมป์แบบเต็มรองรับทั้งผู้ชมและเจ้าของ. ',
		'โปรเจ็คแรกของฉัน ใช้ EJS ธรรมดาสำหรับเทมเพลต HTML, การจัดรูปแบบด้วย CSS และ Bootstrap. Node.js ผ่าน ExpressJS สำหรับการเชื่อมต่อกับเซิร์ฟเวอร์, MongoDB สำหรับฐานข้อมูล.',
		false,
		'EJS, CSS, Bootstrap, Node.js (ExpressJS), MongoDB'
	),
	new Project(
		'Wishlist Management',
		'ไวต์ไซต์ที่สามารถจัดการรายการสิ่งที่ต้องการได้',
		'TypeScript ผ่าน Angular สำหรับกรอบการทำงานด้านหน้าและ NgRx สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย CSS และ TailwindCSS. ใช้ฐานข้อมูลแบบเรียลไทม์จาก Firebase.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Firebase ฐานข้อมูลแบบเรียลไทม์',
		'https://wishlist-management-app.web.app/'
	),
	new Project(
		'Portfolio (old school ver.)',
		'Portfolio ที่ทำช่วงตอนเป็นนักศึกษาปีที่ 2 ใช้เฉพาะแค่ SCSS เท่านั้น เขียน Style เองทั้งหมด',
		'SCSS',
		false,
		'SCSS',
		'https://portfolio-static-website.vercel.app/'
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
		'ข้าพเข้าเป็นคนชอบฟังดนตรี เมื่อข้าพเจ้ามีเวลาว่าง มักจะชอบฟังเพลง หรือเล่นกีตาร์และค่อยฝึกเพือมั่นพัฒนาการเล่นอยู่เสมอ'
	),
	new Interest(
		'สัตว์เลี้ยง',
		'ข้าพเจ้ามีสุนัข 1 ตัวและแมว 2 ตัว โดยมักจะเล่นกับพวกเขาเมื่อรู้สึกเหงาหรือเบื่อ หรือตอนที่พวกเขามารบกวนข้าพระเจ้า'
	)
];

const langs = [
	new Language('Thai', 'Native'),
	new Language(
		'English',
		'เชี่ยวชาญ',
		'ข้าพเข้ามีทักษะการอ่านและการฟังที่เชี่ยวชาญ และสามารถพูดได้อย่างราบรื่นด้วยสำเนียงที่เกือบจะคล่อง ทักษะการเขียนของข้าพเจ้าอยู่ในระดับปานกลาง'
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
