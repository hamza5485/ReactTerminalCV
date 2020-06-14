import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Profile from './components/app/Profile';

const useStyles = makeStyles(theme => ({
	root: {
		dispaly: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			padding: theme.spacing(1),
		},
	},
	item: {
		padding: '.5em',
		margin: '.5em'
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<div className="App">
			<Container>
				<div className={classes.root}>
					<Paper elevation={3} >
						<Grid container spacing={0}>
							<Grid item xs={12} className={classes.item}>
								<Profile />
							</Grid>
						</Grid>
					</Paper>
				</div>
			</Container>
		</div>
	);
};

export default App;
