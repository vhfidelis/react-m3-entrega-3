import { MdClose } from 'react-icons/md';
import { Input } from '../../Forms/Input';
import { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TechContext } from '../../../providers';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateTechSchema } from './CreateTechSchema';
import styles from './index.module.scss';

export const CreateTech = ({ setIsOpen }) => {
	const modalRef = useRef(null);
	const buttonRef = useRef(null);
	const { registerTech } = useContext(TechContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(CreateTechSchema),
	});
	const submit = (payload) => {
		registerTech(payload);
		setIsOpen(false);
	};
	useEffect(() => {
		const handleOutclick = (e) => {
			!modalRef.current?.contains(e.target) ? setIsOpen(false) : null;
		};

		window.addEventListener('mousedown', handleOutclick);
		const handleKeydown = (e) => {
			e.key === 'Escape' ? buttonRef.current?.click() : null;
		};
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('mousedown', handleOutclick);
			window.removeEventListener('keydown', handleKeydown);
		};
	}, []);
	return (
		<div
			role='dialog'
			className={styles.modal__overlay}
		>
			<div
				ref={modalRef}
				className={styles.modal__box}
			>
				<div className={styles.header}>
					<h2 className='title2'>Cadastrar tecnologia</h2>
					<button
						ref={buttonRef}
						className={styles.close__btn}
						onClick={() => setIsOpen({ create: false })}
						aria-label='close'
						title='Fechar'
					>
						<MdClose size={21} />
					</button>
				</div>
				<div className={styles.form__container}>
					<form onSubmit={handleSubmit(submit)}>
						<Input
							label='Nome'
							type='text'
							{...register('title')}
							error={errors.title}
							placeholder='Tecnologia'
						/>
						<div>
							<label className={`label ${styles.select__label}`}>
								Selecionar Status
							</label>
							{errors.status ? (
								<p className='help'>{errors.status.message}</p>
							) : null}
							<select
								name='status'
								id='status'
								{...register('status')}
							>
								<option value='Iniciante'>Iniciante</option>
								<option value='Intermediário'>Intermediário</option>
								<option value='Avançado'>Avançado</option>
							</select>
						</div>
						<div>
							<button
								className='btn'
								type='submit'
							>
								Cadastrar tecnologia
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
