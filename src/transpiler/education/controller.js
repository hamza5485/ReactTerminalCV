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
			viewSchools: {
				type: typeof this._viewSchools,
				description: 'Open websites of all schools attended',
				usage: 'education.viewSchools'
			},
			viewCourses: {
				type: typeof this._viewCourses,
				description: 'Open description page of all degrees studied',
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

	_viewSchools() {
		for (let school of this._data.schooling) {
			if (school.hasOwnProperty('url')) {
				window.open(school.url);
			}
		}
	}

	_viewCourses() {
		for (let school of this._data.schooling) {
			if (school.hasOwnProperty('courseUrl')) {
				window.open(`${school.courseUrl}`);
			}
		}
	}

	_viewCerts() {
		for (let cert of this._data.certs) {
			if (cert.hasOwnProperty('url')) {
				window.open(cert.url);
			}
		}
	}
}

export default EducationController;
