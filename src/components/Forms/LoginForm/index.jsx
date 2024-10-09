import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import styles from './index.module.scss';
import { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from './LoginSchema';
import { UserContext } from '../../../providers';

export const LoginForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(LoginSchema) });
	const [showPwd, setShowPwd] = useState(false);
	const [loading, setLoading] = useState(false);
	const { loginUser } = useContext(UserContext);
	const submit = (payload) => {
		loginUser(payload, setLoading, reset);
	};
	return (
		<form onSubmit={handleSubmit(submit)}>
			<Input
				label='Email'
				type='email'
				placeholder='Digite seu email...'
				{...register('email')}
				error={errors.email}
			/>
			<div className={styles.pwd__container}>
				<Input
					label='Senha'
					placeholder='Digite sua senha...'
					type={showPwd ? 'text' : 'password'}
					{...register('password')}
					error={errors.password}
				/>
				{showPwd ? (
					<IoMdEyeOff
						className={styles.ico}
						onClick={() => setShowPwd(!showPwd)}
					/>
				) : (
					<IoMdEye
						className={styles.ico}
						onClick={() => setShowPwd(!showPwd)}
					/>
				)}
			</div>
			<button
				className={`btn ${styles.login__btn}`}
				type='submit'
			>
				{loading ? 'Entrando...' : 'Entrar'}
			</button>
		</form>
	);
};
