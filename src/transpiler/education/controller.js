import data from './data';

class EducationController {

	constructor() {
		this._data = data;
	}

	view() {
		return this._data;
	}

	explore() {
		return {
			viewBsc: {
				type: typeof this._viewBsc,
				description: 'See details of Bachelors degree',
				usage: 'education.viewBsc'
			},
			viewMsc: {
				type: typeof this._viewMsc,
				description: 'See details of Masters degree',
				usage: 'education.viewMsc'
			},
			viewSchools: {
				type: typeof this._viewSchools,
				description: 'List of universities attended',
				usage: 'education.viewSchools'
			},
			viewCourses: {
				type: typeof this._viewCourses,
				description: 'List all courses & specializations studied at university',
				usage: 'education.viewCourses'
			},
			viewCerts: {
				type: typeof this._viewCerts,
				description: 'Show certificates earned',
				usage: 'education.viewCerts'
			}
		};
	}

	getFunctions(func) {
		switch (func) {
			case "viewBsc":
				return this._viewBsc();
				case "viewMsc":
					return this._viewMsc();
			case "viewSchools":
				return this._viewSchools();
			case "viewCourses":
				return this._viewCourses();
			case "viewCerts":
				return this._viewCerts();
			default:
				return null;
		}
	}

	_viewBsc() {
		let bsc = [];
		for (let school of this._data.schooling) {
			if (school.name === 'Swansea University') {
				bsc.push(school);
			}
		}
		return bsc;
	}

	_viewMsc() {
		let msc = [];
		for (let school of this._data.schooling) {
			if (school.name === 'Macquarie University') {
				msc.push(school);
			}
		}
		return msc;
	}

	_viewSchools() {
		let schools = [];
		for (let school of this._data.schooling) {
			let s = {
				name: school.name,
				type: school.course,
				location: school.location,
				url: school.url
			};
			schools.push(s);
		}
		return schools;
	}

	_viewCourses() {
		let courses = [];
		for (let school of this._data.schooling) {
			let c = {
				degree: school.course,
				specialization: school.specialization,
				uni: school.name,
				courseUrl: school.courseUrl
			};
			courses.push(c);
		}
		return courses;
	}

	_viewCerts() {
		return this._data.certs;
	}
}

export default EducationController;
