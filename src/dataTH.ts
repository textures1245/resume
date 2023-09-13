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
	'ข้าพระเจ้ากำลังมุ่งหน้าที่จะดำเนินการสหกิจศึกษาด้านวิศวกรรมซอฟต์แวร์เพื่อใช้ทักษะทางเทคนิคของข้าพระเจ้าและมีส่วนร่วมในโครงการที่ทันสมัยในขณะที่ขยายความรู้ในสาขานี้ ในฐานะนักศึกษาวิทยาการคอมพิวเตอร์ที่มีมูลฐานแข็งแกร่ง ข้าพระเจ้าตื่นเต้นที่จะใช้ความเชี่ยวชาญของข้าพระเจ้าในภาษาโปรแกรม ประสบการณ์ของข้าพระเจ้าในเครื่องมือพัฒนาพื้นฐานและฐานข้อมูลสำคัญ ทำให้ข้าพระเจ้าสามารถมีส่วนร่วมที่มีคุณค่าในทีมของคุณ ข้าพระเจ้ากระตือรือร้นที่จะทำงานร่วมกันและพัฒนาความสามารถของข้าพระเจ้าอย่างต่อเนื่อง การเข้าร่วมองค์กรของคุณจะให้ข้าพระเจ้าได้รับโอกาสที่ยอดเยี่ยมในการพัฒนาตัวเองในฐานะวิศวกรซอฟต์แวร์และมีส่วนร่วมในโครงการนวัตกรรมของคุณ';

const summary =
	'ข้าพระเจ้าเป็นคนกระตือรือร้น ความหลงใหลและความมุ่งมั่นในการพัฒนาเว็บไซต์และฐานทักษะทางเทคนิคที่แข็งแกร่ง ข้าพระเจ้ามีความเชี่ยวชาญในการใช้ภาษาโปรแกรมและเครื่องมือต่างๆ และครอบคลุมงานในสาขาต่างๆ นอกจากนี้การทำงานเป็นทีมของข้าพระเจ้ามีทักษะมาก ปกติข้าพระเจ้าเป็นหัวหน้าทีมคอยให้คำปรึกษาแล้วก็มาสรุปการทำงานร่วมกัน เพราะข้าพระเจ้าเชื่อว่าการทำงานเป็นทีมควรมีเป้าหมายและวัตถุประสงค์ที่ชัดเจน รวมถึงการสื่อสารโดยเคารพเหตุผลของสมาชิกในทีมและเปิดรับการเรียนรู้อย่างต่อเนื่อง นอกจากนี้ข้าพระเจ้ายังเป็นที่ปรึกษาและครูที่ดีอีกด้วย จากการที่ข้าพระเจ้าเป็นพี่เลี้ยงให้กับรุ่นน้องมานับไม่ถ้วนและเป็นหัวหน้า TA (Team Assistant) ที่คอยช่วยเหลือรุ่นน้องหรือผู้เข้าร่วมในโครงการ CompCamp ซึ่งเป็นค่ายสอนเทคโนโลยีและคอมพิวเตอร์ของสาขา ข้าพระเจ้ามุ่งมั่นและหวังเป็นอย่างยิ่งว่าจะได้นำความรู้ที่ได้เรียนรู้ไปใช้กับโครงการจริง เพื่อรับประสบการณ์จริงและมีส่วนร่วมในโครงการพัฒนานวัตกรรม';
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
			'Assembly, Java (ระดับกลาง) Python, SCSS, JavaScript, Node.js, SQL (ดี) TypeScript (เชี่ยวชาญ)'
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
		'การจัดการงานภารกิจที่สามารถจัดกลุ่มและระบุอาจารย์พร้อมกับวันที่ส่งงาน. รองรับระบบ CURD ทั้งงานเดียวและงานภารกิจแบบกลุ่ม.',
		'TypeScript ผ่าน Angular เป็นกรอบการทำงานด้านหน้าและ NgRx สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย CSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Node.js ผ่าน ExpressJS. MySQL สำหรับฐานข้อมูล.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Node.js (ExpressJS), MySQL'
	),
	new Project(
		'Booking Best',
		'การจองโรงแรมพร้อมกับบอร์ดรีวิวโรงแรมที่แชร์ในชุมชน ตรวจสอบตำแหน่งผู้ใช้แบบเรียลไทม์เพื่อแสดงโรงแรมที่อยู่ใกล้กัน รองรับการใช้งานจากผู้ใช้และระบบ CURD สำหรับการรีวิวโรงแรมที่แชร์ในบอร์ดของชุมชน',
		'TypeScript ผ่าน VueJS สำหรับกรอบการทำงานด้านหน้าและ Pinia สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย SCSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Firebase.',
		false,
		'TypeScript (VueJS, Pinia), SCSS, TailwindCSS, Firebase',
		'https://booking-best-hotel-application.vercel.app/'
	),
	new Project(
		'Blocktify (Frontend Contributed)',
		'ไคลเอ็นต์เวิร์กชอป Minecraft พร้อมกับการปรับแต่งอินเตอร์เฟซเว็บและแอคชั่นที่สมบูรณ์แบบ โดยมีตั้งแต่การปรับแต่ง UI ที่มีความหลากหลายและเป็นแบบไดนามิก (เมนู​, พื้นหลัง,เลย์เอาท์, วิดเจท, บอร์ด และอื่น ๆ) ระบบ CURD ของสินค้า การจัดการเติมเงิน และการจัดการส่วนของผู้ใช้และการตกแต่ง รวมถึงการ integrated Backend API รวมกับเว็บแอป',
		'TypeScript ผ่าน VueJS สำหรับกรอบการทำงานด้านหน้าและ Zod สำหรับการตรวจสอบประเภท การจัดรูปแบบด้วย SCSS และ TailwindCSS. การเชื่อมต่อกับเซิร์ฟเวอร์ด้วย Firebase.',
		false,
		'TypeScript (VueJS, Zod), SCSS, TailwindCSS, Firebase'
	),
	new Project(
		'PhakhCampground',
		'เว็บไซต์ให้เช่าพื้นที่แคมป์ที่รองรับทั้งผู้เข้าชมและเจ้าของแคมป์ โดยมีการรับรองการแสดงแผนที่ และระบบ CURD ของแคมป์ที่มาความหลากหลายและความสะดวกสะบาย อาทิเช่น กำหนดละติจูดและลองติจูดแบบอัตโนมัติ และอื่น ๆ รอบรับการเก็บข้อมูลแบบมัลติมีเดีย และระบบการจองที่ อีกทั้งรอบรับระบบ CURD ของคอมเมนต์ที่ผู้ใช้สามารถเข้าไปให้รีวิวได้',
		'โปรเจ็คแรกของข้าพระเจ้า ใช้ EJS ธรรมดาสำหรับเทมเพลต HTML, การจัดรูปแบบด้วย CSS และ Bootstrap. Node.js ผ่าน ExpressJS สำหรับการเชื่อมต่อกับเซิร์ฟเวอร์, MongoDB สำหรับฐานข้อมูล และ Clondinary สำหรับเก็บไฟล์ประมัลติมีเดีย',
		false,
		'EJS, CSS, Bootstrap, Node.js (ExpressJS), MongoDB'
	),
	new Project(
		'Wishlist Management',
		'ไวต์ไซต์ที่สามารถจัดการรายการสิ่งที่ต้องการได้ รอบรับระบบ CURD',
		'TypeScript ผ่าน Angular สำหรับกรอบการทำงานด้านหน้าและ NgRx สำหรับการจัดการสถานะ, การจัดรูปแบบด้วย CSS และ TailwindCSS. ใช้ฐานข้อมูลแบบเรียลไทม์จาก Firebase.',
		false,
		'TypeScript (Angular, NgRx), CSS, TailwindCSS, Firebase ฐานข้อมูลแบบเรียลไทม์',
		'https://wishlist-management-app.web.app/'
	),
	new Project(
		'Portfolio (standalone)',
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
	new Language('Thai', 'เนทีฟ'),
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
