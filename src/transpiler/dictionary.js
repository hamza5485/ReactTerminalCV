import experience from "../data/experience";
import profile from "../data/profile";

export const COMMANDS = [
	"view",
	"explore",
	"help",
	"clear",
	"history"
];

export const SECTIONS = {
	experience: experience,
	profile: profile
};

export const TAGS = [
	"-v",
	"-p",
];

export const RESPONSES = {

};

export const ERRORS = {
	commandNotFound: {
		error: true,
		errMsg: `command not found, please use 'help' for more information`
	},
	incomplete: {
		error: true,
		errMsg: `incomplete command, please use 'help' for more information`
	},
	sectionNotFound: {
		error: true,
		errMsg: `section not found, please use 'help' for more information`
	},
	tagNotFound: {
		error: true,
		errMsg: `tag not found, please use 'help' for more information`
	},
	tooManyArgs: {
		error: true,
		errMsg: `too many arguments, please use 'help' for more information`
	},
	noError: {
		error: false,
		errMsg: null
	}
};
