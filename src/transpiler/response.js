class Response {

	constructor() {
		this._com = '';
		this._res = '';
		this._err = '';
		this._ts = '';
	}

	set com(command) {
		this._com = command;
	}

	get com() {
		return this._com;
	}

	set res(response) {
		this._res = response;
	}

	get res() {
		return this._res;
	}

	set err(error) {
		this._err = error;
	}

	get err() {
		return this._err;
	}

	set ts(timestamp) {
		this._ts = timestamp;
	}

	get ts() {
		return this._ts;
	}
}

export default Response;
