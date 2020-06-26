import data from './data';

class ExperienceController {

	constructor() {
		this._data = data;
	}

	view() {
		return this._data;
	}

	explore() {
		return {
			currentPosition: {
				type: typeof this._currentPosition,
				description: "Get details of current position",
				usage: "experience.currentPosition"
			},
			jobTitles: {
				type: this._jobTitles,
				description: "List of job titles I've had",
				usage: "experience.jobTitles"
			},
			companies: {
				type: typeof this._companies,
				description: "Companies I've worked at",
				usage: "experience.companies"
			},
			internships: {
				type: typeof this._internships,
				description: "List of different intership positions",
				usage: "experience.internships"
			}
		}
	}

	getFunctions(func) {
		switch (func) {
			case "currentPosition":
				return this._currentPosition();
			case "jobTitles":
				return this._jobTitles();
			case "companies":
				return this._companies();
			case "internships":
				return this._internships();
			default:
				return null;
		}
	}

	_currentPosition() {
		return this._data.filter(obj => obj.current);
	}

	_jobTitles() {
		let titles = [];
		for (let job of this._data) {
			titles.push(job.title);
		}
		return titles;
	}

	_companies() {
		let companies = [];
		for (let comp of this._data) {
			companies.push({
				name: comp.company,
				location: comp.location
			});
		}
		return companies;
	}

	_internships() {
		let internships = [];
		for (let job of this._data) {
			if (job.type === 'Internship') internships.push(job);
		}
		return internships;
	}
}

export default ExperienceController;
