import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseRounded';
import MinimizeIcon from '@material-ui/icons/RemoveRounded';
import MaximizeIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import { TEXT } from '../../../constants/style'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		textAlign: 'center',
		...TEXT
	},
	appBar: {
		backgroundColor: '#3b3b3b',
		borderTop: '1px solid black',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		borderTopLeftRadius: '1em',
		borderTopRightRadius: '1em',
	},
	toolbar: {
		padding: theme.spacing(0)
	},
	btnClose: {
		backgroundColor: '#FF6F61',
		color: 'white',
		padding: theme.spacing(0),
		margin: '0 .5em 0 0',
		'&:hover': {
			backgroundColor: '#FF6F61',
			color: '#0000008a',
		}
	},
	btnMaximize: {
		backgroundColor: '#88B04B',
		color: 'white',
		padding: theme.spacing(0),
		margin: '0 .5em 0 0',
		'&:hover': {
			backgroundColor: '#88B04B',
			color: '#0000008a',
		}
	},
	btnMinimize: {
		backgroundColor: 'darkorange',
		color: 'white',
		padding: theme.spacing(0),
		margin: '0 .5em 0 0',
		'&:hover': {
			backgroundColor: 'darkorange',
			color: '#0000008a',
		}
	},
	icon: {
		fontSize: '1.1rem',
		padding: theme.spacing(.5)
	}
}));

const Header = props => {
	const classes = useStyles();

	const getClientOS = () => {
		return navigator.platform.replace(/\s/g, '_');
	};

	const handleBtnClick = click => {
		props.callback(click);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" className={classes.title}>
						{getClientOS() + "@hamzaanas.codes"}
					</Typography>
					<IconButton size="small" className={classes.btnMinimize} onClick={() => handleBtnClick("toggleMin")}>
						<MinimizeIcon className={classes.icon} />
					</IconButton>
					<IconButton size="small" className={classes.btnMaximize} onClick={() => handleBtnClick("toggleMax")}>
						<MaximizeIcon className={classes.icon} />
					</IconButton>
					<IconButton size="small" className={classes.btnClose} onClick={() => handleBtnClick("toggleX")}>
						<CloseIcon className={classes.icon} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
