import React from 'react';
import { COMMANDS, TAGS, RESPONSES, SECTIONS, ERRORS } from './dictionary';

class Transpiler {

	transpile(command) {
		let commandArray = this._commandToCommandArr(command);
		let isValid = this._isValidCommand(commandArray);
		if (!isValid.error) {
			return this._interpret(command);
		} else {
			return this._formResponse(command, isValid.errMsg, isValid.error);
		}
	}

	_commandToCommandArr(command) {
		let arr = command.split(" ");
		if (arr.includes("")) arr.splice(arr.indexOf(""), 1);
		return arr;
	}

	_isValidCommand(arr) {
		if (!COMMANDS.includes(arr[0])) return ERRORS.commandNotFound;
		else if (arr.length < 2) return ERRORS.incomplete;
		else if (!SECTIONS.hasOwnProperty(arr[1])) return ERRORS.sectionNotFound;
		else if (arr.length === 3 && !TAGS.includes(arr[2])) return ERRORS.tagNotFound;
		else if (arr.length > 3) return ERRORS.tooManyArgs;
		else return ERRORS.noError;
	}

	_getCommandBreakdown(command) {
		let commandArray = this._commandToCommandArr(command)
		switch (commandArray.length) {
			case 2:
				return {
					com: commandArray[0],
					sec: commandArray[1],
					tag: null
				};
			case 3:
				return {
					com: commandArray[0],
					sec: commandArray[1],
					tag: commandArray[2]
				};
			default:
				return {
					com: null,
					sec: null,
					tag: null
				};
		}
	}

	_interpret(command) {
		const { com, sec, tag } = this._getCommandBreakdown(command);
		if (com === 'view') {
			let response = '';
			if (tag === '-p') response = <pre>{JSON.stringify(SECTIONS[sec], null, 2)}</pre>;
			else response = JSON.stringify(SECTIONS[sec]);
			return this._formResponse(command, response, false);
		}
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
		return response;
	}

}

export default Transpiler;
