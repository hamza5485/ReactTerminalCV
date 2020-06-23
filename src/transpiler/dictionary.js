export const COMMANDS = {
	single: [
		"help",
		"clear",
		"history",
		"sections"
	],
	mult: [
		"view",
		"explore"
	]
};

export const SECTIONS = [
	"experience",
	"profile"
];

export const HELP = "helping you like :3";

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
	functionDoesntExist: {
		error: true,
		errMsg: `function not found, please use 'help' for more information`
	},
	noError: {
		error: false,
		errMsg: null
	}
};
