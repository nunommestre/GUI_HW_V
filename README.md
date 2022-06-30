# GUI_HW_V

  [Github Repository](https://github.com/nunommestre/GUI_HW_V)
  [Github Page](https://nunommestre.github.io/GUI_HW_V/)

## Features (ALL FULLY FUNCTIONING)


### Draggable Tiles

---

<ul>
  <li>The game generates 7 Scrabble tiles that are draggable and can be placed on the board if placed on a valid spot.</li>
</ul>

### Droppable Board Squares

---

<ul>
  <li>The board consists of 15 squares (4 special) that can accept tiles and centers then if they receive any.</li>
</ul>

### Bonus Squares

---

##### Bonus squares have special classes that allow the program to recognize them and boost the score accordingly.

<ul>
  <li>Double Word: Doubles the score of the entire word</li>
  <li>Double Letter: Doubles the score of the individual tile on that block</li>
</ul>

### Score Keeping

---

<ul>
  <li>Each tile is scored by the number on it and is modified dependent on its square.</li>
  <li>Every time submit word is pressed the score and word reset allowing a new words score to be tracked.</li>
  <li>The last words score is saved to a variable called total_score and displayed aswell.</li>
</ul>

### Rule Keeping

---

<ul>
  <li>Tiles after the first one can only be placed in adjacent boardf squares</li>
  <li>Tiles cannot move after placement</li>
  <li>Tiles fall back to the rack if they are not placed on the board</li>
  <li>If there are not enough tiles left to give the user 7, then only the remaining tiles are given out</li>
  <li>Proper scoring is kept</li>
</ul>

### Submitting a word

---

<ul>
  <li>All tiles on the board are removed</li>
  <li>The necessary tiles to reach 7 total on the rack is retrieved</li>
  <li>Word score and Word counters are reset</li>
</ul>

### Restarting

---

<ul>
  <li>All tiles on the board are removed</li>
  <li>All tiles on the rack are removed</li>
  <li>A fresh set of tiles is given to the user</li>
  <li>Total score, Word score, Word, and Tile counters are reset/li>
</ul>
