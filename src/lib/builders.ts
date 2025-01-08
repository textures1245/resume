class WorkExperience {
	constructor(
		public companyName: string,
		public date: string,
		public located: string,
		public role: string,
		public details: string,
		public onHide: false,
	) {}
}

class WorkProject {
	constructor(
		public name: string,
		public details: string,
		public subProcedure: {
			name: string;
			details: string;
		}[],
		public company: string,
		public onHide: false,
		public techStack: string,
		public sourceCode: string,
		public url?: string
	) {}
}

class Project {
	constructor(
		public name: string,
		public details: string,
		public procedure: string,
		public onHide: false,
		public techStack: string,
		public sourceCode: string[],
		public url?: string,
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

export { WorkExperience, WorkProject, Project, Technology, Certificate, Interest, Language };
