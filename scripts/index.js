/* File: index.js;
 * GUI Assignment: Scrabble (HW5)
 * Nuno Mestre, UMass Lowell Computer Science, nuno_mestre@student.uml.edu
 * June 29, 2022
 * Description: Contains all of the basic rules of one line scrabble in Javascript
 * Keeps track of score, word, tile count, and even ensures no rules are broken
 * (ex. tiles must be placed adjacently and cannot stack onto of eachother)
 */

// Tracks active remaining tiles
var tiles = [];
// Tracks if the game is on the first tile insert
var firstInsert = true;
// Preset scorekeeping values (allows for live score update)
var word = "";
var multiplier = false;
var points = [];
var pastId = 0;
var currentId = 0;
var score = 0;
var total_score = 0;
// Keep track of tile indexes to not deal over 100
var tile_index = 7;
var tiles_needed = 7;

// I relied heavily on the Jquery UI API documentation sheets
$(function () {
  addTiles(0, 7);
  // https://api.jqueryui.com/droppable/#option-accept
  $(".tile_drop").droppable({
    accept: function (event, ui) {
      // Allows first tile dropped to be accepted
      if (!$(this).hasClass("taken")) {
        return true;
      } else {
        for (var i = 0; i < 15; ++i) {
          if ($("#tile_holder_" + i + "").hasClass("taken")) {
            firstInsert = false;
          }
        }
        return firstInsert;
      }
    },
    // https://api.jqueryui.com/droppable/#event-drop
    drop: function (event, ui) {
      activateDroppables.call(this, event, ui);
      scoring.call(this, event, ui);
    },
  });
});

// Function that keeps track of scorekeeping and the current word
function scoring(event, ui) {
  score = 0;
  var letter = ui.draggable.attr("src")[36];
  var new_letter = ScrabbleTiles[letter].letter;
  var value = ScrabbleTiles[letter].value;
  points.push(value);
  for (var i = 0; i < 15; ++i) {
    if ($(this).attr("id") == "tile_holder_" + i + "") {
      currentId = i;
    }
  }
  // Determines which side of the word was added onto
  if (currentId > pastId) {
    word += new_letter;
  } else {
    word = new_letter + word;
  }
  pastId = currentId;
  // https://theprogrammingexpert.com/jquery-check-if-element-has-class/
  if ($(this).hasClass("double_word")) {
    // If activated all words scores will be doubled
    multiplier = true;
  } else if ($(this).hasClass("double_letter")) {
    // Add value twice for double letter
    points.push(value);
  }
  // Loops thru and totals all the points
  for (var i = 0; i < points.length; ++i) {
    score += points[i];
  }
  // Takes care of doubling score
  if (multiplier) {
    score *= 2;
  }
  $("#score").html('<h4 id="score">Word Score: </h4>');
  $("#word").html('<h4 id="word">Current Word: </h4>');
  $("#score").html($("#score").html() + score);
  $("#word").html($("#word").html() + word);
}

// Triggers when submit is pressed and refreshes everything but total score and updates tile count
$("#submit").on("click", function () {
  var tiles_used = 0;
  for (var i = 0; i < 101; ++i) {
    if ($("#tile" + i + "").hasClass("used")) {
      $("#tile" + i + "").remove();
      tiles_used++;
    }
  }
  tiles_needed += tiles_used;
  // After old tiles removed add how many more you need to get 7 (7-tiles used)
  addTiles(tile_index, tiles_needed);
  tile_index += tiles_used;
  // re-enables the boards boxes
  reactivateDroppables();
  total_score += score;
  $("#total").html('<h4 id="total">Total Points: </h4>');
  $("#total").html($("#total").html() + total_score);
  // To prevent getting a sum of everytime we add a letter
  reset_scoring();
});

// Activates the appropriates droppables
function activateDroppables(event, ui) {
  // The code until the animation is pulled from this stack overflow post to help me center the draggables
  // https://stackoverflow.com/questions/26589508/centering-draggable-elements-inside-droppable-using-jquery-ui
  var drop_el = $(this).offset();
  var drag_el = ui.draggable.offset();
  var left_end =
    drop_el.left +
    $(this).width() / 2 -
    (drag_el.left + ui.draggable.width() / 2);
  var top_end =
    drop_el.top +
    $(this).height() / 2 -
    (drag_el.top + ui.draggable.height() / 2);
  ui.draggable.animate(
    {
      top: "+=" + top_end,
      left: "+=" + left_end,
    },
    { duration: 200, easing: "linear" }
  );
  // marks the end of the stackoverflow post
  // Disables movement of dropped items
  ui.draggable.draggable("option", "disabled", true);
  ui.draggable.addClass("used");
  $(this).addClass("taken");
  // Disables all other droppables that werent the first one dragged onto them
  if (firstInsert && $(this).hasClass("taken")) {
    for (var i = 0; i < 15; ++i) {
      if (!$("#tile_holder_" + i + "").hasClass("taken")) {
        $("#tile_holder_" + i + "").droppable("option", "disabled", true);
      }
    }
    firstInsert = false;
  }
  // Activates the two adjacent droppables only (prevents gaps in words)
  for (var i = 0; i < 15; ++i) {
    if ($("#tile_holder_" + i + "").hasClass("taken")) {
      $("#tile_holder_" + (i - 1) + "").droppable("option", "disabled", false);
      $("#tile_holder_" + (i + 1) + "").droppable("option", "disabled", false);
    }
  }
}

// Resets all the score and tile information and a fresh set of new tiles with 7 displayed
$("#reset").on("click", function () {
  removeUsedTiles();
  reactivateDroppables();
  for (var i = 0; i < 27; ++i) {
    ScrabbleTiles[keyArray[i]].number_remaining =
      ScrabbleTiles[keyArray[i]].original_distribution;
  }
  addTiles(0, 7);
  resetStats();
});

// adds all remaining tiles into a global array
function get_remaining_tiles() {
  tiles = [];
  var tiles_left = 0;
  for (var i = 0; i < 27; ++i) {
    var letter = ScrabbleTiles[keyArray[i]].letter;
    var num_remaining = ScrabbleTiles[keyArray[i]].number_remaining;
    tiles_left += num_remaining;

    for (var j = 0; j < num_remaining; ++j) {
      tiles.push(letter);
    }
  }

  return tiles_left;
}

// one tile is pulled at random from the global array and the count is updated
function get_letter(value) {
  var random_letter = tiles[Math.floor(Math.random() * (value - 1))];

  for (var i = 0; i < 27; ++i) {
    if (ScrabbleTiles[keyArray[i]].letter == random_letter) {
      ScrabbleTiles[keyArray[i]].number_remaining--;
      $("#tile_count").html('<h4 id="tile_count">Tiles Left: </h4>');
      $("#tile_count").html($("#tile_count").html() + Number(value - 1));
      return random_letter;
    }
  }
}

// adds new droppable tiles (the amount relies on the amount needed)
function addTiles(start, end) {
  for (var i = start; i < end; ++i) {
    if (i < 100) {
      var remaining_tiles = get_remaining_tiles();
      var new_letter = get_letter(remaining_tiles);
      var base_url = "Images/Scrabble_Tiles/Scrabble_Tile_";
      var Tile = jQuery("<img>", {
        id: "tile" + i,
        src: base_url + new_letter + ".jpg",
        class: "tiles ui-draggable",
      });
      // heres where the draggables are created
      $("#tile_holder").append(
        Tile.draggable({
          revert: "invalid",
          snapMode: "inner",
        }).css("position", "relative")
      );
    } else {
      break;
    }
  }
}

// removes all tiles with used class
function removeUsedTiles() {
  for (var i = 0; i < 100; ++i) {
    if ($("#tile" + i + "").hasClass("ui-draggable")) {
      $("#tile" + i + "").remove();
    }
  }
}

// Resets all counters (points, tiles, words)
function resetStats() {
  $("#word").html('<h4 id="word">Current Word: </h4>');
  $("#score").html('<h4 id="score">Word Score: </h4>');
  $("#total").html('<h4 id="total">Total Points: </h4>');
  $("#tile_count").html($("#tile_count").html() + Number(tiles_left + 1));
  firstInsert = true;
  word = "";
  multiplier = false;
  points = [];
  pastId = 0;
  currentId = 0;
  score = 0;
}

// scoring reset after one word
function reset_scoring() {
  word = "";
  multiplier = false;
  points = [];
  pastId = 0;
  currentId = 0;
  score = 0;
  firstInsert = true;
}

// activates droppables
function reactivateDroppables() {
  for (var i = 0; i < 15; ++i) {
    $("#tile_holder_" + i + "").droppable("option", "disabled", false);
    $("#tile_holder_" + i + "").removeClass("taken");
  }
}
