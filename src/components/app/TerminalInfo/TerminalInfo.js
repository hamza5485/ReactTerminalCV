import React from 'react';
import { Typography, ListItem, List, Grid, makeStyles } from '@material-ui/core';
import { TEXT, COMMAND } from '../../../constants/style';
import profile from '../../../transpiler/profile/data';

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
		width: '120px',
		height: '120px'
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
					<Typography className={classes.text}>
						Use `ls` command to view available sections. Use the `view [section]` command to
						get all information available in a section. Use `explore [section]` command
						to get a list of available functions that can be used.
						All responses are JSON objects. Use `help` command for more information.
					</Typography>
					<Typography>
						Examples:
					</Typography>
					<List>
						<ListItem className={classes.text}>1. view [section]</ListItem>
						<ListItem className={classes.text}>2. explore [section</ListItem>
					</List>
					{/* <Grid container>
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
					</Grid> */}
					{/* <Typography className={classes.text}>{"----------------"}</Typography> */}
					{/* <Typography className={classes.text}>

					</Typography> */}
					{/* <Typography className={classes.text}>There are four main sections:</Typography>
					<List>
						<ListItem className={classes.text}>1. profile</ListItem>
						<ListItem className={classes.text}>2. experience</ListItem>
						<ListItem className={classes.text}>3. skills</ListItem>
						<ListItem className={classes.text}>4. education</ListItem>
					</List> */}
				</Grid>
			</Grid>
		</div>
	);
};

export default TerminalInfo;
