import { forwardRef } from 'react';
import styles from './index.module.scss';
export const Input = forwardRef(({ label, error, ...rest }, ref) => {
	return (
		<div className={styles.container}>
			<label className='label'>{label}</label>
			<input
				ref={ref}
				{...rest}
			/>
			{error ? <p className='help'>{error.message}</p> : null}
		</div>
	);
});
