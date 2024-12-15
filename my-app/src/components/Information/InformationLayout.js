import styles from './Information.module.css';
import { useSelector } from 'react-redux';
import { selectInfo } from '../../selectors';
export const InformationLayout = () => {
	const info = useSelector(selectInfo);
	return <div className={styles.information}>{info}</div>;
};
