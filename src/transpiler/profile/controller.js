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
			sendEmail: {
				type: typeof this._sendEmail,
				description: 'Open default email client with me as recipient',
				usage: 'profile.sendEmail'
			},
			makeCall: {
				type: typeof this._makeCall,
				description: 'Attempt to make a call to me',
				usage: 'profile.makeCall'
			},
			viewLinkedIn: {
				type: typeof this._viewLinkedIn,
				description: 'View my LinkedIn profile',
				usage: 'profile.viewLinkedIn'
			},
			viewGithub: {
				type: typeof this._viewGithub,
				description: 'View my Github profile',
				usage: 'profile.viewGithub'
			},
			viewTwitter: {
				type: typeof this._viewTwitter,
				description: 'View my Twitter profile',
				usage: 'profile.viewTwitter'
			},
		}
	}

	getFunctions(func) {
		switch (func) {
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
