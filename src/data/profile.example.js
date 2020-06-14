import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

// fill with your details
const profile = {
	name: 'Name',
	title: 'Title',
	image: 'Image Name',
	links: [
		{
			text: 'Email',
			href: 'mailto:email',
			icon: <EmailIcon />
		},
		{
			text: 'Number',
			href: 'tel:Number',
			icon: <PhoneIcon />
		},
		{
			text: 'LinkedIn',
			href: 'LinkedIn URL',
			icon: <LinkedInIcon />
		},
		{
			text: 'Github',
			href: 'Github URL',
			icon: <GitHubIcon />
		},
		{
			text: 'Twitter',
			href: 'Twitter URL',
			icon: <TwitterIcon />
		}
	]
}


export default profile;
