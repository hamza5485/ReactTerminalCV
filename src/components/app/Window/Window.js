import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TEXT, COMMAND } from '../../../constants/style'
import { Typography } from '@material-ui/core';
import profile from '../../../data/profile';
import Cursor from '../Cursor/Cursor';

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
			width: '100px',
			height: '100px'
		},
		[theme.breakpoints.up('md')]: {
			width: '150px',
			height: '150px'
		},
		[theme.breakpoints.up('lg')]: {
			width: '200px',
			height: '200px'
		},
	},
	imgMin: {
		border: `2px solid ${COMMAND.color}`,
		padding: theme.spacing(1),
		width: '100px',
		height: '100px'
	}
}));

const Window = props => {
	const classes = useStyles();
	const [commandList, setCommandList] = React.useState([]);
	const [cursorList, setCursorList] = React.useState([]);

	const handleCommand = com => {
		let resp = "";
		if (com  === "log") resp =  commandList.map(obj => `${obj.command} ==> ${obj.response},,, `);
		else resp = `you entered command: ${com}`;
		let comObj = { command: com, response: resp };
		setCommandList([...commandList, comObj]);
		return resp;
	};

	const getCursor = () => {
		return <Cursor newCommand={handleCommand} />
	};

	useEffect(() => {
		setCursorList([...cursorList, getCursor()]);
	}, [commandList]);

	const getInfo = () => {
		return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<img src='me_terminal.jpeg' alt={`hamzaanas`}
							className={props.isMax ? classes.img : classes.imgMin} />
					</Grid>
					<Grid item xs={9}>
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
						<Typography className={classes.text}>Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Proin hendrerit posuere lorem, eu sagittis sapien egestas in.
						Vestibulum lacinia purus non eros facilisis finibus. Vivamus sit amet ex ipsum.
						Sed vel faucibus nulla, eget pharetra sem. Donec ac sem ut lacus posuere
						malesuada volutpat non arcu. Quisque sit amet tortor molestie, egestas diam
						rhoncus, varius sapien. Mauris condimentum dolor at purus dapibus, et scelerisque
					tellus euismod.</Typography>
					</Grid>
				</Grid>
			</div>
		);
	};

	return (
		<div className={classes.window}>
			{getInfo()}
			{cursorList.length > 0 && cursorList.map(elem => elem)}
		</div>
	);
};

export default Window;
