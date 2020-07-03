import { COMMANDS, SECTIONS, ERRORS, HELP } from './dictionary';
import ProfileController from './profile/controller';
import EducationController from './education/controller';
import SkillController from './skills/controller';
import ExperienceController from './experience/controller';

class Transpiler {

	_history = [];

	constructor() {
		this._profileController = new ProfileController();
		this._experienceController = new ExperienceController();
		this._educationController = new EducationController();
		this._skillsController = new SkillController();
	}

	transpile(command) {
		command = command.trimEnd();
		let isValid = this._isValidCommand(command);
		if (!isValid.error) {
			return this._interpret(command);
		} else {
			return this._formResponse(command, isValid.errMsg, isValid.error);
		}
	}

	_getSectionFunctions(section) {
		if (section === 'profile') return this._profileController.explore();
		if (section === 'experience') return this._experienceController.explore();
		if (section === 'education') return this._educationController.explore();
		if (section === 'skills') return this._skillsController.explore();
	}

	_isValidCommand(command) {
		if (command === '') { return ERRORS.noError } else {
			const comArr = command.trimEnd().split(" ");
			if (comArr.length > 2 ) {
				return ERRORS.tooManyArgs;
			} else if (comArr.length === 2) {
				if (!COMMANDS.mult.includes(comArr[0])) {
					return ERRORS.commandNotFound;
				} else if (!SECTIONS.includes(comArr[1])) {
					return ERRORS.sectionNotFound;
				}
			} else if (comArr.length === 1 && !command.includes(".")) {
				if (COMMANDS.mult.includes(comArr[0])) {
					return ERRORS.sectionNotFound;
				} else if (!COMMANDS.single.includes(comArr[0])) {
					return ERRORS.commandNotFound;
				}
			} else if (comArr.length === 1 && command.includes(".")) {
				const section = command.split(".");
				if (section.length !== 2) {
					return ERRORS.commandNotFound;
				} else if (!SECTIONS.includes(section[0])) {
					return ERRORS.sectionNotFound;
				} else {
					if (section[1].includes("(") && section[1].includes(")")) {
						return ERRORS.parenthesesAndParamNotSupported;
					} else {
						const funct = this._getSectionFunctions(section[0]);
						if (!funct.hasOwnProperty(section[1])) {
							return ERRORS.functionDoesntExist;
						}
					}
				}
			}
			return ERRORS.noError;
		}
	}

	_interpret(command) {
		let response = '';
		if (command.includes(".")) {
			const arr = command.split(".");
			let sec = arr[0];
			let func = arr[1];
			const temp = this._mapToController(sec).getFunctions(func);
			if (temp !== undefined) response = JSON.stringify(temp, null, 2);
		} else {
			let output = '';
			const arr = command.split(" ");
			if (arr.length === 2) {
				let com = arr[0];
				let sec = arr[1];
				if (com === 'view') {
					output = this._mapToController(sec).view();
				} else if (com === 'explore') {
					output = this._mapToController(sec).explore();
				}
				response = JSON.stringify(output, null, 2);
			} else if (arr.length === 1) {
				if (command === 'help') return this._formResponse(command, HELP, false);
				if (command === 'history') response = this._history.join("\n");
				if (command === 'ls') response = JSON.stringify(SECTIONS, null, 2);
				if (command === 'clear') this._history.length = 0;
			}
		}
		return this._formResponse(command, response, false);
	}

	_mapToController(section) {
		if (section === 'profile') return this._profileController;
		if (section === 'experience') return this._experienceController;
		if (section === 'education') return this._educationController;
		if (section === 'skills') return this._skillsController;
	}

	_getTimestamp() {
		let date = new Date();
		return `[${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
	}

	_formResponse(com, res, err) {
		let resp = new Response();
		resp.com = com;
		resp.res = res;
		resp.err = err;
		resp.ts = this._getTimestamp();
		const response = {
			command: resp.com,
			response: resp.res,
			error: resp.err,
			timestamp: resp.ts,
		}
		if (com !== 'clear' && com !== '')
			this._history.push(`${this._history.length + 1} ${response.timestamp} ${response.command}`);
		return response;
	}
}

export default Transpiler;
