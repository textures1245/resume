class Project {
	constructor(
		public name: string,
		public details: string,
		public procedure: string,
		public onHide: false,
		public techStack: string,
		public sourceCode: string,
		public url?: string
	) {}
}

class Certificate {
	constructor(public title: string, public details?: string, public imgSrc?: string) {}
}

class Technology {
	constructor(public section: string, public details: string) {}
}

class Interest {
	constructor(public groupName: string, public details: string) {}
}

class Language {
	constructor(public lang: string, public level: string, public detail?: string) {}
}

export { Project, Technology, Certificate, Interest, Language };
