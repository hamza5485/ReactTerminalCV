import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	session: {
		color: 'darkgreen ',
		// color: '#49B9C7',
		fontWeight: 'bold'
	},
	input: {
		position: 'relative',
		padding: '0.2em',
		fontWeight: 'bold',
		color: 'white !important',
		width: '100%',
		fontFamily: 'Hack'
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
			<Grid container alignItems="center" spacing={0}>
				<Grid item>
					<span className={classes.session}>{`user@hamzaans.dev:~$`}</span>
				</Grid>
				<Grid item xs={8}>
					<InputBase
						className={classes.input}
						disabled={shouldDisable}
						onKeyDown={handleKeyPress}
						onChange={handleInput}
						defaultValue={command}
						inputProps={{ 'aria-label': 'naked' }}
					/>
				</Grid>
				<Grid item xs={12}>
					{response}
				</Grid>
			</Grid>
		</div>
	);
};

export default Cursor;
