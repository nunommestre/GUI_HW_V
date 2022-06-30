/* File: tiles.js;
   GUI Assignment: Scrabble (HW5)
   Nuno Mestre, UMass Lowell Computer Science, nuno_mestre@student.uml.edu
   June 29, 2022
*/
// Used and modified Professor Heines' Associative Array
/*  File:  /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
 *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
 *  Copyright (c) 2015 by Jesse M. Heines.  All rights reserved.  May be freely
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by JMH on November 21, 2015 at 10:27 AM
 *  updated by JMH on November 25, 2015 at 10:58 AM to add the blank tile
 *  updated by JMH on November 27, 2015 at 10:22 AM to add original-distribution
 */
var ScrabbleTiles = [];
ScrabbleTiles["_"] = {
  value: 0,
  original_distribution: 2,
  number_remaining: 2,
  letter: "_",
};
ScrabbleTiles["A"] = {
  value: 1,
  original_distribution: 9,
  number_remaining: 9,
  letter: "A",
};
ScrabbleTiles["B"] = {
  value: 3,
  original_distribution: 2,
  number_remaining: 2,
  letter: "B",
};
ScrabbleTiles["C"] = {
  value: 3,
  original_distribution: 2,
  number_remaining: 2,
  letter: "C",
};
ScrabbleTiles["D"] = {
  value: 2,
  original_distribution: 4,
  number_remaining: 4,
  letter: "D",
};
ScrabbleTiles["E"] = {
  value: 1,
  original_distribution: 12,
  number_remaining: 12,
  letter: "E",
};
ScrabbleTiles["F"] = {
  value: 4,
  original_distribution: 2,
  number_remaining: 2,
  letter: "F",
};
ScrabbleTiles["G"] = {
  value: 2,
  original_distribution: 3,
  number_remaining: 3,
  letter: "G",
};
ScrabbleTiles["H"] = {
  value: 4,
  original_distribution: 2,
  number_remaining: 2,
  letter: "H",
};
ScrabbleTiles["I"] = {
  value: 1,
  original_distribution: 9,
  number_remaining: 9,
  letter: "I",
};
ScrabbleTiles["J"] = {
  value: 8,
  original_distribution: 1,
  number_remaining: 1,
  letter: "J",
};
ScrabbleTiles["K"] = {
  value: 5,
  original_distribution: 1,
  number_remaining: 1,
  letter: "K",
};
ScrabbleTiles["L"] = {
  value: 1,
  original_distribution: 4,
  number_remaining: 4,
  letter: "L",
};
ScrabbleTiles["M"] = {
  value: 3,
  original_distribution: 2,
  number_remaining: 2,
  letter: "M",
};
ScrabbleTiles["N"] = {
  value: 1,
  original_distribution: 6,
  number_remaining: 6,
  letter: "N",
};
ScrabbleTiles["O"] = {
  value: 1,
  original_distribution: 8,
  number_remaining: 8,
  letter: "O",
};
ScrabbleTiles["P"] = {
  value: 3,
  original_distribution: 2,
  number_remaining: 2,
  letter: "P",
};
ScrabbleTiles["Q"] = {
  value: 10,
  original_distribution: 1,
  number_remaining: 1,
  letter: "Q",
};
ScrabbleTiles["R"] = {
  value: 1,
  original_distribution: 6,
  number_remaining: 6,
  letter: "R",
};
ScrabbleTiles["S"] = {
  value: 1,
  original_distribution: 4,
  number_remaining: 4,
  letter: "S",
};
ScrabbleTiles["T"] = {
  value: 1,
  original_distribution: 6,
  number_remaining: 6,
  letter: "T",
};
ScrabbleTiles["U"] = {
  value: 1,
  original_distribution: 4,
  number_remaining: 4,
  letter: "U",
};
ScrabbleTiles["V"] = {
  value: 4,
  original_distribution: 2,
  number_remaining: 2,
  letter: "V",
};
ScrabbleTiles["W"] = {
  value: 4,
  original_distribution: 2,
  number_remaining: 2,
  letter: "W",
};
ScrabbleTiles["X"] = {
  value: 8,
  original_distribution: 1,
  number_remaining: 1,
  letter: "X",
};
ScrabbleTiles["Y"] = {
  value: 4,
  original_distribution: 2,
  number_remaining: 2,
  letter: "Y",
};
ScrabbleTiles["Z"] = {
  value: 10,
  original_distribution: 1,
  number_remaining: 1,
  letter: "Z",
};
// Creates an array of our keys
var keyArray = Object.keys(ScrabbleTiles);
