/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './routes.ts';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
