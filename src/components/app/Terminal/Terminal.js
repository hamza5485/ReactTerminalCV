import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Window from '../Window';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100vh',
		padding: theme.spacing(1)
	}
}));

const Terminal = props => {
	const classes = useStyles();
	const [toggleMaximize, setToggleMaximize] = React.useState(true);
	const [toggleMinimize, setToggleMinimize] = React.useState(false);
	const [closePressed, setClosePressed] = React.useState(false);

	const handleCallback = click => {
		console.log(click);
		if (click === 'toggleMax') setToggleMaximize(!toggleMaximize);
		if (click === 'toggleMin') setToggleMinimize(!toggleMinimize);
		if (click === 'toggleX') setClosePressed(!closePressed);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth={toggleMaximize ? "lg" : "sm"} className={classes.container}>
				{!closePressed ?
					<div style={{ height: '100%' }}>
						<Header callback={handleCallback} />
						<Window isMax={toggleMaximize} shouldMinimize={toggleMinimize}
							transpiler={props.transpiler} />
					</div> :
					<Typography variant="h1" style={{ textAlign: 'center' }}>¯\_(ツ)_/¯</Typography>}
			</Container>
		</React.Fragment>
	);
};

export default Terminal;
