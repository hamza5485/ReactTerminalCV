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
			viewResume: {
				type: typeof this._viewResume,
				description: 'View my Resume',
				usage: 'profile.viewResume'
			},
			viewBlog: {
				type: typeof this._viewBlog,
				description: 'View my Blog',
				usage: 'profile.viewBlog'
			},
			viewLinkedin: {
				type: typeof this._viewLinkedin,
				description: 'View my LinkedIn profile',
				usage: 'profile.viewLinkedin'
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
				return this._sendEmviewResumeail();
			case "viewResume":
				return this._viewResume();
			case "viewBlog":
				return this._viewBlog();
			case "viewLinkedin":
				return this._viewLinkedin();
			case "viewGithub":
				return this._viewGithub();
			case "viewTwitter":
				return this._viewTwitter();
			default:
				return null;
		}
	}

	_sendEmail() {
		window.open(this._data.contact.email.link);
	}

	_viewResume() {
		window.open(this._data.links.resume.link);
	}

	_viewBlog() {
		window.open(this._data.links.dev.link);
	}

	_viewLinkedin() {
		window.open(this._data.links.linkedin.link);
	}

	_viewGithub() {
		window.open(this._data.links.github.link);
	}

	_viewTwitter() {
		window.open(this._data.links.twitter.link);
	}

};

export default ProfileController;
