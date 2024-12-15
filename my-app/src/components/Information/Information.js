import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsDraw, selectIsGameEnded, selectCurrentPlayer } from '../../selectors';
import { setInfo } from '../../actions';
import { getInfoAboutGame } from '../../utils/utils';
import { useEffect } from 'react';
import { InformationLayout } from './InformationLayout';

export const InformationContainer = () => {
	const dispatch = useDispatch();
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

	useEffect(() => {
		dispatch(setInfo(getInfoAboutGame(isDraw, isGameEnded, currentPlayer)));
	});

	return <InformationLayout />;
};

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
