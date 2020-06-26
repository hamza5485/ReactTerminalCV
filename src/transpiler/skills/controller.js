import data from './data';

class SkillController {

	constructor() {
		this._data = data;
	}

	view() {
		return this._data;
	}

	explore() {
		return {
			cloud: {
				type: typeof this._cloud,
				description: "Get skills and technologies related to cloud development",
				usage: "skills.cloud"
			},
			web: {
				type: typeof this._web,
				description: "Get skills and technologies related to web development",
				usage: "skills.web"
			},
			mobile: {
				type: typeof this._mobile,
				description: "Get skills and technologies related to mobile development",
				usage: "skills.mobile"
			}
		}
	}

	getFunctions(func) {
		switch (func) {
			case "cloud":
				return this._cloud();
			case "web":
				return this._web();
			case "mobile":
				return this._mobile();
			default:
				return null;
		}
	}

	_cloud() {
		return {
			type: this._data.skill[0],
			technologies: this._data.technologies.AWS
		}
	}

	_web() {
		return {
			type: this._data.skill[2],
			technologies: {
				JavaScript: this._data.technologies.JavaScript,
				Python: this._data.technologies.Python,
				"C#": this._data.technologies["C#"],
				PHP: this._data.technologies.PHP,
				Design: this._data.technologies.Design
			}
		}
	}

	_mobile() {
		return {
			type: this._data.skill[1],
			technologies: {
				Java: this._data.technologies.Java
			}
		}
	}
}

export default SkillController;