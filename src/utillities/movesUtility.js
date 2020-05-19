import pieceTypes from '../constants/pieceTypes';
import { getIdx } from './rowColToIndexUtility';
import { getSquareNameFromRowCol } from './squareNameUtility';

export const isEnemyPiece = (pieceType, isWhite) => {
  const targetIsWhite =
    pieceType === pieceTypes.WHITE_PAWN ||
    pieceType === pieceTypes.WHITE_ROOK ||
    pieceType === pieceTypes.WHITE_KNIGHT ||
    pieceType === pieceTypes.WHITE_BISHOP ||
    pieceType === pieceTypes.WHITE_QUEEN ||
    pieceType === pieceTypes.WHITE_KING;
  return (targetIsWhite && !isWhite) || (!targetIsWhite && isWhite);
};

export const incrementer = count => count + 1;
export const decrementer = count => count - 1;
export const minBound = count => count >= 0;
export const maxBound = count => count <= 7;
export const getFromCurRow = col => curRow => getIdx(curRow, col);
export const getFromCurCol = row => curCol => getIdx(row, curCol);
export const addMoveFromCurRow = (moves, col) => curRow => moves.push(getSquareNameFromRowCol(curRow, col));
export const addMoveFromCurCol = (moves, row) => curCol => moves.push(getSquareNameFromRowCol(row, curCol));
