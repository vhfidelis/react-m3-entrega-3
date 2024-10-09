import { TechCard } from './TechCard';
import { CreateTech } from './CreateTech';
import { EditTech } from './EditTech';
import styles from './index.module.scss';
import { IoIosAdd } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../providers';

export const TechSection = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { techList, setTechList } = useContext(UserContext);
	const { user } = useContext(UserContext);

	useEffect(() => {
		setTechList(user.techs);
	}, [user]);
	return (
		<>
			<div className={styles.title__container}>
				<h2 className='title1'>Tecnologias</h2>
				<IoIosAdd
					className={styles.add__btn}
					onClick={() => setIsOpen({ create: true })}
					size={21}
				/>
			</div>
			<ul className={styles.container}>
				{techList?.map((tech) => {
					return (
						<li
							key={tech.id}
							className={styles.li__container}
						>
							<TechCard
								setIsOpen={setIsOpen}
								tech={tech}
							/>
						</li>
					);
				})}
			</ul>
			{isOpen.create ? <CreateTech setIsOpen={setIsOpen} /> : null}
			{isOpen.update ? <EditTech setIsOpen={setIsOpen} /> : null}
		</>
	);
};
