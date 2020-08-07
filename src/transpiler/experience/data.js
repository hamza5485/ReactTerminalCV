import skillData from '../skills/data';

const experience = [
	{
		title: 'Software Engineer',
		company: 'Intuitive Technology Innovations',
		type: 'Fulltime',
		location: 'Sydney, Australia',
		current: true,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies["C#"], skillData.technologies.JavaScript],
		dates: {
			start: 'October 2019',
			end: null,
		}
	},
	{
		title: 'Software Engineer',
		company: 'vAmbition',
		type: 'Fulltime',
		location: 'Sydney, Australia',
		current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies.AWS, skillData.technologies.JavaScript],
		dates: {
			start: 'October 2019',
			end: 'March 2020',
		}
	},
	{
		title: 'Software Developer Intern',
		company: 'ITIC - IT Training & Resourcing',
		type: 'Internship',
		location: 'Sydney, Australia',
		current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies.JavaScript],
		dates: {
			start: 'August 2019',
			end: 'October 2019',
		}
	},
	{
		title: 'Android Developer',
		company: 'Innovation Square Pvt Ltd',
		type: 'Fulltime',
		location: 'Islamabad, Pakistan',
		current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies.Java, skillData.technologies.PHP],
		dates: {
			start: 'January 2017',
			end: 'July 2019',
		}
	},
	{
		title: 'PHP Web Developer',
		company: 'CyberVision International',
		type: 'Fulltime',
		location: 'Islamabad, Pakistan',
		current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies.PHP],
		dates: {
			start: 'August 2016',
			end: 'December 2016',
		}
	}
];

export default experience;
