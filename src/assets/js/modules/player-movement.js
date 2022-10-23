import {sola, brann} from './characters.js'

const pass = document.querySelector('.pass')
const playerBox1 = document.querySelector('.player1')
const playerBox2 = document.querySelector('.player2')
const player1Steps = document.querySelector('.player1 .movement')
const player2Steps = document.querySelector('.player2 .movement')
const player1Crystals = document.querySelector('.player1 .crystals')
const player2Crystals = document.querySelector('.player2 .crystals')
const turnDisplay = document.getElementById('turn')
const roundDisplay = document.getElementById('round')
const player1Stats = sola;
const player2Stats = brann;

let turn = 1;
let round = 1;
let steps = 0;
let reachable = true;
let roundEven;
let roundOdd;
let firstToStart;
let secondToStart;

turnRotationCheck();

const player = document.createElement('div')
player.classList.add('chibi-holder');
player.id = player1Stats.id;
player.innerHTML = `
	<img src="${player1Stats.items.body}" alt="" class="body">
	<img src="${player1Stats.items.hair}" alt="" class="hair">
	<img src="${player1Stats.items.weapon}" alt="" class="weapon">
	<img src="${player1Stats.items.dress}" alt="" class="dress">
`

const player2 = document.createElement('div')
player2.classList.add('chibi-holder');
player2.classList.add('chibi-holder--rotated');
player2.id = player2Stats.id;
player2.innerHTML = `
	<img src="${player2Stats.items.body}" alt="" class="body">
	<img src="${player2Stats.items.hair}" alt="" class="hair">
	<img src="${player2Stats.items.weapon}" alt="" class="weapon">
	<img src="${player2Stats.items.dress}" alt="" class="dress">
`

const tiles = document.querySelectorAll('.tile');

pass.addEventListener('click', ()=>{
	turn++;
	reachable = true;

 	if (turn == 7){
		turn = 1;
		round++;
		reachable = true;
		player1Stats.movement = 3;
		player2Stats.movement = 3;

		addCrystal(player1Stats);
		addCrystal(player2Stats);
		player1Crystals.innerHTML = `Crystals: ${player1Stats.crystals}`;
		player2Crystals.innerHTML = `Crystals: ${player2Stats.crystals}`;
	}

	turnRotationCheck();

	roundDisplay.textContent = `Round : ${round}`
	turnDisplay.textContent = `Turn : ${turn}`

	if(round % 2 == 1){
		if (turn == 1 || turn == 4 || turn == 5) {
			replacePlaybox(playerBox1,'player-down','topToBottom');
			replacePlaybox(playerBox2,'player-up','bottomToTop');
		} else {
			replacePlaybox(playerBox1,'player-up','bottomToTop');
			replacePlaybox(playerBox2,'player-down','topToBottom');
		}
	}

	if(round % 2 == 0){
		if (turn == 2 || turn == 3 || turn == 6) {
			playerBox1.style.animation = 'topToBottom 2s linear forwards'
			playerBox2.style.animation = 'bottomToTop 2s linear forwards'
		} else {
			playerBox1.style.animation = 'bottomToTop 2s linear forwards'
			playerBox2.style.animation = 'topToBottom 2s linear forwards'
		}
	}

})

tiles.forEach((tile) =>{
	tile.addEventListener('click',()=>{
		if (roundOdd){
			if (firstToStart && tile.innerHTML == "") {
				if (player.parentNode) {
					checkReachable(player1Stats.movement,player.parentNode, tile);
					player1Stats.movement = steps;
					player1Steps.innerText = `Movement: ${player1Stats.movement}`;
				}
		
				if (reachable) {
					relocateAnimation(tile, player)
				}
			}

			else if (secondToStart && tile.innerHTML == "") {
				if (player2.parentNode) {
					checkReachable(player2Stats.movement,player2.parentNode, tile);
					player2Stats.movement = steps;
					player2Steps.innerText = `Movement: ${player2Stats.movement}`
				}

				if (reachable) {
					relocateAnimation(tile, player2)
				}
			}
		}

		if (roundEven) {
			if (secondToStart && tile.innerHTML == "") {
				if (player.parentNode) {
					checkReachable(player1Stats.movement,player.parentNode, tile);
					player1Stats.movement = steps;
					player1Steps.innerText = `Movement: ${player1Stats.movement}`
				}
		
				if (reachable) {
					relocateAnimation(tile, player)
				}
			}

			else if (firstToStart && tile.innerHTML == "") {
				if (player2.parentNode) {
					checkReachable(player2Stats.movement,player2.parentNode, tile);
					player2Stats.movement = steps;
					player2Steps.innerText = `Movement: ${player2Stats.movement}`
				}

				if (reachable) {
					relocateAnimation(tile, player2)
				}
			}
		}
	});
});


function relocateAnimation(tile, currPlayer) {
	const tileX = getOffset(tile).left;
	const tileY = getOffset(tile).top;
	const currentX = getOffset(currPlayer).left;
	const currentY = getOffset(currPlayer).top;
	const moveToX = Math.floor(tileX - currentX)
	const moveToY = Math.floor(tileY - currentY)

	relocateWait(tile, currPlayer);

	return currPlayer.style.transform = `translate(${moveToX}px, ${moveToY}px`;
}

function relocateWait(tile, currPlayer) {
	setTimeout(()=> {
		return tile.appendChild(currPlayer), clearAnimation(currPlayer);
	},1500);
}

function clearAnimation(currPlayer) {
	return currPlayer.style.transform = 'translate(0px, 0px)';
}

function getOffset(el) {
	const rect = el.getBoundingClientRect(); 	
	return {
		left: rect.left,
		top: rect.top
	};
}

function checkReachable(player,place,tile){
	steps = player;

	if (place.id[0] < tile.id[0]){
		steps -= Number(tile.id[0]) - Number(place.id[0]);
	}

	if(place.id[0] > tile.id[0]){
		steps -= Number(place.id[0]) - Number(tile.id[0]);
	}

	if(place.id[1] < tile.id[1]){
		steps -= Number(tile.id[1]) - Number(place.id[1]);
	}

	if(place.id[1] > tile.id[1]){
		steps -= Number(place.id[1]) - Number(tile.id[1]);
	}

	if (steps < 0) {
		return reachable = false, steps = player;
	}

	return reachable = true, steps = steps;
}

function replacePlaybox(playerBox, id, animation) {
	playerBox.style.animation = `${animation} 1.5s linear forwards`
	playerBox.id = id;
}

function turnRotationCheck(){
	roundEven = round % 2 == 0;
	roundOdd = round % 2 == 1; 
	firstToStart = (turn == 1 || turn == 4 || turn == 5);
	secondToStart = (turn == 2 || turn == 3 || turn == 6);
}

function addCrystal(player) {
	if (player.crystals < 2) {
		player.crystals ++;
	}
}