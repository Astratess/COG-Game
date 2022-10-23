/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/main.js":
/*!********************************!*\
  !*** ../src/assets/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_characters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/characters.js */ "../src/assets/js/modules/characters.js");
/* harmony import */ var _modules_player_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/player-container.js */ "../src/assets/js/modules/player-container.js");
/* harmony import */ var _modules_player_movement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player-movement.js */ "../src/assets/js/modules/player-movement.js");




/***/ }),

/***/ "../src/assets/js/modules/characters.js":
/*!**********************************************!*\
  !*** ../src/assets/js/modules/characters.js ***!
  \**********************************************/
/*! exports provided: sola, brann */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sola", function() { return sola; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brann", function() { return brann; });
var sola = {
  id: 'sola',
  bg: './assets/images/temp/sola/bg.jpg',
  src: './assets/images/temp/sola/solaport.png',
  items: {
    body: './assets/images/temp/sola/bodysola.png',
    hair: './assets/images/temp/sola/hair2.png',
    weapon: './assets/images/temp/sola/icebroom.png',
    dress: './assets/images/temp/sola/dress1.png'
  },
  skillsSmall: ['./assets/images/temp/sola/solaskill1.png', './assets/images/temp/sola/solaskill2.png', './assets/images/temp/sola/solaskill3.png'],
  skills: ['./assets/images/temp/sola/skill1.png', './assets/images/temp/sola/skill2.png', './assets/images/temp/sola/skill3.png'],
  hp: 10,
  movement: 3,
  armor: 0,
  passive: '',
  mana: 1,
  crystals: 1
};
var brann = {
  id: 'brann',
  bg: './assets/images/temp/brann/bg.jpg',
  src: './assets/images/temp/brann/brannport.png',
  items: {
    body: './assets/images/temp/brann/body.png',
    hair: './assets/images/temp/brann/hair1.png',
    weapon: './assets/images/temp/brann/plates2.png',
    dress: './assets/images/temp/brann/dress2.png'
  },
  skillsSmall: ['./assets/images/temp/brann/brannskill1.png', './assets/images/temp/brann/brannskill2.png', './assets/images/temp/brann/brannskill3.png'],
  skills: ['./assets/images/temp/brann/skill1.png', './assets/images/temp/brann/skill2.png', './assets/images/temp/brann/skill3.png'],
  hp: 10,
  movement: 3,
  armor: 2,
  passive: '',
  crystals: 1
};

/***/ }),

/***/ "../src/assets/js/modules/player-container.js":
/*!****************************************************!*\
  !*** ../src/assets/js/modules/player-container.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _characters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters.js */ "../src/assets/js/modules/characters.js");

var $playerBox1 = $('.player1');
var $playerBox2 = $('.player2');
renderPlayerBox($playerBox1, _characters_js__WEBPACK_IMPORTED_MODULE_0__["sola"]);
renderPlayerBox($playerBox2, _characters_js__WEBPACK_IMPORTED_MODULE_0__["brann"]);

function renderPlayerBox(playerbox, char) {
  playerbox.css('background-image', "url(".concat(char.bg, ")"));
  playerbox.find('.player__image').html("<img src=\"".concat(char.src, "\" alt=\"\">"));
  playerbox.find('.player__stats').html("\n\t\t<li class=\"hp\"> HP: ".concat(char.hp, " </li>\n\t\t\n\t\t<li class=\"armor\"> Armor: ").concat(char.armor, " </li>\n\t\t\n\t\t<li class=\"movement\"> Movement: ").concat(char.movement, " </li>\n\t\t\n\t\t<li class=\"crystals\"> Crystals: ").concat(char.crystals, " </li>\n\t"));
  var skills = '';

  for (var i = 0; i < 3; i++) {
    skills += "\n\t\t<li>\n\t\t\t<img src=\"".concat(char.skillsSmall[i], "\" alt=\"\">\n\n\t\t\t<img src=\"").concat(char.skills[i], "\" alt=\"\">\n\t\t</li>\n\t\t");
  }

  playerbox.find('.player__skills').html(skills);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/player-movement.js":
/*!***************************************************!*\
  !*** ../src/assets/js/modules/player-movement.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _characters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters.js */ "../src/assets/js/modules/characters.js");

var pass = document.querySelector('.pass');
var playerBox1 = document.querySelector('.player1');
var playerBox2 = document.querySelector('.player2');
var player1Steps = document.querySelector('.player1 .movement');
var player2Steps = document.querySelector('.player2 .movement');
var player1Crystals = document.querySelector('.player1 .crystals');
var player2Crystals = document.querySelector('.player2 .crystals');
var turnDisplay = document.getElementById('turn');
var roundDisplay = document.getElementById('round');
var player1Stats = _characters_js__WEBPACK_IMPORTED_MODULE_0__["sola"];
var player2Stats = _characters_js__WEBPACK_IMPORTED_MODULE_0__["brann"];
var turn = 1;
var round = 1;
var steps = 0;
var reachable = true;
var roundEven;
var roundOdd;
var firstToStart;
var secondToStart;
turnRotationCheck();
var player = document.createElement('div');
player.classList.add('chibi-holder');
player.id = player1Stats.id;
player.innerHTML = "\n\t<img src=\"".concat(player1Stats.items.body, "\" alt=\"\" class=\"body\">\n\t<img src=\"").concat(player1Stats.items.hair, "\" alt=\"\" class=\"hair\">\n\t<img src=\"").concat(player1Stats.items.weapon, "\" alt=\"\" class=\"weapon\">\n\t<img src=\"").concat(player1Stats.items.dress, "\" alt=\"\" class=\"dress\">\n");
var player2 = document.createElement('div');
player2.classList.add('chibi-holder');
player2.classList.add('chibi-holder--rotated');
player2.id = player2Stats.id;
player2.innerHTML = "\n\t<img src=\"".concat(player2Stats.items.body, "\" alt=\"\" class=\"body\">\n\t<img src=\"").concat(player2Stats.items.hair, "\" alt=\"\" class=\"hair\">\n\t<img src=\"").concat(player2Stats.items.weapon, "\" alt=\"\" class=\"weapon\">\n\t<img src=\"").concat(player2Stats.items.dress, "\" alt=\"\" class=\"dress\">\n");
var tiles = document.querySelectorAll('.tile');
pass.addEventListener('click', function () {
  turn++;
  reachable = true;

  if (turn == 7) {
    turn = 1;
    round++;
    reachable = true;
    player1Stats.movement = 3;
    player2Stats.movement = 3;
    addCrystal(player1Stats);
    addCrystal(player2Stats);
    player1Crystals.innerHTML = "Crystals: ".concat(player1Stats.crystals);
    player2Crystals.innerHTML = "Crystals: ".concat(player2Stats.crystals);
  }

  turnRotationCheck();
  roundDisplay.textContent = "Round : ".concat(round);
  turnDisplay.textContent = "Turn : ".concat(turn);

  if (round % 2 == 1) {
    if (turn == 1 || turn == 4 || turn == 5) {
      replacePlaybox(playerBox1, 'player-down', 'topToBottom');
      replacePlaybox(playerBox2, 'player-up', 'bottomToTop');
    } else {
      replacePlaybox(playerBox1, 'player-up', 'bottomToTop');
      replacePlaybox(playerBox2, 'player-down', 'topToBottom');
    }
  }

  if (round % 2 == 0) {
    if (turn == 2 || turn == 3 || turn == 6) {
      playerBox1.style.animation = 'topToBottom 2s linear forwards';
      playerBox2.style.animation = 'bottomToTop 2s linear forwards';
    } else {
      playerBox1.style.animation = 'bottomToTop 2s linear forwards';
      playerBox2.style.animation = 'topToBottom 2s linear forwards';
    }
  }
});
tiles.forEach(function (tile) {
  tile.addEventListener('click', function () {
    if (roundOdd) {
      if (firstToStart && tile.innerHTML == "") {
        if (player.parentNode) {
          checkReachable(player1Stats.movement, player.parentNode, tile);
          player1Stats.movement = steps;
          player1Steps.innerText = "Movement: ".concat(player1Stats.movement);
        }

        if (reachable) {
          relocateAnimation(tile, player);
        }
      } else if (secondToStart && tile.innerHTML == "") {
        if (player2.parentNode) {
          checkReachable(player2Stats.movement, player2.parentNode, tile);
          player2Stats.movement = steps;
          player2Steps.innerText = "Movement: ".concat(player2Stats.movement);
        }

        if (reachable) {
          relocateAnimation(tile, player2);
        }
      }
    }

    if (roundEven) {
      if (secondToStart && tile.innerHTML == "") {
        if (player.parentNode) {
          checkReachable(player1Stats.movement, player.parentNode, tile);
          player1Stats.movement = steps;
          player1Steps.innerText = "Movement: ".concat(player1Stats.movement);
        }

        if (reachable) {
          relocateAnimation(tile, player);
        }
      } else if (firstToStart && tile.innerHTML == "") {
        if (player2.parentNode) {
          checkReachable(player2Stats.movement, player2.parentNode, tile);
          player2Stats.movement = steps;
          player2Steps.innerText = "Movement: ".concat(player2Stats.movement);
        }

        if (reachable) {
          relocateAnimation(tile, player2);
        }
      }
    }
  });
});

function relocateAnimation(tile, currPlayer) {
  var tileX = getOffset(tile).left;
  var tileY = getOffset(tile).top;
  var currentX = getOffset(currPlayer).left;
  var currentY = getOffset(currPlayer).top;
  var moveToX = Math.floor(tileX - currentX);
  var moveToY = Math.floor(tileY - currentY);
  relocateWait(tile, currPlayer);
  return currPlayer.style.transform = "translate(".concat(moveToX, "px, ").concat(moveToY, "px");
}

function relocateWait(tile, currPlayer) {
  setTimeout(function () {
    return tile.appendChild(currPlayer), clearAnimation(currPlayer);
  }, 1500);
}

function clearAnimation(currPlayer) {
  return currPlayer.style.transform = 'translate(0px, 0px)';
}

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top
  };
}

function checkReachable(player, place, tile) {
  steps = player;

  if (place.id[0] < tile.id[0]) {
    steps -= Number(tile.id[0]) - Number(place.id[0]);
  }

  if (place.id[0] > tile.id[0]) {
    steps -= Number(place.id[0]) - Number(tile.id[0]);
  }

  if (place.id[1] < tile.id[1]) {
    steps -= Number(tile.id[1]) - Number(place.id[1]);
  }

  if (place.id[1] > tile.id[1]) {
    steps -= Number(place.id[1]) - Number(tile.id[1]);
  }

  if (steps < 0) {
    return reachable = false, steps = player;
  }

  return reachable = true, steps = steps;
}

function replacePlaybox(playerBox, id, animation) {
  playerBox.style.animation = "".concat(animation, " 1.5s linear forwards");
  playerBox.id = id;
}

function turnRotationCheck() {
  roundEven = round % 2 == 0;
  roundOdd = round % 2 == 1;
  firstToStart = turn == 1 || turn == 4 || turn == 5;
  secondToStart = turn == 2 || turn == 3 || turn == 6;
}

function addCrystal(player) {
  if (player.crystals < 2) {
    player.crystals++;
  }
}

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map