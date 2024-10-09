import { useContext } from 'react';
import styles from './index.module.scss';
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { TechContext } from '../../../providers';
export const TechCard = ({ tech, setIsOpen }) => {
	const { deleteTech, setToEdit } = useContext(TechContext);
	return (
		<div className={styles.card__container}>
			<h3 className='title2'>{tech.title}</h3>
			<div className={styles.inner__container}>
				<p className='headline'>{tech.status}</p>
				<div className={styles.btn__container}>
					<FaPencilAlt
						size={21}
						onClick={() => {
							setIsOpen({ update: true });
							setToEdit(tech);
						}}
					/>
					<FaRegTrashAlt
						size={21}
						onClick={() => deleteTech(tech.id)}
					/>
				</div>
			</div>
		</div>
	);
};
