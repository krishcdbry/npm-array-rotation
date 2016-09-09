'use strict'

/**
 * Rotate an array in left, right with positions and also option of displaying all rotations.
 *
 * @module array-rotation
 * @typicalname arrayRotate
 * @example
 * var sortBy = require('array-rotation')
 */


exports.rotateLeft = rLeft;
exports.rotateRight = rRight;

exports.rotateLeftPrint = rLeftPrint;
exports.rotateRightPrint = rRightPrint;

exports.rotate = genericRotate;

/**
 * @name rotateLeft
 * @typicalname rLeft
 * @param arrData  - Input array data
 * @param position - Number of position to move
 *
 * @usage
 * var arrayRotation = require('array-rotation')
 * var inputArray = [1,2,3,4,5,6,7,8,9];
 *
 * arrayRotation.rotateLeft(inputArray, 2)  //  [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ]
 *
 */
function rLeft (arrData, position) {
	var newArr = arrData.slice();
	var arrLen = newArr.length;

	// if negative input then we can call rotateRight
	if (position < 0) {
		return rRight(newArr, 0-position)
	}
	else {

		var num = (position)
			? position%arrLen
			: arrLen;

		var tempArr = newArr.splice(0, num);
		newArr.push.apply(newArr, tempArr);
	}

	return newArr;
}

/**
 * @name rotateRight
 * @typicalname rRight
 * @param arrData  - Input array data
 * @param position (optional) - Number of position to move
 *
 * @usage
 * var arrayRotation = require('array-rotation')
 * var inputArray = [1,2,3,4,5,6,7,8,9];
 *
 * arrayRotation.rotateRight(inputArray, 2)  //  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ]
 *
 */
function rRight (arrData, position) {
	var newArr = arrData.slice();
	var arrLen = newArr.length;

	// if negative input then we can call rotateLeft
	if (position < 0) {
		return rLeft(newArr, 0-position)
	}
	else {
		var num = (position)
			? arrLen-(position%arrLen)
			: arrLen;

		var tempArr = newArr.splice(0, num);
		newArr.push.apply(newArr, tempArr);
	}

	return newArr;
}


/**
 * @name genericRotate
 * @typicalname genericRotate
 * @param arrData  - Input array data
 * @param position (optional) - Number of position to move
 *
 * @usage
 * var arrayRotation = require('array-rotation')
 * var inputArray = [1,2,3,4,5,6,7,8,9];
 *
 * arrayRotation.rotate(inputArray, -2)  //  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ]  Right
 * arrayRotation.rotate(inputArray, 2)  //   [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ]  Left
 *
 */
function genericRotate (arrData, position) {
	if (position < 0) {
		return rRight(arrData, 0-position)
	}
	else {
		return rLeft(arrData, position)
	}

}


/**
 * @name rotateLeftPrint
 * @typicalname rLeftPrint
 * @param arrData  - Input array data
 * @param position - Number of position to move
 *
 *
 *  * @usage
 * var arrayRotation = require('array-rotation')
 * var inputArray = [1,2,3,4,5,6,7,8,9];
 *
 * arrayRotation.rotateLeftPrint(inputArray, 3)  //  [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
 *														[ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
 *														[ 3, 4, 5, 6, 7, 8, 9, 1, 2 ] ]
 *
 */
function rLeftPrint (arrData, position) {
	var newArr = arrData.slice();
	var arrLen = newArr.length;
	var finalArr = [];

	// if negative input then we can call rotateRight
	if (position < 0) {
		return rRightPrint(newArr, 0-position)
	}
	else {

		for (var i = 0; i < position; i++) {
			var tmpArr = newArr.slice();
			tmpArr.push.apply(newArr, newArr.splice(0, 1))
			finalArr.push(tmpArr);
		}
		finalArr.push(newArr);
	}

	return finalArr;
}


/**
 * @name rotateRightPrint
 * @typicalname rRightPrint
 * @param arrData  - Input array data
 * @param position - Number of position to move
 *  * @usage
 * var arrayRotation = require('array-rotation')
 * var inputArray = [1,2,3,4,5,6,7,8,9];
 *
 * arrayRotation.rotateRightPrint(inputArray, 3)  // [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
 * 														[ 9, 1, 2, 3, 4, 5, 6, 7, 8 ]
 * 														[ 8, 9, 1, 2, 3, 4, 5, 6, 7 ] ]
 *
 */
function rRightPrint (arrData, position) {
	var newArr = arrData.slice();
	var arrLen = newArr.length;
	var finalArr = [];

	// if negative input then we can call rotateRight
	if (position < 0) {
		return rLeftPrint(newArr, 0-position)
	}
	else {

		for (var i = 0; i < position; i++) {
			var tmpArr = newArr.slice();
			tmpArr.push.apply(newArr, newArr.splice(0, arrLen-1))
			finalArr.push(tmpArr);
		}
		finalArr.push(newArr);
	}

	return finalArr;
}
