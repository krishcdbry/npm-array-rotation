# npm-array-rotation [![NPM version](https://img.shields.io/npm/v/npm-array-rotation.svg)](https://www.npmjs.com/package/npm-array-rotation)
Array rotation includes left rotation, right rotation, printing stages of rotation which receives array, position(optional/positive/negative) as an input and returns the output array.

## Installation

```bash
npm i npm-array-rotation
```

## Usage
```javascript
var arrayRotation = require('npm-array-rotation');
```

## rotateLeft(array, num)

Rotates the array towards the left (Shifts number(position) items of the array from starting 
and pushes them to the end of array. If position is given negative it will do the reverse left rotation
(i.e right rotation)  
```javascript
 var inputArray = [1,2,3,4,5,6,7,8,9];
 var position = 2;
 arrayRotation.rotateLeft(inputArray, position)  
 // 2 rotations to left [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ]
```

## rotateRight(array, num)
Rotates the array towards the right (Shifts number(position) items of the array from starting 
and pushes them to the end of array. If position is given negative it will do the reverse right rotation
(i.e right rotation)  
```javascript
  var inputArray = [1,2,3,4,5,6,7,8,9];
  var position = 2;
  arrayRotation.rotateRight(inputArray, position)  
  //  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ]
```

## rotate(array, num)
Rotates the array according to the (position) towards the right/left. 
If position is positive it will do left rotation, If not it will do right rotation
```javascript
 var inputArray = [1,2,3,4,5,6,7,8,9];
 var position = 2;
 arrayRotation.rotate(inputArray, -position)  
 //  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ]  Right
 
 arrayRotation.rotate(inputArray, position) 
 //   [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ]  Left
```

## rotateLeftPrint(array, num)
Rotates the array towards the left (Shifts number(position) items of the array from starting 
and pushes them to the end of array. If position is given negative it will do the reverse left rotation
(i.e right rotation) and outputs every rotation.
```javascript
  var inputArray = [1,2,3,4,5,6,7,8,9];
  var position = 3;
  arrayRotation.rotateLeftPrint(inputArray, position)  
  //  [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  //	 [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
  //	 [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ] ]
 
```
## rotateRightPrint(array, num)
Rotates the array towards the right (Shifts number(position) items of the array from starting 
and pushes them to the end of array. If position is given negative it will do the reverse right rotation
(i.e right rotation) and outputs every rotation.
```javascript
  var inputArray = [1,2,3,4,5,6,7,8,9];
  var position = 3;
  arrayRotation.rotateLeftPrint(inputArray, position)  
 // [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
 // 	 [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ]
 //	  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ] ]
 
```

