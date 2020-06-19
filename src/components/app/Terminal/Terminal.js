import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Window from '../Window';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100vh',
		// borderLeft: '1px solid #dadada',
		// borderRight: '1px solid #dadada',
		// borderBottom: '1px solid #dadada',
		padding: theme.spacing(1)
	}
}));

const Terminal = () => {
	const classes = useStyles();
	const [toggleMaximize, setToggleMaximize] = React.useState(true);
	const [toggleMinimize, setToggleMinimize] = React.useState(false);

	const handleCallback = click => {
		if (click === 'toggleMax') setToggleMaximize(!toggleMaximize);
		if (click === 'toggleMin') setToggleMinimize(!toggleMinimize);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth={toggleMaximize ? "lg" : "sm"} className={classes.container}>
				<Header callback={handleCallback} />
				{!toggleMinimize && <Window isMax={toggleMaximize} />}
			</Container>
		</React.Fragment>
	);
};

export default Terminal;
