// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

import rockImage from '../assets/images/icon-rock.svg';
import paperImage from '../assets/images/icon-paper.svg';
import scissorsImage from '../assets/images/icon-scissors.svg';
import lizardImage from '../assets/images/icon-lizard.svg';
import spockImage from '../assets/images/icon-spock.svg';

const gameContainerElement = document.getElementById('game-container');
// const optionElement = document.querySelectorAll('[data-element]');

const userScoreElement = document.getElementById('UserScore');
const pcScoreElement = document.getElementById('PCScore');
const containerResultElement = document.getElementById('game-container-result');
const userPickedOptionElement = document.getElementById('user-picked-option');
const userPickedImgElement = document.getElementById('user-picked-img');
const gameResultElement = document.getElementById('game-result');
const playAgainBtnElement = document.getElementById('play-again-btn');
const pcPickedOptionElement = document.getElementById('pc-picked-option');
const pcPickedImgElement = document.getElementById('pc-picked-img');



const gameOptions = ['paper', 'rock', 'scissors'];
let userOption = '';
let pcSelection;
let userCount = '';
let pcCount = '';

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

const IMAGES = {
	rock: rockImage,
	paper: paperImage,
	scissors: scissorsImage,
	lizard: lizardImage,
	spock: spockImage
};

//# detectar modo de juego
if (window.location.pathname.includes('advanced.html')) {
	gameOptions.push('lizard', 'spock');
}

// #jugada PC simple
const pcSelects = () => {
	pcSelection = Math.floor(Math.random() * gameOptions.length);
	return gameOptions[pcSelection];
};

// #comparar jugada
const result = (userOption, pcSelection) => {
	console.log(userOption, '--', pcSelection);
	if (userOption === pcSelection) {
		console.log('DRAW 😑');
		gameResultElement.textContent = 'DRAW 😑';
	} else if (gameRules[userOption][pcSelection]) {
		console.log('YOU WIN 🥳');
		userCount++;
		userScoreElement.textContent = userCount;
		gameResultElement.textContent = 'YOU WIN 🥳';
	} else {
		console.log('YOU LOSE 🤬');
		pcCount++;
		pcScoreElement.textContent = pcCount;
		gameResultElement.textContent = 'YOU LOSE 🤬';
	}
};

// #elección jugador PC and play
if(gameContainerElement){
	gameContainerElement.addEventListener('click', e => {
	if (!e.target.dataset.element) return;
	userOption = e.target.dataset.element;
	pcSelection = pcSelects();
	containerResultElement.classList.remove('hide');
	gameContainerElement.classList.add('hide');
	pcPickedImgElement.src = IMAGES[pcSelection];
	userPickedImgElement.src = IMAGES[userOption];
	userPickedOptionElement.classList.add(userOption);
	userPickedImgElement.classList.add(`img-${userOption}`);
	pcPickedOptionElement.classList.add(pcSelection);
	pcPickedImgElement.classList.add(`img-${pcSelection}`);	
containerResultElement.classList.add('simple_body-result--mod');
	result(userOption, pcSelection);
});
}


// #boton reinicio partida
if (playAgainBtnElement) {
	playAgainBtnElement.addEventListener('click', () => {
		containerResultElement.classList.add('hide');		
		gameContainerElement.classList.remove('hide');
		userPickedOptionElement.classList.remove(userOption);
		userPickedImgElement.classList.remove(`img-${userOption}`);
		pcPickedOptionElement.classList.remove(pcSelection);
		pcPickedImgElement.classList.remove(`img-${pcSelection}`);
	});
};
