import { createBrowserRouter } from 'react-router';
import { Dashboard, Home, NotFound, QuestionnaireForm, QuestionnaireAnalytics, Questionnaire } from './pages';
import { DashboardLayout } from './layouts';

const routes = [
	{ path: '/', Component: Home },
	{
		path: '/dashboard',
		Component: DashboardLayout,
		children: [
			{ index: true, Component: Dashboard },
			{ path: '/dashboard/questionnaire/create', Component: QuestionnaireForm },
			{ path: '/dashboard/questionnaire/:questionnaireId/edit', Component: QuestionnaireForm },
			{ path: '/dashboard/questionnaire/:questionnaireId/analytics', Component: QuestionnaireAnalytics },
		],
	},
	{ path: '/questionnaire/:questionnaireId/:preview?', Component: Questionnaire },
	{ path: '*', Component: NotFound },
];

export const router = createBrowserRouter(routes);
