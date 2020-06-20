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
	const [shouldDisable, setShouldDisable] = React.useState(false);

	const handleKeyPress = e => {
		if (e.keyCode === 13) {
			setShouldDisable(true);
			let r = props.newCommand(command);
			setResponse(r);
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
				onKeyDown={handleKeyPress}
				onChange={handleInput}
				defaultValue={command}
				autoFocus
				startAdornment={
					<InputAdornment position="start">
						<span className={classes.session}>{`user@hamzaanas.dev:~#`}</span>
					</InputAdornment>
				}
				InputProps={{
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
