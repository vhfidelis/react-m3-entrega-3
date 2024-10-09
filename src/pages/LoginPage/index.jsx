import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components';
import styles from './index.module.scss';
import '../../styles/Typography.scss';
import '../../styles/Buttons.scss';
import logo from '../../assets/logo.svg';
export const LoginPage = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<img
				className='logo'
				src={logo}
				alt='kenziehub logo'
			/>
			<div className={styles.inner__container}>
				<h2 className='title1'>Login</h2>
				<LoginForm />
				<h3 className='headline bold'>Ainda não possui uma conta?</h3>
				<button
					className='btn_disable'
					onClick={() => navigate('/register')}
				>
					Cadastrar-se
				</button>
			</div>
		</div>
	);
};
