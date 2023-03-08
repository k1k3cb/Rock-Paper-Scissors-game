// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const gameContainerElement = document.getElementById('game-container');
// const optionElement = document.querySelectorAll('[data-element]');

const UserScoreElement = document.getElementById('UserScore');
const PCScoreElement = document.getElementById('PCScore');

const gameOptions = ['paper', 'rock', 'scissors'];
let UserOption = '';

const gameRules = {
	rock: {
		paper: false,
		scissors: true,
		lizard: true,
		spock: false
	},

	paper: {
		rock: true,
		scissors: false,
		lizard: false,
		spock: true
	},

	scissors: {
		rock: false,
		paper: true,
		lizard: true,
		spock: false
	},

	lizard: {
		rock: false,
		paper: true,
		scissors: false,
		spock: true
	},

	spock: {
		rock: true,
		paper: false,
		scissors: true,
		lizard: false
	}
};


// ::jugada PC simple
const pcSelects = () => {
	 const pcOption = Math.floor(Math.random() * gameOptions.length);
	return gameOptions[pcOption];
};




// ::comparar jugada
const result = (UserOption ,pcSelection)=> {
  console.log(UserOption, '--', pcSelection);
  if (UserOption === pcSelection) {
		console.log('DRAW');

    gameContainerElement.innerHTML={

      
    };
	} else if (gameRules[UserOption][pcSelection] ) {
		console.log('WIN');
	} else {
		console.log('LOSE');
	}
};



// ::elección jugador PC and play

// opcion con '[data-element]'
// optionElement.forEach(option => {
// 	option.addEventListener('click', () => {
// 		// console.dir(option.dataset.element);		
// 		UserOption = option.dataset.element;		
//     result(UserOption, pcSelects());
// 	});
// });

gameContainerElement.addEventListener('click', (e) => {
  if (!e.target.dataset.element) return 
	UserOption = e.target.dataset.element;
	result(UserOption, pcSelects());
});
