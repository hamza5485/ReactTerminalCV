import React from 'react';
import { COMMANDS, SECTIONS, ERRORS, HELP } from './dictionary';
import ProfileController from './profile/controller';

class Transpiler {

	_history = [];

	constructor() {
		this._profileController = new ProfileController();
	}

	transpile(command) {
		let isValid = this._isValidCommand(command);
		if (!isValid.error) {
			return this._interpret(command);
		} else {
			return this._formResponse(command, isValid.errMsg, isValid.error);
		}
	}

	_getSectionFunctions(section) {
		if (section === 'profile') return this._profileController.explore();
	}

	_isValidCommand(command) {
		const comArr = command.split(" ");
		if (comArr.length === 0) {
			return ERRORS.commandNotFound; // change to empty command
		} else if (comArr.length > 2) {
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
				const funct = this._getSectionFunctions(section[0]);
				if (!funct.hasOwnProperty(section[1])) {
					return ERRORS.functionDoesntExist;
				}
			}
		}
		return ERRORS.noError;
	}

	_interpret(command) {
		let response = '';
		if (command.includes(".")) {
			const arr = command.split(".");
			let sec = arr[0];
			let func = arr[1];
			this._mapToController(sec).getFunctions(func);
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
				response = <pre>{JSON.stringify(output, null, 2)}</pre>
			} else if (arr.length === 1) {
				if (command === 'help') return this._formResponse(command, HELP, false);
				if (command === 'history') response = <pre>{this._history.join("\n")}</pre>;
			}
		}
		return this._formResponse(command, response, false);
	}

	_mapToController(section) {
		if (section === 'profile') return this._profileController;
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
		this._history.push(`${this._history.length + 1} ${response.timestamp} ${response.command}`);
		return response;
	}
}

export default Transpiler;
