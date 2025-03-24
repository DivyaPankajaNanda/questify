/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

export const dummy_questionnaires = [
	{
		questionnaireId: '67ddf15fab58e26626bbfc71',
		createdBy: '67ddf15fab58e26626bbfc70',
		title: 'Customer Feedback Survey',
		description: 'A survey to gather feedback from customers.',
		isPublished: true,
		questions: [
			{
				questionId: '67ddf15fab58e26626bbfc72',
				text: 'What is your favorite cuisine?',
				type: 'multiple-choice',
				options: [
					{ optionId: '67ddf15fab58e26626bbfc73', value: 'Italian' },
					{ optionId: '67ddf15fab58e26626bbfc74', value: 'Chinese' },
					{ optionId: '67ddf15fab58e26626bbfc75', value: 'Indian' },
					{ optionId: '67ddf15fab58e26626bbfc76', value: 'Mexican' },
				],
			},
			{
				questionId: '67ddf15fab58e26626bbfc77',
				text: 'How satisfied are you with our service?',
				type: 'rating',
				scale: 5,
			},
			{
				questionId: '67ddf15fab58e26626bbfc78',
				text: 'How many times have you visited us?',
				type: 'numerical-text',
				range: {
					min: 0,
					max: 100,
				},
			},
		],
	},
	{
		questionnaireId: '67ddf15fab58e26626bbfc79',
		createdBy: '67ddf15fab58e26626bbfc70',
		title: 'Employee Engagement Survey',
		description: 'A survey to measure employee engagement levels.',
		isPublished: true,
		questions: [
			{
				questionId: '67ddf15fab58e26626bbfc7a',
				text: 'How satisfied are you with your job?',
				type: 'rating',
				scale: 5,
			},
			{
				questionId: '67ddf15fab58e26626bbfc7b',
				text: 'What motivates you the most at work?',
				type: 'multiple-choice',
				options: [
					{ optionId: '67ddf15fab58e26626bbfc7c', value: 'Salary' },
					{ optionId: '67ddf15fab58e26626bbfc7d', value: 'Work Environment' },
					{ optionId: '67ddf15fab58e26626bbfc7e', value: 'Growth Opportunities' },
					{ optionId: '67ddf15fab58e26626bbfc7f', value: 'Recognition' },
				],
			},
			{
				questionId: '67ddf15fab58e26626bbfc80',
				text: 'How many hours do you work per week?',
				type: 'numerical-text',
				range: {
					min: 0,
					max: 80,
				},
			},
		],
	},
	{
		questionnaireId: '67ddf15fab58e26626bbfc81',
		createdBy: '67ddf15fab58e26626bbfc70',
		title: 'Market Research Survey',
		description: 'A survey to understand market trends and customer preferences.',
		isPublished: false,
		questions: [
			{
				questionId: '67ddf15fab58e26626bbfc82',
				text: 'What is your preferred shopping method?',
				type: 'multiple-choice',
				options: [
					{ optionId: '67ddf15fab58e26626bbfc83', value: 'Online' },
					{ optionId: '67ddf15fab58e26626bbfc84', value: 'In-store' },
					{ optionId: '67ddf15fab58e26626bbfc85', value: 'Both' },
				],
			},
			{
				questionId: '67ddf15fab58e26626bbfc86',
				text: 'How often do you shop online?',
				type: 'single-choice',
				options: [
					{ optionId: '67ddf15fab58e26626bbfc87', value: 'Daily' },
					{ optionId: '67ddf15fab58e26626bbfc88', value: 'Weekly' },
					{ optionId: '67ddf15fab58e26626bbfc89', value: 'Monthly' },
					{ optionId: '67ddf15fab58e26626bbfc8a', value: 'Rarely' },
				],
			},
			{
				questionId: '67ddf15fab58e26626bbfc8b',
				text: 'What is your monthly spending on shopping?',
				type: 'numerical-text',
				range: {
					min: 0,
					max: 10000,
				},
			},
		],
	},
];
