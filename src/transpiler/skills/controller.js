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
			communication: {
				type: typeof this._communication,
				description: "Get skills and technologies related to communication & telephony technology",
				usage: "skills.communication"
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
			},
			db: {
				type: typeof this._db,
				description: "Get skills and technologies related to databases",
				usage: "skills.db"
			},
			code: {
				type: typeof this._code,
				description: "List of programming languages",
				usage: "skills.code"
			}
		}
	}

	getFunctions(func) {
		switch (func) {
			case "cloud":
				return this._cloud();
			case "communication":
				return this._communication();
			case "web":
				return this._web();
			case "mobile":
				return this._mobile();
			case "db":
				return this._db();
			case "code":
				return this._code();
			default:
				return null;
		}
	}

	_cloud() {
		return {
			name: this._data.skill[0],
			technologies: this._data.technologies.Cloud
		}
	}

	_communication() {
		return {
			name: this._data.skill[1],
			technologies: this._data.technologies.Telephony
		}
	}

	_web() {
		return {
			name: this._data.skill[2],
			technologies: {
				JavaScript: this._data.technologies.JavaScript,
				Python: this._data.technologies.Python,
				"C#": this._data.technologies["C#"],
				PHP: this._data.technologies.PHP,
				Design: this._data.technologies.Design,
			}
		}
	}

	_mobile() {
		return {
			name: this._data.skill[3],
			technologies: {
				Java: this._data.technologies.Java
			}
		}
	}

	_db() {
		return {
			name: this._data.skill[4],
			technologies: {
				Java: this._data.technologies.Database
			}
		}
	}

	_code() {
		return {
			name: this._data.skill[5],
			technologies: {
				Java: this._data.technologies.Languages
			}
		}
	}
}

export default SkillController;
