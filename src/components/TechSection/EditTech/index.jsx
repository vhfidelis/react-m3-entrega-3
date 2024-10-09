import { useContext, useEffect, useRef } from 'react';
import { TechContext } from '../../../providers';
import { useForm } from 'react-hook-form';
import { EditTechSchema } from './EditTechSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Forms/Input';
import styles from './index.module.scss';
import { MdClose } from 'react-icons/md';
export const EditTech = ({ setIsOpen }) => {
	const modalRef = useRef(null);
	const buttonRef = useRef(null);
	const { updateTech, toEdit } = useContext(TechContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(EditTechSchema),
	});
	const submit = (payload) => {
		updateTech(payload, toEdit);
		setIsOpen({ update: false });
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
					<h2 className='title2'>Tecnologia detalhes</h2>
					<button
						ref={buttonRef}
						className={styles.close__btn}
						onClick={() => setIsOpen({ update: false })}
						aria-label='close'
						title='Fechar'
					>
						<MdClose size={21} />
					</button>
				</div>
				<div className={styles.form__container}>
					<form onSubmit={handleSubmit(submit)}>
						<Input
							readOnly
							label='Nome'
							placeholder={toEdit.title}
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
								Atualizar tecnologia
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
