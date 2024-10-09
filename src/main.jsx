import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { TechProvider, UserProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<TechProvider>
					<App />
				</TechProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
