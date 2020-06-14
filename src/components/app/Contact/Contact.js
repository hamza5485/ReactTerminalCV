import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		textAlign: 'center',
		'& > *': {
			margin: theme.spacing(1)
		},
		[theme.breakpoints.up('md')]: {
			textAlign: 'start',
		}
	},
	button: {
		height: '2em',
		color: 'white',
		fontSize: 'small',
		'&:hover': {
			background: "#e91e63",
		},
	}
}));

const Contact = props => {
	const classes = useStyles();
	const { data } = props;
	return (
		<div className={classes.root}>
			<Grid container spacing={2} alignItems="center" justify="center" alignContent="center">
				{data.map((link, i) => {
					return (
						<Grid item xs={12} key={i}>
							<Button className={classes.button} size="small" startIcon={link.icon} href={link.href} target="_blank">
								{link.text}
							</Button>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

Contact.propTypes = {
	links: PropTypes.array
};



export default Contact;
