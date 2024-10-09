import { RoutesMain } from './routes/RoutesMain';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/GlobalStyles.scss';
const App = () => {
	return (
		<div className='App'>
			<ToastContainer autoClose={1000} />
			<RoutesMain />
		</div>
	);
};

export default App;
