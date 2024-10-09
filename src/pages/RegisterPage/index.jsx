import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../../components';
import logo from '../../assets/logo.svg';
import styles from './index.module.scss';
export const RegisterPage = () => {
	const navigate = useNavigate();
	return (
		<section className={styles.container}>
			<div className={styles.title__container}>
				<img
					src={logo}
					alt=''
				/>
				<div>
					<button
						className='btn_return'
						onClick={() => navigate('/')}
					>
						Voltar
					</button>
				</div>
			</div>
			<div>
				<RegisterForm />
			</div>
		</section>
	);
};
