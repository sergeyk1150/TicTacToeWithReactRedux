import { getIsWinner, checkField } from '../utils/utils';
import { WIN_PATTERNS } from '../constants/win-patterns';
import {
	setCurrentPlayer,
	setIsDraw,
	setIsGameEnded,
	setField,
	setInfo,
} from '../actions';
import { getInfoAboutGame } from '../utils/utils';

export const handler = (currentPlayer, isGameEnded, field, index, isDraw, dispatch) => {
	if (!isGameEnded) {
		dispatch(setField(currentPlayer, index, field));
	}

	const isWinner = getIsWinner(WIN_PATTERNS, field, currentPlayer);

	dispatch(setIsGameEnded(isWinner));

	if (checkField(field) === true && isWinner === false) {
		dispatch(setIsDraw(true));
	}
	if (!isWinner) {
		currentPlayer === 'X'
			? dispatch(setCurrentPlayer('0'))
			: dispatch(setCurrentPlayer('X'));
	}
	dispatch(setInfo(getInfoAboutGame(isDraw, isWinner, currentPlayer)));
};
