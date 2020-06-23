import data from './data';

class ProfileController {

	constructor() {
		this._data = data;
	}

	view() {
		return this._data;
	}

	explore() {
		return {
			sendEmail: typeof this._sendEmail,
			makeCall: typeof this._makeCall,
			viewLinkedIn: typeof this._viewLinkedIn,
			viewGithub: typeof this._viewGithub,
			viewTwitter: typeof this._viewTwitter,
		}
	}

	getFunctions(func) {
		switch(func) {
			case "sendEmail":
				return this._sendEmail();
			case "makeCall":
				return this._makeCall();
			case "viewLinkedIn":
				return this._viewLinkedIn();
			case "viewGithub":
				return this._viewGithub();
			case "viewTwitter":
				return this._viewTwitter();
			default:
				return null;
		}
	}

	_sendEmail() {
		window.open(this._data.links.email);
	}

	_makeCall() {
		window.open(this._data.links.number);
	}

	_viewLinkedIn() {
		window.open(this._data.links.linkedin);
	}

	_viewGithub() {
		window.open(this._data.links.github);
	}

	_viewTwitter() {
		window.open(this._data.links.twitter);
	}

};

export default ProfileController;
