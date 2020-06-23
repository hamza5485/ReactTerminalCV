import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, InputBase, TextField, InputAdornment } from '@material-ui/core';
import { COMMAND } from '../../../constants/style';

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
				console.log(lastCommand);
				setUpKeyCount(upKeyCount + 1);
				setCommand(lastCommand)
			}
		} else if (e.keyCode === 40 && upKeyCount > 0) { // down key
			const prevCommand = props.getPrevCommand(upKeyCount - 1);
			console.log(prevCommand);
			setUpKeyCount(upKeyCount - 1);
			setCommand(prevCommand);
		}
	};

	const handleInput = e => {
		setCommand(e.target.value);
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
						<span className={classes.session}>{`user@hamzaanas.dev:~#`}</span>
					</InputAdornment>
				}
				inputProps={{
					'aria-label': 'naked'
				}}
			/>
			<div>
				{response}
			</div>
		</div>
	);
};

export default Cursor;
