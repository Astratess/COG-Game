import {sola, brann} from './characters.js'

const $playerBox1 = $('.player1')
const $playerBox2 = $('.player2')

renderPlayerBox($playerBox1, sola);
renderPlayerBox($playerBox2, brann);

function renderPlayerBox(playerbox, char) {
	playerbox.css('background-image', `url(${char.bg})`)

	playerbox.find('.player__image').html(`<img src="${char.src}" alt="">`)
	playerbox.find('.player__stats').html(`
		<li class="hp"> HP: ${char.hp} </li>
		
		<li class="armor"> Armor: ${char.armor} </li>
		
		<li class="movement"> Movement: ${char.movement} </li>
		
		<li class="crystals"> Crystals: ${char.crystals} </li>
	`)

	let skills = '';
	 
	for (let i = 0; i < 3; i++) {
		skills += `
		<li>
			<img src="${char.skillsSmall[i]}" alt="">

			<img src="${char.skills[i]}" alt="">
		</li>
		`
	}

	playerbox.find('.player__skills').html(skills)
}

