import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Contact from '../Contact';
import profileData from '../../../data/profile';

const useStyles = makeStyles(theme => ({
	cardRoot: {
		color: theme.palette.text.secondary,
		margin: '.5em',
	},
	image: {
		height: 'auto',
		width: '30%',
		border: '2px solid white',
		[theme.breakpoints.up('md')]: {
			width: '80%',
		}
	},
	bg: {
		backgroundColor: 'darkslategrey',
	},
	text: {
		color: 'white',
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			textAlign: 'left',
		}
	}
}));

const Profile = () => {
	const classes = useStyles();

	return (
		<Card className={classes.cardRoot}>
			<CardContent className={classes.bg}>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item xs={12} sm={12} md={2} style={{
						textAlign: '-webkit-center',
					}}>
						<Avatar alt={profileData.name} src={profileData.image} className={classes.image} />
					</Grid>
					<Grid item xs={12} sm={12} md={7} >
						<Typography variant="h4" component="h2" className={classes.text} >
							{profileData.name}
						</Typography>
						<Typography variant="h5" component="h2" className={classes.text} gutterBottom>
							{profileData.title}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={3}>
						<Contact data={profileData.links}/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Profile;
