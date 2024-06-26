import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.tsx';
import { onRenderService } from "./utils/onRenderService";



ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Profiler id='bytebooks' onRender={onRenderService}>
				<RouterProvider router={router} />
			</Profiler>
		</Provider>
	</React.StrictMode>
);
