import { useContext } from 'react';
import styles from './index.module.scss';
import logo from '../../assets/logo.svg';
import { UserContext } from '../../providers';
import { TechSection } from '../../components';

export const DashBoard = () => {
	const { userLogout, user } = useContext(UserContext);
	return (
		<>
			<nav className={`${styles.nav} fixed__top`}>
				<div className={styles.nav__container}>
					<img
						src={logo}
						alt=''
					/>
					<div>
						<button
							className='btn_return'
							onClick={() => userLogout()}
						>
							Sair
						</button>
					</div>
				</div>
			</nav>
			<header className={styles.header}>
				<div className={styles.header__container}>
					<h1 className='title1'>Olá, {user ? user.name : '...'}</h1>
					<h3 className='headline'>{user ? user.course_module : '...'}</h3>
				</div>
			</header>{' '}
			<main className={styles.main}>
				<div className={styles.main__container}>
					<TechSection />
				</div>
			</main>
		</>
	);
};
