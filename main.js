const op2players = document.getElementById('option--2players');
const opIa = document.getElementById('option--ia');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const btMenu = document.getElementById('back--menu');

op2players.addEventListener('click', () => {
    menu.classList.add('hide');
    game.classList.remove('hide');
});

opIa.addEventListener('click', ()=> {
    menu.classList.add('hide');
    game.classList.remove('hide');
});

btMenu.addEventListener('click', () => {
    menu.classList.remove('hide');
    game.classList.add('hide');
});

