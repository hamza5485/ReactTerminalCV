import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, InputAdornment } from '@material-ui/core';
import { COMMAND } from '../../../constants/style';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { HELP, ERRORS } from '../../../transpiler/dictionary';


const useStyles = makeStyles((theme) => ({
	session: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'dodgerblue',
		padding: '0 .5em'
	},
	input: {
		position: 'relative',
		padding: '0.2em',
		width: '100%',
		...COMMAND
	},
	caret: {
		width: '50%'
	},
	pretty: {
		padding: '0 !important',
		backgroundColor: '#0a0a0a !important',
		overflowX: 'hidden !important',
		fontFamily: 'Hack !important',
		whiteSpace: 'pre-wrap !important'
	}
}));

const Cursor = props => {
	const classes = useStyles();
	const [command, setCommand] = React.useState("");
	const [response, setResponse] = React.useState("");
	const [upKeyCount, setUpKeyCount] = React.useState(1);
	const [shouldDisable, setShouldDisable] = React.useState(false);

	const handleKeyKey = e => {
		if (e.keyCode === 13) { // enter
			setShouldDisable(true);
			let r = props.newCommand(command);
			setResponse(r);
		} else if (e.keyCode === 38) { // up key
			const lastCommand = props.getPrevCommand(upKeyCount);
			if (lastCommand !== undefined) {
				setUpKeyCount(upKeyCount + 1);
				setCommand(lastCommand)
			}
		} else if (e.keyCode === 40 && upKeyCount > 0) { // down key
			const prevCommand = props.getPrevCommand(upKeyCount - 1);
			setUpKeyCount(upKeyCount - 1);
			setCommand(prevCommand);
		}
	};

	const handleInput = e => {
		setCommand(e.target.value);
	};

	const prettyResponse = () => {
		if (response === HELP || Object.values(ERRORS).findIndex(e => e.errMsg === response) !== -1)
			return response;
		else return (
			<SyntaxHighlighter style={agate} className={classes.pretty}>
				{response}
			</SyntaxHighlighter>
		);
	};

	return (
		<div>
			<InputBase
				className={classes.input}
				disabled={shouldDisable}
				onKeyDown={handleKeyKey}
				onChange={handleInput}
				value={command}
				autoFocus
				startAdornment={
					<InputAdornment position="start">
						<span className={classes.session}>{`user@hamzaanas.codes:~#`}</span>
					</InputAdornment>
				}
				inputProps={{
					'aria-label': 'naked'
				}}
			/>
			<div>
				{response && prettyResponse()}
			</div>
		</div>
	);
};

export default Cursor;
