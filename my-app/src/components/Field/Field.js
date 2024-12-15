import PropTypes from 'prop-types';
import styles from './Field.module.css';
import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors';
import { useSelector, useDispatch } from 'react-redux';

import { handler } from '../../handlers/handler';

export const FieldContainer = () => {
	const dispatch = useDispatch();
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const onHandler = (index) => {
		handler(currentPlayer, isGameEnded, field, index, isDraw, dispatch);
	};

	return (
		<div className={styles.field}>
			{field.map((item, index) => (
				<button
					className={styles.button}
					disabled={field[index]}
					key={index}
					onClick={() => {
						onHandler(index);
					}}
				>
					{field[index]}
				</button>
			))}
		</div>
	);
};

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
