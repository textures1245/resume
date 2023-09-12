// types.ts

type AboutMe = {
	fullName: string;
	nickname: string;
	phone: string;
	email: string;
	github: {
		label: string;
		url: string;
	};
	linkedin: {
		label: string;
		url: string;
	};
	location: string;
	website: string;
};

type Education = {
	degree: string;
	major: string;
	university: string;
	graduationDetail: string;
};

// Define TypeScript types for your objects
type Project = {
	name: string;
	details: string;
	procedure: string;
	onHide: false;
	techStack: string;
	url?: string;
};

type Certificate = {
	title: string;
	details?: string;
	imgSrc?: string;
};

type Technology = {
	section: string;
	details: string;
};

type Interest = {
	groupName: string;
	details: string;
};

type Language = {
	lang: string;
	level: string;
	detail?: string;
};

// Export the types
export { Project, Certificate, Technology, Interest, Language, AboutMe, Education };
