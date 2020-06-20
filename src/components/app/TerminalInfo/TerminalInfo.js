import React from 'react';
import { Typography, ListItem, List, Grid, makeStyles } from '@material-ui/core';
import { TEXT, COMMAND } from '../../../constants/style';
import profile from '../../../data/profile';

const useStyles = makeStyles((theme) => ({
	window: {
		backgroundColor: '#000000AB',
		...TEXT,
		height: 'calc(100% - 64px)',
		overflowY: 'scroll'
	},
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	cmd: {
		...COMMAND
	},
	text: {
		...TEXT
	},
	img: {
		border: `2px solid ${COMMAND.color}`,
		padding: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			width: '150px',
			height: '150px'
		},
		[theme.breakpoints.up('md')]: {
			width: '200px',
			height: '200px'
		},
		[theme.breakpoints.up('lg')]: {
			width: '250px',
			height: '250px'
		},
	},
	imgMin: {
		border: `2px solid ${COMMAND.color}`,
		padding: theme.spacing(1),
		width: '150px',
		height: '150px'
	}
}));


const TerminalInfo = props => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={0}>
				<Grid item xs={12} sm={4} md={3}>
					<img src='me_terminal.jpeg' alt={`hamzaanas`}
						className={props.isMax ? classes.img : classes.imgMin} />
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
					<Typography className={classes.cmd}>hamzaanas.dev</Typography>
					<Typography className={classes.text}>{"----------------"}</Typography>
					<Grid container>
						<Grid item>
							<Typography className={classes.cmd}>{`name`}</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.text}>{`: ${profile.name}`}</Typography>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item>
							<Typography className={classes.cmd}>{`title`}</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.text}>{`: ${profile.title}`}</Typography>
						</Grid>
					</Grid>
					<Typography className={classes.text}>{"----------------"}</Typography>
					<Typography className={classes.text}>
						Welcome to my personal website.
					</Typography>
					<Typography className={classes.text}>There are four main sections:</Typography>
					<List>
						<ListItem className={classes.text}>1. profile</ListItem>
						<ListItem className={classes.text}>2. experience</ListItem>
						<ListItem className={classes.text}>3. skills</ListItem>
						<ListItem className={classes.text}>4. education</ListItem>
					</List>
					<Typography className={classes.text}>
						There are two primary commands, `view` and `explore`.
						Use the command `view` to see the information in each section or `explore` to
						see what more can be done. Use `help` to more information.
						Example commands: explore skill; view profile;
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default TerminalInfo;
